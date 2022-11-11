import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DashBoard from "./components/DashBoard";
import Error from "./components/Error";
import Test from "./components/Test";

function App() {
  return (
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
  );
}

export default App;
