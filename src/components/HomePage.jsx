import React from 'react';
import FeaturedCollection from './FeaturedCollection/FeaturedCollection';
import Hero from './Hero/Hero';
import MainSection from './MainSection/MainSection';
import Layout from './Shared/Layout';
const HomePage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <MainSection />
        <FeaturedCollection />
      </Layout>
    </>
  );
};

export default HomePage;
