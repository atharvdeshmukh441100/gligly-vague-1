import React, { useState } from 'react';

interface SearchFilterProps {
  onSearch: (query: string) => void;
  placeholder?: string;
  categories?: string[];
  onCategoryFilter?: (category: string | null) => void;
}

const SearchFilter: React.FC<SearchFilterProps> = ({ 
  onSearch, 
  placeholder = "Search...", 
  categories = [],
  onCategoryFilter
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    onSearch(query);
  };

  const handleCategoryClick = (category: string | null) => {
    setSelectedCategory(category);
    if (onCategoryFilter) {
      onCategoryFilter(category);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        <input
          type="search"
          className="block w-full p-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-indigo-500 focus:border-indigo-500"
          placeholder={placeholder}
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {categories.length > 0 && onCategoryFilter && (
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryClick(null)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              selectedCategory === null
                ? 'bg-indigo-500 text-white'
                : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-3 py-1 text-sm rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-500 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchFilter;