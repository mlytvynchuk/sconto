import React from 'react';
import '../assets/css/indent.css';

const AddDisc = () => {
    return (
        <div className="indent">
            <h2>Додайте свою пропозицію</h2>
            <form action=''>
                <div className='search-container'>
                    <label for="add-name"><b>Назва закладу</b></label><br/>
                    <input type="text" placeholder="Введіть назву закладу" name="add-name" required />
                    <br/>
                    <br/>
                    <label for="add-offer"><b>Пропозиція</b></label><br/>
                    <input type="text" placeholder="Введіть умови знижки" name="add-offer" required />
                    <br/>
                    <br/>
                    <label for="add-location"><b>Розташування</b></label><br/>
                    <input type="text" placeholder="Введіть назву вулиці" name="add-location" required />
                    <br/>
                    <br/>
                    <label for="add-photo"><b>Додати зображення</b></label><br/>
                    <input type="file" name="photo" multiple accept="image/*,image/jpeg" />
                </div>
                <br/>
                <button className="btn btn-primary" type='submit'>Додати</button>
                           
            </form>
        </div>

    );
}

export default AddDisc;