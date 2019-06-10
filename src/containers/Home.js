import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";
class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <div className="grid">
            <Discount />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
