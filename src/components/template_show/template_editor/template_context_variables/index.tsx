import React, { useEffect, useState } from 'react';

// import { extractContentVariables, formJSONFromArray } from "../../utils";

interface Props {
  templateName: string
}

function TemplateContextVariables(props: Props) {
  const [contextVariableString, setContentVariableString] = React.useState("");
  const [contextVariables, setContextVariables] = React.useState([]);

  useEffect(() => {
    fetch(`http://0.0.0.0:5000/templates/${props.templateName}`)
    .then(res => {
      return res.json()
      }
    )
    .then(
      (result) => {
        // let extractedVariables: string[] = extractContentVariables(result.content)
        // setContextVariables(extractedVariables);
        // setContentVariableString(formJSONFromArray(extractedVariables));
      }
    )
  }, []);

  return (
    <div>
      <p>{contextVariableString}</p>
    </div>
  );
}

export default TemplateContextVariables;