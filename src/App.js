import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Error from "./components/Error";
import Test from "./components/Test";
import AuthWrapper from "./AuthWrapper";

function App() {
  return (
    <AuthWrapper>
      <Router>
        <Switch>
          <Route exact path="/">
            <DashBoard />
          </Route>
          <Route path="/test">
            <Test />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </AuthWrapper>
  );
}

export default App;
