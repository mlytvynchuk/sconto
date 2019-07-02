import React from 'react';
import axios from 'axios';
import '../assets/css/indent.css';


class AddDisc extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      cafe: '',
      title: '',
      details: '',
      location: '',
      category: null,
      time: null,
      overlay: null,
      height: null,
      image: null
      };


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange = (e) => {
    console.log(e.target.id +'-'+e.target.value)
    this.setState({
      [e.target.id]: e.target.value
    })
    };

    handleImageChange = (e) => {
    this.setState({
      image: e.target.files[0]
    })
     };

    handleSubmit = (e) => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append('image', this.state.image, this.state.image.name);
    form_data.append('cafe', this.state.cafe);
    form_data.append('title', this.state.title);
    form_data.append('details', this.state.details);
    form_data.append('location', this.state.location);
    form_data.append('category', this.state.category);
    form_data.append('time', this.state.time);
    form_data.append('overlay', this.state.overlay);
    form_data.append('height', this.state.height);
    
    let url = 'http://localhost:8000/api/discounts/';
     axios.post(url, form_data)
         .then(res => {
           console.log(res.data);
        })
         .catch(err => console.log(err))
     };

    render(){
    return (
        <div className="indent">
            <h2>Додайте свою пропозицію</h2>
            <form onSubmit={this.handleSubmit}>
                <div className='search-container'>
                    <label ><b>Назва закладу</b></label><br/>
                    <input type="text" placeholder="Введіть назву закладу" id="cafe" value={this.state.cafe} onChange={this.handleChange} required />
                    <br/>
                    <br/>
                    <label><b>Пропозиція</b></label><br/>
                    <input type="text" placeholder="Введіть умови знижки" id="title" value={this.state.discount} onChange={this.handleChange} required />
                    <br/>
                    <br/>
                    <label ><b>Description</b></label><br/>
                    <input type="text" placeholder="Введіть умови знижки" id="details" value={this.state.details} onChange={this.handleChange} required />
                    <br/>
                    <br/>
                    <label ><b>Розташування</b></label><br/>
                    <input type="text" placeholder="Введіть назву вулиці" id="location" value={this.state.location} onChange={this.handleChange}  required />
                    <br/>
                    <br/>
                    <label><b>Категорію</b><br/></label>
                      <select id="category" value={this.state.value} onChange={this.handleChange}>
                        <option value="0">Виберіть категорію</option>
                        <option value="4">Азійська кухня</option>
                        <option value="3">Українська кухня</option>
                        <option value="1">ФастФуд</option>
                        <option value="6">Десерти</option>
                        <option value="5">Алкоголь</option>
                        <option value="2">Кава</option>
                      </select>                     
                    <br/>
                    <br/>
                    <label><b>Час доби</b><br/></label>
                      <select id="time"  value={this.state.value} onChange={this.handleChange}>
                        <option value="0">Виберіть час</option>
                        <option value="2">Сніданок</option>
                        <option value="1">Ланч</option>
                        <option value="3">Обід</option>
                        <option value="4">Вечеря</option>
                      </select>
                    <br/>
                    <br/>
                    <label><b>Фон</b><br/></label>
                      <select id="overlay" value={this.state.value} onChange={this.handleChange}>
                        <option value="0">Виберіть фон</option>
                        <option value="1">dark</option>
                        <option value="2">light</option>
                      </select>
                    <br/>
                    <br/>
                    <label><b>Розмір</b><br/></label>
                      <select id="height" value={this.state.value} onChange={this.handleChange}>
                        <option value="0">Виберіть розмір</option>
                        <option value="1">360</option>
                      </select>
                    <br/>
                    <br/>               
                    <label><b>Додати зображення</b></label><br/>
                    <input type="file" id="image" multiple accept="image/png,image/jpeg" onChange={this.handleImageChange}/>
                </div>
                <br/>
                <button className="btn btn-primary" type='submit' value='Submit'>Додати</button>
                           
            </form>
        </div>

    );
}
}

export default AddDisc;