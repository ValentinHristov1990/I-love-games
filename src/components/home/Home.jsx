export default function Home() {
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
                    {/* <!-- Display div: with information about every game (if any) --> */}
                    <div className="home-container">
                        <div className="game">
                            <img src="./images/witcher.png" alt="Elden Ring" />
                            <div className="details-overlay">
                                <p className="name">The Witcher 3</p>
                                <p className="genre">Open World</p>
                                <button className="details-button">Details</button>
                            </div>
                        </div>
                        <div className="game">
                            <img src="./images/elden ring.png" alt="Elden Ring" />
                            <div className="details-overlay">
                                <p className="name">Elden Ring</p>
                                <p className="genre">Action RPG</p>
                                <button className="details-button">Details</button>
                            </div>
                        </div>
                        <div className="game">
                            <img src="./images/minecraft.png" alt="Minecraft" />
                            <div className="details-overlay">
                                <p className="name">Minecraft</p>
                                <p className="genre">Sandbox</p>
                                <button className="details-button">Details</button>
                            </div>
                            {/* <!-- Display paragraph: If there is no games  --> */}
                            {/* <!-- <p className="no-articles">No games yet</p> --> */}
                        </div>

                    </div>
                </div>
            </div>

        </section >

    );
}