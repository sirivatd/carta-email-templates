from flask import Flask, jsonify, request
from jinja2 import TemplateSyntaxError, UndefinedError
from werkzeug.exceptions import BadRequest

from email_templating_backend import TemplateRenderer
from email_templating_backend import TemplateStorage

template_storage = TemplateStorage()
template_renderer = TemplateRenderer()

app = Flask(__name__)

PORT = 5000

TEMPLATE_NOT_FOUND_MESSAGE = 'Template not found'
INVALID_JSON_MESSAGE = 'Invalid json, check spec'
TEMPLATE_ERROR = 'Invalid template or context: "{}"'


@app.after_request
def after_request(response):
    response.headers.add('Access-Control-Allow-Origin', '*')
    response.headers.add('Access-Control-Allow-Headers', 'Content-Type,Authorization')
    response.headers.add('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    response.headers.add('Access-Control-Allow-Credentials', 'true')
    return response


@app.route('/templates', methods=['GET'])
def list_templates():
    return jsonify(template_storage.list_template_names()), 200


@app.route('/templates/<name>', methods=['GET'])
def get_template_content(name):
    try:
        return jsonify(
            {'content': template_storage.get_template_content(name)},
        ), 200
    except FileNotFoundError:
        return jsonify(
            {'error': TEMPLATE_NOT_FOUND_MESSAGE},
        ), 404


@app.route('/templates/<name>', methods=['PUT'])
def save_template_content(name):
    try:
        json_content = request.json
    except BadRequest as e:
        return jsonify(
            {'error': e.description},
        ), 400

    if 'content' not in json_content:
        return jsonify(
            {'error': INVALID_JSON_MESSAGE},
        ), 400

    content = json_content['content']

    try:
        template_storage.save_template_content(name, content)
    except FileNotFoundError:
        return jsonify(
            {'error': TEMPLATE_NOT_FOUND_MESSAGE},
        ), 404

    return jsonify({}), 200


@app.route('/render', methods=['POST'])
def render():
    try:
        json_content = request.json
    except BadRequest as e:
        return jsonify(
            {'error': e.description},
        ), 400

    if 'template' not in json_content or 'context' not in json_content:
        return jsonify(
            {'error': INVALID_JSON_MESSAGE},
        ), 400

    template = json_content['template']
    context = json_content['context']
    try:
        body = template_renderer.render_template(template, context)
    except (TemplateSyntaxError, UndefinedError) as e:
        return jsonify(
            {'error': TEMPLATE_ERROR.format(e.message)},
        ), 400
    return jsonify(
        {'body': body}
    ), 200


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=PORT)
