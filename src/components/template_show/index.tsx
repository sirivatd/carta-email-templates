import React, { useEffect, useState } from 'react';

import TemplateEditor from "./template_editor";
import TemplatePreview from "./template_preview";

interface Props {
  match: any
}

function TemplateShow(props: Props) {
  return (
    <div>
      <h1>{props.match.params.templateId}</h1>
      <TemplatePreview templateName={props.match.params.templateId}/>
      <TemplateEditor templateName={props.match.params.templateId}/>
    </div>
  );
}

export default TemplateShow;
