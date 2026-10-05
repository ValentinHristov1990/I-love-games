import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import request from "../../utils/request";

export default function Details() {

    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        request(`/games?id=eq.${gameId}`)
            .then(result => {
                setGame(result[0])
            })
            .catch(error => alert(error))
    }, [gameId]);

    const deleteHandler = async (e) => {
        e.preventDefault();

        const confirmed = confirm(`Are sure you want to delete ${game.title} game?`);

        if (!confirmed) {
            return;
        }

        try {
            await request(`games?id=eq.${gameId}`, "DELETE");
            navigate("/catalog");
        } catch (error) {
            return alert(error);
        }
    }

    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="header-and-image">
                    <img className="game-img" src={game.imageUrl} alt={game.title} />

                    <div className="meta-info">
                        <h1 className="game-name">{game.title}</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">{game.genre}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">{game.activePlayers}</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">{game.releaseDate}</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">{game.summary}</p>
                    </div>
                </div>

                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button" onClick={deleteHandler}>Delete</a>
                </div>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        <li className="comment">
                            <p>Content: A masterpiece of world design, though the boss fights are brutal.</p>
                        </li>
                        <li className="comment">
                            <p>Content: Truly feels like a next-gen evolution of the Souls formula!</p>
                        </li>
                    </ul>
                    {/* <!-- Display paragraph: If there are no games in the database --> */}
                    {/* <!-- <p className="no-comment">No comments.</p> --> */}
                </div>

            </div>
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}
            <article className="create-comment">
                <label>Add new comment:</label>
                <form className="form">
                    <textarea name="comment" placeholder="Comment......"></textarea>
                    <input className="btn submit" type="submit" value="Add Comment" />
                </form>
            </article>
        </section>
    );
}