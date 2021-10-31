import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Coming soon</>,
    imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: (
      <>
        Coming soon
      </>
    ),
  },
  {
    title: <>Coming soon</>,
    imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Coming soon
      </>
    ),
  },
  {
    title: <>Coming soon</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Coming soon
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section className={styles.featuresDark}>
          <div className="container">
            <h2>Hey, Pigster here.</h2>
            <div className="blockText">
              <p>Welcome! This website is where I log my recorded video game plays. <br/>
              I also post about game related stuff on my Tumblr once in a while.</p>
              <div className="updates">
                <Link
                  className={clsx(
                    'button button--outline button--primary',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/me')}>
                  About
                </Link>
                <Link
                  className={clsx(
                    'button button--outline button--primary',
                    styles.getStarted,
                  )}
                  to={useBaseUrl('docs/updates')}>
                  Updates
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
        <div className="container">
          <h2>Stuff in here</h2>
            <div className="cols">
              <div className="game-card-body ripple extra">
                <Link to={useBaseUrl('/rhythmgames')}>
                    <img src={require('@site/static/img/pdmm.png').default} />
                    <div className="game-card-segment">
                        <div className="title">Rhythm Games</div>
                        <div className="text">Collection of rhythm game plays.</div>
                    </div>
                </Link>
              </div>
              <div className="game-card-body ripple extra">
                <Link to={useBaseUrl('/games')}>
                    <img src={require('@site/static/img/games.png').default} />
                    <div className="game-card-segment">
                        <div className="title">Other Games</div>
                        <div className="text">Check out my other gameplays here.</div>
                    </div>
                </Link>
              </div>
              <div className="game-card-body ripple extra">
                <Link to={useBaseUrl('/blog')}>
                    <img src={require('@site/static/img/reviews2.png').default} />
                    <div className="game-card-segment">
                        <div className="title">Reviews</div>
                        <div className="text">Short reviews of the video games played.</div>
                    </div>
                </Link>
              </div>
              <div className="game-card-body ripple extra">
                <a href="https://pigsterchurn.tumblr.com/">
                    <img src={require('@site/static/img/tumblr.png').default} />
                    <div className="game-card-segment">
                        <div className="title">Tumblr</div>
                        <div className="text">I post random updates (mostly games related) on this microblog.</div>
                    </div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
