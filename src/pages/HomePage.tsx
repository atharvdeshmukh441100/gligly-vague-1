import React from 'react';
import Hero from '../components/home/Hero';
import FeaturedApps from '../components/home/FeaturedApps';
import ExploreSection from '../components/home/ExploreSection';
import CTASection from '../components/home/CTASection';
import { getFeaturedApps } from '../data/mockData';
import { getLatestContent } from '../data/mockData';

const HomePage: React.FC = () => {
  const featuredApps = getFeaturedApps();
  const latestContent = getLatestContent();

  return (
    <div>
      <Hero />
      <FeaturedApps apps={featuredApps} />
      <ExploreSection content={latestContent} />
      <CTASection />
    </div>
  );
};

export default HomePage;