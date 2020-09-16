import React from "react";
import "../assets/css/indent.css";
import { connect } from "react-redux";
import { handleSearchButtonClick } from "../actions/discountActions";
import { fetchTime, fetchCategory } from "../actions/filtersActions";

const FilterMenu = ({
  handleSearchButtonClick,
  timeSlot,
  foodCategory,
  search,
  handleSearchInput,
  renderOptions,
  categories,
  times,
}) => {
  const foodRef = React.createRef();
  const timeRef = React.createRef();
  const searchRef = React.createRef();

  return (
    <div className="indent">
      <h4>Пошук</h4>
      <div className="search-container">
        <form action="#">
          <input
            type="text"
            placeholder="Нажми й шукай"
            name="search"
            ref={searchRef}
            defaultValue={search}
            onChange={(e) => handleSearchInput(e)}
          />
        </form>
      </div>
      <br />
      <div>
        <h4>Їжа</h4>
        <select ref={foodRef} defaultValue={foodCategory}>
          {renderOptions("null", "Обери смаколики", categories)}
        </select>
      </div>
      <br />
      <div>
        <h4>Час доби</h4>
        <select ref={timeRef} defaultValue={timeSlot} readOnly>
          {renderOptions("null", "Обери смаколики", times)}
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

const mapStateToProps = (state) => ({
  foodCategory: state.discounts.foodCategory,
  timeSlot: state.discounts.timeSlot,
  search: state.discounts.search,
  times: state.filters.times,
  categories: state.filters.categories,
});

const mapDispatchToProps = (dispatch) => ({
  handleSearchButtonClick: (search, food, time) =>
    dispatch(handleSearchButtonClick(search, food, time)),
  fetchTime: () => dispatch(fetchTime()),
  fetchCategory: () => dispatch(fetchCategory()),
});
export default connect(mapStateToProps, mapDispatchToProps)(FilterMenu);
