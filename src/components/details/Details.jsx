export default function Details() {
    return (
        <section id="game-details">
            <h1>Game Details</h1>
            <div className="info-section">

                <div className="header-and-image">
                    <img className="game-img" src="images/elden ring.png" alt="Elden Ring Cover Art" />

                    <div className="meta-info">
                        <h1 className="game-name">Elden Ring</h1>

                        <p className="data-row">
                            <span className="label">Genre:</span>
                            <span className="value">Action RPG</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Active Players:</span>
                            <span className="value">100000</span>
                        </p>

                        <p className="data-row">
                            <span className="label">Release Date:</span>
                            <span className="value">2022-02-25</span>
                        </p>
                    </div>
                    <div className="summary-section">
                        <h2>Summary:</h2>
                        <p className="text-summary">
                            Elden Ring is a fantasy action RPG developed by FromSoftware and Bandai Namco. Set in the Lands Between,
                            players embark on an epic quest to become the Elden Lord, exploring a vast open world designed by Hidetaka Miyazaki,
                            with worldbuilding contributed by fantasy author George R. R. Martin. The game features challenging combat,
                            deep lore, and extensive character customization.
                        </p>
                    </div>
                </div>


                {/* <!-- Edit/Delete buttons ( Only for creator of this game )  --> */}
                <div className="buttons">
                    <a href="#" className="button">Edit</a>
                    <a href="#" className="button">Delete</a>
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