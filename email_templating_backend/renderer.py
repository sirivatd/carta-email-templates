from typing import Dict

from jinja2 import Environment, BaseLoader


class TemplateRenderer:

    def __init__(self):
        self._env = Environment(loader=BaseLoader)

    def render_template(self, template: str, data: Dict) -> str:
        return self._env.from_string(template).render(**data)
