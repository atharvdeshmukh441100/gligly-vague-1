import React from 'react';
import { Search } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white py-16 md:py-24">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Discover the Best AI Tools to Supercharge Your Workflow
          </h1>
          <p className="text-lg md:text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
            The ultimate platform to discover and share AI apps, tips, prompts, and use cases that will transform the way you work.
          </p>
          
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-4 py-3 bg-white text-gray-900 border border-transparent rounded-lg focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
              placeholder="Search for AI tools, prompts, use cases..."
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3">
              <button className="btn-primary px-4 py-2">
                Search
              </button>
            </div>
          </div>
          
          <div className="mt-8 text-sm text-indigo-200">
            <p>Popular: <a href="#" className="text-white underline">Coding assistants</a>, <a href="#" className="text-white underline">Image generation</a>, <a href="#" className="text-white underline">Writing tools</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;