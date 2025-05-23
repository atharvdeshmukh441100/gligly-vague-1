import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface CategoryTabsProps {
  categories: Array<{
    name: string;
    path: string;
  }>;
}

const CategoryTabs: React.FC<CategoryTabsProps> = ({ categories }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="bg-gray-100 p-1 rounded-lg mb-8">
      <nav className="flex space-x-1">
        {categories.map((category) => {
          const isActive = currentPath === category.path;
          return (
            <Link
              key={category.path}
              to={category.path}
              className={`nav-link px-4 py-2 flex-1 text-center ${isActive ? 'active' : ''}`}
            >
              {category.name}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default CategoryTabs;