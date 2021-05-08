import os

from typing import Optional, List

TEMPLATE_PATH = './email_templating_backend/templates/'
TEMPLATE_EXTENSION = '.tmp'

class TemplateStorage:
    _templates = {}

    def __init__(self):
        for file in os.listdir(TEMPLATE_PATH):
            if file.endswith(TEMPLATE_EXTENSION):
                self._templates[file] = open(os.path.join(TEMPLATE_PATH, file)).read()


    def list_template_names(self) -> List[str]:
        return list(self._templates.keys())

    def get_template_content(self, name: str) -> Optional[str]:
        if name not in self._templates:
            raise FileNotFoundError()
        return self._templates[name]

    def save_template_content(self, name: str, content: str):
        if name not in self._templates:
            raise FileNotFoundError()
        self._templates[name] = content
