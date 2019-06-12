
import React from 'react';
const FilterMenu = () => {
    return (
        <div>
            <h4>Пошук</h4>
            <div class="search-container">
                <form action="/action_page.php">
                    <input type="text" placeholder="Нажми й шукай" name="search" />
                    <button type="submit"><i class="fa fa-search"></i></button>
                </form>
            </div>
            <br/>
            <div>
                <h4>Їжа</h4>
                <select name="" id="">
                    <option value="1" disabled selected>Обери смаколики</option>  
                    <option value="1">Фастфуд</option>  
                    <option value="1">Українська кухня</option>
                    <option value="1">Кава</option>  
                </select>
            </div>
            <br/>
            <div>
                <h4>Час доби</h4>
                <select name="" id="">
                    <option value="1" disabled selected>Обери час</option>  
                    <option value="1">Фастфуд</option>  
                    <option value="1">Українська кухня</option>
                    <option value="1">Кава</option>  
                </select>
            </div>
            <br/>
            <div>
                <button class="btn btn-primary">Шукати</button>
            </div>
        </div>
    )
}
export default FilterMenu;