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
    const testTemplate = '<html> <head> <style type="text/css"> body { font-family: Tahoma, sans-serif; background-color: #EEE; color: #333; } h1 { color: #02A1FE; } </style> </head> <body> <h1>Welcome to Carta! {{ user.name }}</h1> <p> Please visit <a href="{{ confirmation.url }}">this link</a> to confirm your account. </p> </body> </html>'
    const testTemplateString = '{"confirmation":{"url":"*placeholder*"},"user":{"name":"*placeholder*"}}'
    console.log(JSON.parse(testTemplateString))
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({template: testTemplate, context: JSON.parse(testTemplateString)})
    }
    fetch(`http://0.0.0.0:5000/render`, requestOptions)
      .then(res => {
        return res.json()
        }
      )
      .then(
        (result) => {
          renderEmailPreview(result.body)
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