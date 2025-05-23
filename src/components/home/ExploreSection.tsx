import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import SectionHeader from '../common/SectionHeader';
import ContentCard from '../common/ContentCard';
import { Content } from '../../types/content';

interface ExploreSectionProps {
  content: Content[];
  category?: string;
}

const ExploreSection: React.FC<ExploreSectionProps> = ({ content, category }) => {
  const title = category ? `Explore ${category}` : 'Explore Content';
  const viewAllLink = category ? `/${category.toLowerCase()}` : '/';

  return (
    <section className="py-12 bg-gray-50">
      <div className="container-custom">
        <SectionHeader 
          title={title} 
          description="Discover tips, tricks, and best practices"
          action={
            <Link to={viewAllLink} className="btn-ghost gap-1 group">
              <span>View all</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {content.slice(0, 2).map((item) => (
            <div key={item.id} className="fade-in" style={{ animationDelay: `${parseInt(item.id) * 0.1}s` }}>
              <ContentCard content={item} variant="horizontal" />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.slice(2, 5).map((item) => (
            <div key={item.id} className="fade-in" style={{ animationDelay: `${parseInt(item.id) * 0.1 + 0.2}s` }}>
              <ContentCard content={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;