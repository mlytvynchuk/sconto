import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Discount from "../components/Discount";

class Home extends Component {
  state={
    discounts: [
      {
        id: 1,
        title: "Дешева піца для СТУДЕНТІВ",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        overlay: "dark",
        image: 'src/assets/img/pivas.jpg',
        category: "Фастфуд",
        time: "Сніданок",
        
      },
      {
        id: 2,
        title: "Знижка на каву",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg',
        category: "Кава",
        overlay: "dark",
        time: "Сніданок",
      
      },
      {
        id: 3,
        title: "Знижка на укр кухню",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg',
        category: "Українська кухня",
        overlay: "dark",
        time: "Вечеря",

      },
      {
        id: 4,
        title: "Дешева піца для СТУДЕНТІВ",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg',
        category: "Фастфуд",
        overlay: "dark",
        time: "Обід",

      },
      {
        id: 5,
        title: "Дешева піца для СТУДЕНТІВ",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        overlay: "dark",
        image: 'src/assets/img/pivas.jpg',
        category: "Фастфуд",
        time: "Сніданок",
        
      },
      {
        id: 6,
        title: "Знижка на каву",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg',
        category: "Кава",
        overlay: "dark",
        time: "Обід",
      
      },
      {
        id: 7,
        title: "Знижка на укр кухню",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg',
        category: "Українська кухня",
        overlay: "dark",
        time: "Сніданок",

      },
      {
        id: 8,
        title: "Дешева піца для СТУДЕНТІВ",
        details: "Приходьте в наш заклад на вул. Січових Стрільців,11. Покажіть дійсний студентський квиток на барі. Смакуй чудову піцу",
        image: 'src/assets/img/pivas.jpg',
        category: "Фастфуд",
        overlay: "dark",
        time: "Вечеря",

      }
    ],
    foodCategory: null,
    timeSlot: null,

  }
  handleFoodChange = event => this.setState({foodCategory: event.target.value });
  

  handleTimeChange = event => this.setState({timeSlot: event.target.value});
  
  displayAllDiscounts = () =>  
    this.state.discounts.map(discount => 
    <Discount key={discount.id} title={discount.title} details={discount.details} overlay={discount.overlay} cafe={discount.cafe} image={discount.image}/>)
  

  filterDiscounts = () => {
    const { discounts, foodCategory, timeSlot } = this.state;
    let discountCopy = [...discounts];
    console.log()
       
    if(foodCategory)
      discountCopy = discountCopy.filter((discount) =>  discount.category === foodCategory);
    if(timeSlot)
      discountCopy = discountCopy.filter((discount) =>  discount.time === timeSlot);
    
    return discountCopy
      .map(discount => <Discount key={discount.id} title={discount.title} details={discount.details} overlay={discount.overlay} cafe={discount.cafe} image={discount.image}/>);

  }



  render() {
    const { foodCategory, timeSlot } = this.state;
    return (
      <div>
        <Navbar handleFoodChange={this.handleFoodChange} handleTimeChange={this.handleTimeChange} />
        <div className="main-container">
          <div className="grid">
           {foodCategory || timeSlot ? this.filterDiscounts() : this.displayAllDiscounts()}
          </div>
        </div>
      </div>
    );
  }
}
export default Home;
