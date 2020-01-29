import React from 'react';
import Layout from 'layout';
import Container from 'components/Container';
import Hero from 'components/Hero';
import BlogFeature from 'components/BlogFeature';
import styles from './Home.module.scss';

const Home = () => (
  <Layout styleModifiers={['hasColoredFinalSection']}>
    <Container>
      <Hero />
    </Container>
    <section className={styles.Home_blogFeatureSection}>
      <Container>
        <BlogFeature />
      </Container>
    </section>
  </Layout>
);

export default Home;
