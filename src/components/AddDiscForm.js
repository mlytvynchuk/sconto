import React from "react";
import axios from "axios";
import "../assets/css/indent.css";
import { DOMAIN } from "../settings";
import { connect } from "react-redux";
import { fetchTime, fetchCategory } from "../actions/filtersActions";

class AddDisc extends React.Component {
  state = {
    cafe: "",
    title: "",
    details: "",
    location: "",
    category: "",
    time: "",
    overlay: "",
    height: "",
    image: null,
    touched: {
      cafe: false,
      title: false,
      details: false,
      location: false,
      category: false,
      time: false,
      overlay: false,
      height: false,
      image: false
    }
  };
  componentDidMount() {
    this.props.fetchCategory();
  }

  handleChange = e => {
    console.log(e.target.id + "-" + e.target.value);
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleImageChange = e => {
    console.log(e.target.toString());
    this.setState({
      image: e.target.files[0]
    });
  };

  isValidField(field) {
    if(!this.state.touched[field])
      return true;
    else 
      return this.state[field] && this.state[field].toString().length > 0 ? true : false;
  }

  handleBlur(field) {
    this.setState({ touched: { ...this.state.touched, [field]: true } });
  }

  addClassNameToField(field) {
    return this.isValidField(field) ? "" : " invalid-data"
  }

  handleSubmit = e => {
    e.preventDefault();
    let form_data = new FormData();
    form_data.append("image", this.state.image, this.state.image.name);
    form_data.append("cafe", this.state.cafe);
    form_data.append("title", this.state.title);
    form_data.append("details", this.state.details);
    form_data.append("location", this.state.location);
    form_data.append("category", this.state.category);
    form_data.append("time", this.state.time);
    form_data.append("overlay", this.state.overlay);
    form_data.append("height", this.state.height);
    console.log(this.state);

    let url = `${DOMAIN}/api/discounts/`;
    axios
      .post(url, form_data)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));
  };

  render() {
    const { cafe, title, details, location, category, time, overlay, height} = this.state;
    const { renderOptions, categories, times } = this.props;
    return (
      <div className="indent">
        <h2>Додайте свою пропозицію</h2>
        <form onSubmit={this.handleSubmit}>
          <div className={`search-container `}>
            <label>
              <b>Назва закладу</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Введіть назву закладу"
              id="cafe"
              className={this.addClassNameToField("cafe")}
              value={cafe}
              onChange={this.handleChange}
              required
              onBlur={() =>this.handleBlur("cafe")}
            />
            <br />
            <br />
            <label>
              <b>Пропозиція</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Введіть умови знижки"
              className={this.addClassNameToField("title")}
              id="title"
              value={title}
              onChange={this.handleChange}
              required
              onBlur={() =>this.handleBlur("title")}
            />
            <br />
            <br />
            <label>
              <b>Опис</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Введіть умови знижки"
              className={this.addClassNameToField("details")}
              id="details"
              value={details}
              onChange={this.handleChange}
              required
              onBlur={() =>this.handleBlur("details")}
            />
            <br />
            <br />
            <label>
              <b>Розташування</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Введіть назву вулиці"
              className={this.addClassNameToField("location")}
              id="location"
              value={location}
              onChange={this.handleChange}
              required
              onBlur={() =>this.handleBlur("location")}
            />
            <br />
            <br />
            <label>
              <b>Категорію</b>
              <br />
            </label>
            <select
              id="category"
              className={this.addClassNameToField("category")}
              value={category}
              onChange={this.handleChange}
              onBlur={() =>this.handleBlur("category")}
              required
            >
              {
                renderOptions("", "Виберіть категорію", categories)
              }
              {/* <option value="">Виберіть категорію</option>
              <option value="3">Азійська кухня</option>
              <option value="4">Українська кухня</option>
              <option value="1">ФастФуд</option>
              <option value="5">Десерти</option>
              <option value="6">Алкоголь</option>
              <option value="2">Кава</option> */}
            </select>
            <br />
            <br />
            <label>
              <b>Час доби</b>
              <br />
            </label>
            <select
              id="time"
              className={this.addClassNameToField("time")}
              value={time}
              onChange={this.handleChange}
              onBlur={() =>this.handleBlur("time")}
              required
            >
              {
                renderOptions("", "Виберіть час", times)
              }
              {/* <option value="">Виберіть час</option>
              <option value="1">Сніданок</option>
              <option value="2">Ланч</option>
              <option value="3">Обід</option>
              <option value="4">Вечеря</option> */}
            </select>
            <br />
            <br />
            <label>
              <b>Фон</b>
              <br />
            </label>
            <select
              id="overlay"
              className={this.addClassNameToField("overlay")}
              value={overlay}
              onChange={this.handleChange}
              onBlur={() =>this.handleBlur("overlay")}
              required
            >
              <option value="">Виберіть фон</option>
              <option value="1">dark</option>
              <option value="2">light</option>
            </select>
            <br />
            <br />
            <label>
              <b>Розмір</b>
              <br />
            </label>
            <select
              id="height"
              className={this.addClassNameToField("height")}
              value={height}
              onChange={this.handleChange}
              onBlur={() =>this.handleBlur("height")}
              required
            >
              <option value="">Виберіть розмір</option>
              <option value="1">360</option>
            </select>
            <br />
            <br />
            <label>
              <b>Додати зображення</b>
            </label>
            <br />
            <input
              id="image"
              className={this.addClassNameToField("image")}
              type="file"
              accept="image/png,image/jpeg"
              onChange={this.handleImageChange}
              onBlurCapture={() =>this.handleBlur("image")}
              required
            />
          </div>
          <br />
          <button className="btn btn-primary" type="submit" value="Submit">
            Додати
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  times: state.filters.times,
  categories: state.filters.categories,
});

const mapDispatchToProps = dispatch => ({
  fetchTime: () => dispatch(fetchTime()),
  fetchCategory: () => dispatch(fetchCategory()),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddDisc);
