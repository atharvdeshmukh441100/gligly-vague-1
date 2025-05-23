import React from 'react';
import SectionHeader from '../components/common/SectionHeader';
import AppCard from '../components/common/AppCard';
import ContentCard from '../components/common/ContentCard';
import { getAppsByCategory, getContentByCategory } from '../data/mockData';

const VibeCodingPage: React.FC = () => {
  const codingApps = getAppsByCategory('Coding');
  const codingContent = getContentByCategory('Coding');

  return (
    <div>
      <div className="bg-indigo-600 text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Vibe Coding</h1>
            <p className="text-lg text-indigo-100">
              Discover AI tools, tips, and resources to enhance your coding experience 
              and boost your productivity as a developer.
            </p>
          </div>
        </div>
      </div>

      <div className="container-custom py-12">
        <section className="mb-12">
          <SectionHeader 
            title="Coding AI Tools" 
            description="AI-powered tools to boost your coding productivity and accuracy"
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingApps.map((app) => (
              <div key={app.id} className="fade-in">
                <AppCard app={app} />
              </div>
            ))}
          </div>
        </section>

        <section>
          <SectionHeader 
            title="Coding Tips & Guides" 
            description="Learn how to leverage AI for more effective coding"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {codingContent.slice(0, 2).map((content) => (
              <div key={content.id} className="fade-in">
                <ContentCard content={content} variant="horizontal" />
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {codingContent.slice(2).map((content) => (
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

export default VibeCodingPage;