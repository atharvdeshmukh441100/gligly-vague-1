import React from 'react';
import { Content } from '../../types/content';

interface ContentCardProps {
  content: Content;
  variant?: 'default' | 'horizontal';
}

const ContentCard: React.FC<ContentCardProps> = ({ content, variant = 'default' }) => {
  if (variant === 'horizontal') {
    return (
      <div className="card group flex flex-col sm:flex-row overflow-hidden">
        {content.imageUrl && (
          <div className="sm:w-1/3 aspect-video sm:aspect-auto overflow-hidden">
            <img 
              src={content.imageUrl} 
              alt={content.title} 
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
        <div className="flex-1 p-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800">
              {content.contentType}
            </span>
            <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800">
              {content.category}
            </span>
          </div>
          <h3 className="font-semibold text-lg mb-2">{content.title}</h3>
          <p className="text-gray-600 text-sm mb-4">{content.excerpt}</p>
          <div className="flex items-center justify-between mt-auto">
            <div className="flex items-center gap-2">
              {content.author.avatarUrl && (
                <img 
                  src={content.author.avatarUrl} 
                  alt={content.author.name} 
                  className="h-8 w-8 rounded-full object-cover"
                />
              )}
              <div>
                <p className="text-sm font-medium">{content.author.name}</p>
                <p className="text-xs text-gray-500">
                  {new Date(content.date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </p>
              </div>
            </div>
            <a 
              href={content.url} 
              className="btn-ghost px-2 py-1 text-sm"
            >
              Read more →
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card group h-full flex flex-col overflow-hidden">
      {content.imageUrl && (
        <div className="aspect-video w-full overflow-hidden">
          <img 
            src={content.imageUrl} 
            alt={content.title} 
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-col flex-grow p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-indigo-100 text-indigo-800">
            {content.contentType}
          </span>
          <span className="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium bg-gray-100 text-gray-800">
            {content.category}
          </span>
        </div>
        <h3 className="font-semibold text-lg mb-2">{content.title}</h3>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{content.excerpt}</p>
        <div className="flex items-center justify-between mt-auto">
          <div className="flex items-center gap-2">
            {content.author.avatarUrl && (
              <img 
                src={content.author.avatarUrl} 
                alt={content.author.name} 
                className="h-8 w-8 rounded-full object-cover"
              />
            )}
            <div>
              <p className="text-sm font-medium">{content.author.name}</p>
              <p className="text-xs text-gray-500">
                {new Date(content.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          <a 
            href={content.url} 
            className="btn-ghost px-2 py-1 text-sm"
          >
            Read more →
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentCard;