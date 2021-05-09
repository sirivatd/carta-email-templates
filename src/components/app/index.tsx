import React, { useEffect, useState } from 'react';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import TemplateShow from "../template_show";
import TemplateList from "../template_list";
import NotFound from "../not_found";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/:templateId" component={TemplateShow} />
        <Route exact path="/" component={TemplateList} />
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;