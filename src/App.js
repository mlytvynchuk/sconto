import React from "react";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
function App() {
  return (
    <Router>
      <div>
        <Route exact patch="/" component={Home} />
      </div>
    </Router>
  );
}

export default App;
