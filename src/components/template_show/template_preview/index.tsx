import React, { useEffect, useState } from 'react';

interface Props {
  templateName: string
}

function TemplatePreview(props: Props) {
  const [emailPreview, setEmailPreview] = React.useState("")

  const renderEmailPreview = (emailContent: string) => {
    let emailPreviewContainer = document.querySelector('#email-preview-container');
    if(emailPreviewContainer) {
      emailPreviewContainer.innerHTML = emailContent;
    }
  }
  
  useEffect(() => {
    fetch(`http://0.0.0.0:5000/templates/${props.templateName}`)
      .then(res => {
        return res.json()
        }
      )
      .then(
        (result) => {
          renderEmailPreview(result.content)
        }
      )
  }, []);
  return (
    <div id="style-container">
      <div id="email-preview-container" />
    </div>
  );
}

export default TemplatePreview;