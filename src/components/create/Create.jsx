import { useState } from "react";
import request from "../../utils/request";

const initialValues = {
    title: '',
    genre: '',
    activePlayers: '',
    releaseDate: '',
    imageUrl: '',
    summary: '',
}
export default function Create() {

    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const submitAction = async () => {
        const result = await request("/games", "POST", {
            ...values,
            activePlayers: Number(values.activePlayers)
        });
        console.log(result)
    }

    return (
        // <!-- add Page ( Only for logged-in users ) -->
        <section id="add-page">
            <form id="add-new-game" action={submitAction}>
                <div className="container">

                    <h1>Add New Game</h1>

                    <div className="form-group-half">
                        <label htmlFor="gameName">Game Name:</label>
                        <input
                            type="text"
                            id="gameName"
                            name="title"
                            placeholder="Enter game title..."
                            value={values.title}
                            onChange={changeHandler} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="genre">Genre:</label>
                        <input
                            type="text"
                            id="genre"
                            name="genre"
                            placeholder="Enter game genre..."
                            value={values.genre}
                            onChange={changeHandler} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="activePlayers">Active Players:</label>
                        <input
                            type="number"
                            id="activePlayers"
                            name="activePlayers"
                            min="0" placeholder="0"
                            value={values.activePlayers}
                            onChange={changeHandler} />
                    </div>

                    <div className="form-group-half">
                        <label htmlFor="releaseDate">Release Date:</label>
                        <input
                            type="date"
                            id="releaseDate"
                            name="releaseDate"
                            value={values.releaseDate}
                            onChange={changeHandler} />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="imageUrl">Image URL:</label>
                        <input
                            type="text"
                            id="imageUrl"
                            name="imageUrl"
                            placeholder="Enter image URL..."
                            value={values.imageUrl}
                            onChange={changeHandler} />
                    </div>

                    <div className="form-group-full">
                        <label htmlFor="summary">Summary:</label>
                        <textarea
                            name="summary"
                            id="summary"
                            rows="5"
                            placeholder="Write a brief summary..."
                            value={values.summary}
                            onChange={changeHandler} ></textarea>
                    </div>

                    <input className="btn submit" type="submit" value="ADD GAME" />
                </div>
            </form>
        </section>
    );
}