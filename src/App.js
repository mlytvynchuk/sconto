import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </div>
    </Router>
  );
}

export default App;
