import React, { useEffect, useState } from 'react';

interface Props {
  templateName: string
}

function TemplateContextVariables(props: Props) {
  return (
    <div>
      <p>I'm the context variables</p>
    </div>
  );
}

export default TemplateContextVariables;