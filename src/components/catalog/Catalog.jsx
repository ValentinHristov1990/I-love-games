import { useContext, useEffect, useState } from "react";
import GameCard from "../game-card/GameCard";
import { gameApi } from "../../api";
import AuthContext from "../../contexts/authContext";

export default function Catalog() {
    const { accessToken } = useContext(AuthContext);
    const [games, setGames] = useState([]);

    useEffect(() => {
        gameApi.getAll(accessToken)
            .then(setGames)
            .catch(err => alert(err))
    }, [accessToken])

    return (
        <section id="catalog-page">
            <h1>Catalog</h1>

            <div className="catalog-container">
                {
                    games.length > 0
                        ? games.map(game => <GameCard key={game.id} {...game} />)
                        :
                        <h3 className="no-articles">No Added Games Yet</h3>
                }
            </div>
        </section>
    );
}