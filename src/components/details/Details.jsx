import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import request from "../../utils/request";
import CreateComment from "../create-comment/CreateComment";
import CommentsList from "../comments-list/CommentsList";

export default function Details({
    user,
}) {

    const { gameId } = useParams();
    const [game, setGame] = useState({});
    const navigate = useNavigate();
    const [refresh, setRefresh] = useState(false);

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
                    <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>
                    <Link to="#" className="button" onClick={deleteHandler}>Delete</Link>
                </div>
                <CommentsList gameId={gameId} refresh={refresh} />

            </div>
            {/* <!-- Add Comment ( Only for logged-in users, which is not creators of the current game ) --> */}

            {user && <CreateComment user={user} gameId={gameId} onCreate={() => setRefresh(state => !state)} />}

        </section>
    );
}