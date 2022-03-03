import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import Chat from "./Pages/Chat/Chat";
import Home from "./Pages/Home/Home";

export default function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
      </Switch>
    </Router>
  );
}
