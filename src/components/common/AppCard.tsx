import React from 'react';
import { App } from '../../types/app';

interface AppCardProps {
  app: App;
}

const AppCard: React.FC<AppCardProps> = ({ app }) => {
  return (
    <div className="card group h-full flex flex-col overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <img 
          src={app.imageUrl} 
          alt={app.name} 
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-semibold text-lg">{app.name}</h3>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800">
            {app.pricing}
          </span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{app.description}</p>
        <div className="mt-auto">
          <div className="flex flex-wrap gap-1 mb-3">
            {app.category.map((cat, index) => (
              <span 
                key={index} 
                className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800"
              >
                {cat}
              </span>
            ))}
          </div>
          {app.rating && (
            <div className="flex items-center gap-1 mb-3">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(app.rating) ? 'fill-current' : 'stroke-current fill-none'}`} 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
                  </svg>
                ))}
              </div>
              <span className="text-xs text-gray-600">{app.rating.toFixed(1)}</span>
            </div>
          )}
          <a 
            href={app.url} 
            className="btn-primary px-4 py-2 w-full"
          >
            View App
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppCard;