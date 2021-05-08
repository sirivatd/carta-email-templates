import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

interface EmailTemplate {

}

function TemplateList() {
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
        <Link to={`/${template}`}>{template}</Link>
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
    <div className="template-list">
      {renderEmailTemplates()}
    </div>
  );
}

export default TemplateList;
