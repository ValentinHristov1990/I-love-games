import { useEffect, useState } from "react";
import request from "../../utils/request";
import GameCard from "../game-card/GameCard";

export default function Home() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        request("/games?order=created_at.desc&limit=3")
            .then(setGames)
            .catch(err => alert(err));
    }, [])

    return (
        // <!--Home Page-->
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new games are</h2>
                <h3>Only in </h3>
                <img id="logo-left" src="./images/logo.png" alt="logo" />
            </div>

            <div id="home-page">
                <h1>Latest Games</h1>

                <div id="latest-wrap">
                    <div className="home-container">
                        {
                            games.length > 0
                                ? games.map(game => <GameCard key={game.id} {...game} />) :
                                <p className="no-articles">No games yet</p>
                        }
                    </div>
                </div>
            </div>

        </section >

    );
}