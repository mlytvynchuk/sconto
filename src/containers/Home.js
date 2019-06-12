import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";

class Home extends Component {
  state={
    discounts: [
      {
        title: "Дешева піца для СТУДЕНТІВ",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        overlay: "dark",
        image: 'src/assets/img/pivas.jpg',
        category: "",
        time: ""
        
      },
      {
        title: "Дешева піца для СТУДЕНТІВ",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg'
      }
    ]
  }
  render() {
    return (
      <div>
        <Navbar />
        <div className="main-container">
          <div className="grid">
           {this.state.discounts.map((item, index) => (
             <Discount key={index} title={item.title} details={item.details} overlay={item.overlay} cafe={item.cafe} image={item.image}/>
           ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
