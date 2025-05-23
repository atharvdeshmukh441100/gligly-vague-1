import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import AppCard from '../components/common/AppCard';
import ContentCard from '../components/common/ContentCard';
import { getAppsByCategory, getContentByCategory } from '../data/mockData';

const CreativesPage: React.FC = () => {
  const creativeApps = getAppsByCategory('Creative');
  const creativeContent = getContentByCategory('Creative');

  return (
    <div>
      <div className="bg-gradient-to-r from-pink-500 to-orange-500 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Creatives Hub</h1>
            <p className="text-lg text-pink-100">
              Unlock your creative potential with AI tools for art, design, 
              music, and more. Discover tips and techniques from top creators.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <section className="mb-12">
          <SectionHeader 
            title="Creative AI Tools" 
            description="AI-powered tools to boost your creative projects"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeApps.map((app) => (
              <div key={app.id} className="fade-in">
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader 
            title="Creative Tips & Techniques" 
            description="Learn how to leverage AI for more creative output"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {creativeContent.slice(0, 2).map((content) => (
              <div key={content.id} className="fade-in">
                <ContentCard content={content} variant="horizontal" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {creativeContent.slice(2).map((content) => (
              <div key={content.id} className="fade-in">
                <ContentCard content={content} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CreativesPage;