import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import MapContainer from "./components/MapContainer";
function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/map" component={MapContainer} />
      </div>
    </Router>
  );
}
export default App;
