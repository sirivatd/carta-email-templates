import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import TemplateEditor from "../template_editor";
import TemplateList from "../template_list";
import NotFound from "../not_found";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:templateId">
          <TemplateEditor />
        </Route>
        <Route exact path="/">
          <TemplateList />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
