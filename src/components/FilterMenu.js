
import React from 'react';
const FilterMenu = ({handleTimeChange, handleFoodChange, handleSearchButtonClick, timeSlot}) => {
    const foodRef = React.createRef();
    const timeRef = React.createRef();

// const handleSearchButtonClick = () => {
//         console.log(foodRef.current.value);
//     }

    return (
        <div>
            <h4>Пошук</h4>
            <div className="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Нажми й шукай" name="search" />
                    <button type="submit"><i className="fa fa-search"></i></button>
                </form>
            </div>
            <br/>
            <div>
                <h4>Їжа</h4>
                <select /*onChange={handleFoodChange}*/ ref={foodRef}>
                    <option value="null" >Обери смаколики</option>  
                    <option value="Фастфуд">Фастфуд</option>  
                    <option value="Українська кухня">Українська кухня</option>
                    <option value="Кава">Кава</option>  
                </select>
            </div>
            <br/>
            <div>
                <h4>Час доби</h4>
                <select /*onChange={handleTimeChange}*/ ref={timeRef} value={timeSlot}>
                    <option value="null">Обери час</option>  
                    <option value="Сніданок">Сніданок</option>  
                    <option value="Обід">Обід</option>
                    <option value="Вечеря">Вечеря</option>  
                </select>
            </div>
            <br/>
            <div>
                <button className="btn btn-primary" onClick={() => handleSearchButtonClick(foodRef.current.value, timeRef.current.value)}>Шукати</button>
            </div>
        </div>
    )
}
export default FilterMenu;