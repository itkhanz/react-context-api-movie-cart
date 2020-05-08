import React, {useState, useContext} from 'react'; 
import {MovieContext} from './MovieContext';
import {v4 as uuid} from "uuid"; 

const AddMovie = () => {
    const [movies, setMovies] = useContext(MovieContext);

    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const updateName = (e) => {
        setName(e.target.value);
    };

    const updatePrice = (e) => {
        setPrice(e.target.value);
    };

    const addMovie = e => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name, price, id: uuid()}]);
    };

    return (
        <div>
            <h2>Add new movie to the list</h2>
            <form onSubmit={addMovie}>
                <input type="text" placeholder="Name of Movie..." name="name" value={name} onChange={updateName}/>
                <input type="text" placeholder="Price of Movie..." name="price" value={price} onChange={updatePrice}/>
                <button>Submit</button>
            </form>
        </div>
    );
}

export default AddMovie;