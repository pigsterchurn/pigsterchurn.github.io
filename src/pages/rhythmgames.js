import React from 'react';
import styles from './styles.module.css';
import Layout from '@theme/Layout';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import clsx from 'clsx';

class RhythmGames extends React.Component {
    render() {
        return (
            <Layout className="docMainWrapper wrapper">
                <section className={styles.features}>
                    <div className="container">
                        <h1>Rhythm Games</h1>
                        <ul>
                            <li>Listed here are all the rhythm games that I have recorded.</li>
                            <li>Aside from Project Diva Mega Mix, the other games will just be a random incomplete compilation.</li>
                        </ul>

                        <br></br>
                        <div className="game-grid">
                            <GameCard title="Project Diva Mega Mix"
                                text="Nintendo Switch"
                                image="pdmm.png"
                                link="/docs/pdmm/pdmm-preface">
                            </GameCard>
                            <GameCard title="Beat Saber"
                                text="Oculus Quest 2"
                                image="beat-saber.jpg"
                                link="/docs/games/beat-saber">
                            </GameCard>
                            <GameCard title="Cytus II"
                                text="iOS"
                                image="cytus2.jpg"
                                link="/docs/games/cytus2">
                            </GameCard>
                            <GameCard title="Groove Coaster: Wai Wai Party"
                                text="Nintendo Switch"
                                image="groove-coaster.jpg"
                                link="/docs/games/groove-coaster">
                            </GameCard>
                            <GameCard title="Project Diva Future Tone"
                                text="Playstation 4"
                                image="project-diva-future-tone.jpg"
                                link="/docs/games/project-diva-future-tone">
                            </GameCard>
                            <GameCard title="Project Diva X"
                                text="Playstation 4"
                                image="project-diva-x.jpg"
                                link="/docs/games/project-diva-x">
                            </GameCard>
                            <GameCard title="Rhythm Doctor"
                                text="Steam"
                                image="rhythm-doctor.jpg"
                                link="/docs/games/rhythm-doctor">
                            </GameCard>
                            <GameCard title="Taiko no Tatsujin: Nintendo Switch Version"
                                text="Nintendo Switch"
                                image="taiko-switch.jpg"
                                link="/docs/games/taiko-switch">
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
  
export default RhythmGames;