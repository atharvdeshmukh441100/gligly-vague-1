import React from 'react';
import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../common/SectionHeader';
import AppCard from '../common/AppCard';
import { App } from '../../types/app';

interface FeaturedAppsProps {
  apps: App[];
}

const FeaturedApps: React.FC<FeaturedAppsProps> = ({ apps }) => {
  return (
    <section className="py-12">
      <div className="container-custom">
        <SectionHeader 
          title="Featured AI Apps" 
          description="Discover the most innovative AI applications"
          action={
            <Link to="/apps" className="btn-ghost gap-1 group">
              <span>View all apps</span>
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          }
        />
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {apps.map((app) => (
            <div key={app.id} className="fade-in" style={{ animationDelay: `${parseInt(app.id) * 0.1}s` }}>
              <AppCard app={app} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;