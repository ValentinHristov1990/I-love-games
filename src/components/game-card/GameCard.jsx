import { Link } from "react-router";

export default function GameCard({
    id,
    title,
    genre,
    imageUrl
}) {
    return (
        <div className="game">
            <img src={imageUrl} alt={title} />
            <div className="details-overlay">
                <p className="name">{title}</p>
                <p className="genre">{genre}</p>
                <Link to={`/games/${id}`} className="details-button">Details</Link>
            </div>
        </div>
    );
}