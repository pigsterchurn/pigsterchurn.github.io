import React from 'react';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

class Games extends React.Component {
    render() {
        const completedGames = [];
        populateGames();

        function populateGames() {
            completedGames.push({
                title: "A Short Hike",
                text: 'PC (Steam)',
                image: 'a-short-hike.png',
                link: '/docs/games/a-short-hike'
            });
            completedGames.push({
                title: "Celeste",
                text: 'PC (Steam)',
                image: 'celeste.png',
                link: '/docs/games/celeste'
            });
            completedGames.push({
                title: "Crash Bandicoot N. Sane Trilogy",
                text: 'PlayStation 4',
                image: 'crash.png',
                link: '/docs/games/crash-bandicoot'
            });
            completedGames.push({
                title: "Final Fantasy VII Remake",
                text: 'PlayStation 4',
                image: 'ffviir.png',
                link: '/docs/games/ffviir'
            });
            completedGames.push({
                title: "Final Fantasy X HD Remaster",
                text: 'PlayStation 4',
                image: 'ffx.png',
                link: '/docs/games/ffx'
            });
            completedGames.push({
                title: "Final Fantasy X-2 HD Remaster",
                text: 'PlayStation 4',
                image: 'ffx.png',
                link: '/docs/games/ffx2'
            });
            completedGames.push({
                title: "Lost in Play",
                text: 'PC (Steam)',
                image: 'lost-in-play.jpg',
                link: '/docs/games/lost-in-play'
            });
            completedGames.push({
                title: "Monster Hunter Stories 2",
                text: 'Nintendo Switch',
                image: 'mhst2.jpg',
                link: '/docs/games/mhst2'
            });
            completedGames.push({
                title: "NEO: The World Ends with You",
                text: 'Nintendo Switch',
                image: 'ntwewy.jpg',
                link: '/docs/games/ntwewy'
            });
            completedGames.push({
                title: "Return to Monkey Island",
                text: 'PC (Steam)',
                image: 'monkey-island.jpg',
                link: '/docs/games/monkey-island'
            });
            completedGames.push({
                title: "Spiritfarer",
                text: 'PC (Steam)',
                image: 'spiritfarer.jpg',
                link: '/docs/games/spiritfarer'
            });
            completedGames.push({
                title: "The Alliance Alive",
                text: 'Nintendo Switch',
                image: 'the-alliance-alive.png',
                link: '/docs/games/the-alliance-alive'
            });
            completedGames.push({
                title: "The Great Ace Attorney Chronicles",
                text: 'Nintendo Switch',
                image: 'tgaac.jpg',
                link: '/docs/games/tgaac'
            });
            completedGames.push({
                title: "TOEM",
                text: 'PC (Steam)',
                image: 'toem.jpg',
                link: '/docs/games/toem'
            });
        }

        const completedGamesList = completedGames.map((game) =>
            <GameCard key={game.title}
                title={game.title}
                text={game.text}
                image={game.image}
                link={game.link}>
            </GameCard>
        );
        return (
            <Layout className="docMainWrapper wrapper">
                <section className={styles.features}>
                    <div className="container">
                        <h1>Games</h1>
                        <ul>
                            <li>Listed here are all the games that I have recorded/streamed.</li>
                            <li>All the streamed playthroughs are not edited at all.</li>
                            <li>My playthroughs will mostly
                                only cover the main story/campaign (i.e. not 100% playthroughs).</li>
                        </ul>

                        <h2>Ongoing Playthroughs</h2>
                        <div className="game-grid">
                            <GameCard title="Dave the Diver"
                                text="PC (Steam)"
                                image="dave-the-diver.jpg"
                                link="/docs/games/dave-the-diver">
                            </GameCard>
                            <GameCard title="Touhou Mystia's Izakaya"
                                text="PC (Steam)"
                                image="touhou-mystia.jpg"
                                link="/docs/games/touhou-mystia">
                            </GameCard>
                        </div>

                        <h2>Completed Playthroughs</h2>
                        <div className="game-grid">
                            {completedGamesList}
                        </div>

                        <h2>Paused Playthroughs</h2>
                        <p>Incomplete playthroughs that are put on hiatus indefinitely.</p>
                        <div className="game-grid">
                            <GameCard title="Crash Bandicoot 4: It's About Time"
                                text="Playstation 4"
                                image="crash-4.jpg"
                                link="/docs/games/crash-bandicoot-4">
                            </GameCard>
                            <GameCard title="Cult of the Lamb"
                                text="PC (Steam)"
                                image="cult-of-the-lamb.jpg"
                                link="/docs/games/cult-of-the-lamb">
                            </GameCard>
                            <GameCard title="Hollow Knight"
                                text="PC (Steam)"
                                image="hollow-knight.jpg"
                                link="/docs/games/hollow-knight">
                            </GameCard>
                            <GameCard title="Luigi's Mansion 3"
                                text="Nintendo Switch"
                                image="luigi-mansion-3.jpg"
                                link="/docs/games/luigi-mansion-3">
                            </GameCard>
                            
                            <GameCard title="Mario + Rabbids Kingdom Battle"
                                text="Nintendo Switch"
                                image="mario-rabbids.png"
                                link="/docs/games/mario-rabbids">
                            </GameCard>

                            <GameCard title="Plants vs. Zombies: Battle for Neighborville"
                                text="Nintendo Switch"
                                image="pvzbfn.jpg"
                                link="/docs/games/pvzbfn">
                            </GameCard>

                            <GameCard title="Splatoon 2"
                                text="Nintendo Switch"
                                image="splatoon-2.png"
                                link="/docs/games/splatoon-2">
                            </GameCard>

                            <GameCard title="Splatoon 3"
                                text="Nintendo Switch"
                                image="splatoon-3.jpg"
                                link="/docs/games/splatoon-3">
                            </GameCard>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

function GameCard(props) {
    return (
        <div className="game-card-body ripple">
            <Link to={useBaseUrl(props.link)}>
                <img src={require('@site/static/img/games/' + props.image).default} />
                <div className="game-card-segment">
                    <div className="title">{props.title}</div>
                    <div className="text">Platform: {props.text}</div>
                </div>
            </Link>
        </div>
    );
}
  
export default Games;