import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";

class Home extends Component {
  state={
    discounts: [
    ]
  }
  componentDidMount(){
    return fetch("http://localhost:8000/discounts/")
            .then(response => response.json())
            .then(result => {
              this.setState({discounts: result})
            });
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <div className="grid">
           {this.state.discounts.map((item, index) => (
             <Discount key={index} title={item.title} details={item.details} overlay={item.overlay} cafe={item.cafe} image={item.image} height={item.height}/>
           ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
