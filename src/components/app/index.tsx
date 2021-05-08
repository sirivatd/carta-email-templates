import React, { useEffect, useState } from 'react';

interface EmailTemplate {

}

function App() {
  const [emailTemplates, setEmailTemplates] = useState([])

  useEffect(() => {
    fetch("http://0.0.0.0:5000/templates")
      .then(res => {
        return res.json()
        }
      )
      .then(
        (result) => {
          console.log(result)
          setEmailTemplates(result)
        }
      )
  }, []);

  const renderEmailTemplate = (template: EmailTemplate) => {
    return (
        <p>{template}</p>
    )
  }

  const renderEmailTemplates = () => {
    return (
      emailTemplates.map((template: EmailTemplate) => {
        return renderEmailTemplate(template)
      })
    )
  }

  return (
    <div className="App">
        {renderEmailTemplates()}
    </div>
  );
}

export default App;
