import React from "react";
import '../assets/css/indent.css';
import { connect } from "react-redux";
import { handleSearchButtonClick } from "../actions/discountActions";

const FilterMenu = ({
  handleSearchButtonClick,
  timeSlot,
  foodCategory,
  search,
  handleSearchInput
}) => {
  const foodRef = React.createRef();
  const timeRef = React.createRef();
  const searchRef = React.createRef();

  return (
    <div className="indent">
      <h4>Пошук</h4>
      <div className="search-container">
        <form action="#">
          <input type="text" placeholder="Нажми й шукай" name="search" ref={searchRef} defaultValue={search}  onChange={(e) => handleSearchInput(e)}/>
        </form>
      </div>
      <br />
      <div>
        <h4>Їжа</h4>
        <select ref={foodRef} defaultValue={foodCategory}>
          <option value="null">Обери смаколики</option>
          <option value="Фастфуд">Фастфуд</option>
          <option value="Українська кухня">Українська кухня</option>
          <option value="Кава">Кава</option>
        </select>
      </div>
      <br />
      <div>
        <h4>Час доби</h4>
        <select ref={timeRef} defaultValue={timeSlot} readOnly>
          <option value="null">Обери час</option>
          <option value="Сніданок">Сніданок</option>
          <option value="Обід">Обід</option>
          <option value="Вечеря">Вечеря</option>
        </select>
      </div>
      <br />
      <div>
        <button
          className="btn btn-primary"
          onClick={() => {
            handleSearchButtonClick(
              searchRef.current.value,
              foodRef.current.value,
              timeRef.current.value
            );
          }}
        >
          Шукати
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  foodCategory: state.discounts.foodCategory,
  timeSlot: state.discounts.timeSlot,
  search: state.discounts.search,
});

const mapDispatchToProps = dispatch => ({
  handleSearchButtonClick: (search, food, time) =>
    dispatch(handleSearchButtonClick(search, food, time)),
  
});
export default  connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
