import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import AppCard from '../components/common/AppCard';
import ContentCard from '../components/common/ContentCard';
import { getAppsByCategory, getContentByCategory } from '../data/mockData';

const LearningPage: React.FC = () => {
  const learningApps = getAppsByCategory('Learning');
  const learningContent = getContentByCategory('Learning');

  return (
    <div>
      <div className="bg-gradient-to-r from-sky-500 to-emerald-500 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Learning Resources</h1>
            <p className="text-lg text-sky-100">
              Discover AI-powered learning tools and resources to accelerate your 
              education and mastery of any subject.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <section className="mb-12">
          <SectionHeader 
            title="Learning AI Tools" 
            description="AI-powered tools to enhance your learning experience"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningApps.map((app) => (
              <div key={app.id} className="fade-in">
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader 
            title="Learning Tips & Guides" 
            description="Learn how to leverage AI for more effective learning"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {learningContent.slice(0, 2).map((content) => (
              <div key={content.id} className="fade-in">
                <ContentCard content={content} variant="horizontal" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningContent.slice(2).map((content) => (
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

export default LearningPage;