import React, { useState, useMemo } from 'react';
import SectionHeader from '../components/common/SectionHeader';
import SearchFilter from '../components/common/SearchFilter';
import AppCard from '../components/common/AppCard';
import { apps } from '../data/mockData';
import { AppCategory } from '../types/app';

const AppsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<AppCategory | null>(null);

  const categories: AppCategory[] = ['Coding', 'Creative', 'Learning', 'Productivity', 'Writing', 'General'];

  const filteredApps = useMemo(() => {
    return apps.filter(app => {
      const matchesSearch = !searchQuery || 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
        app.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = !selectedCategory || app.category.includes(selectedCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="py-12">
      <div className="container-custom">
        <SectionHeader 
          title="AI Apps Directory" 
          description="Discover the most innovative AI applications across different categories"
        />

        <div className="mb-8">
          <SearchFilter 
            onSearch={setSearchQuery}
            placeholder="Search for apps by name, description, or tags..."
            categories={categories}
            onCategoryFilter={(category) => setSelectedCategory(category as AppCategory | null)}
          />
        </div>

        {filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredApps.map((app) => (
              <div key={app.id} className="fade-in">
                <AppCard app={app} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-lg font-medium text-gray-900 mb-2">No apps found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AppsPage;