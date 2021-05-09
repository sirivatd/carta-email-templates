import React, { useEffect, useState } from 'react';

import TemplateForm from "./template_form";
import TemplateContextVariables from "./template_context_variables";

interface Props {
  templateName: string
}

function TemplateEditor(props: Props) {
  return (
    <div>
      <h4>I'm the editor</h4>
      <TemplateForm templateName={props.templateName} />
      <TemplateContextVariables templateName={props.templateName} />
    </div>
  );
}

export default TemplateEditor;