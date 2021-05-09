import React, { useEffect, useState } from 'react';

interface Props {
  templateName: string
}

function TemplateForm(props: Props) {
  const [emailTemplate, setEmailTemplate] = React.useState("")

  useEffect(() => {
    fetch(`http://0.0.0.0:5000/templates/${props.templateName}`)
      .then(res => {
        return res.json()
        }
      )
      .then(
        (result) => {
          console.log(result)
          setEmailTemplate(result.content)
        }
      )
  }, []);

  return (
    <div>
      <p>{emailTemplate}</p>
    </div>
  );
}

export default TemplateForm;