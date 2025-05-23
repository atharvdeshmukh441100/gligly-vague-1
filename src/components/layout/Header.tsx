import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className={`sticky top-0 z-50 w-full transition-all duration-200 ${
      isScrolled ? 'bg-white shadow-sm' : 'bg-transparent'
    }`}>
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 text-indigo-600 font-bold text-xl">
              <Sparkles size={24} />
              <span>GliGly</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            <nav className="flex items-center space-x-1">
              <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
              <Link to="/apps" className={`nav-link ${isActive('/apps') ? 'active' : ''}`}>Apps</Link>
              <Link to="/coding" className={`nav-link ${isActive('/coding') ? 'active' : ''}`}>Vibe Coding</Link>
              <Link to="/creatives" className={`nav-link ${isActive('/creatives') ? 'active' : ''}`}>Creatives</Link>
              <Link to="/learning" className={`nav-link ${isActive('/learning') ? 'active' : ''}`}>Learning</Link>
            </nav>
          </div>
          
          <div className="flex items-center gap-2">
            <button className="btn-ghost md:btn-secondary px-4 py-2">Sign In</button>
            <button className="btn-primary px-4 py-2 hidden md:inline-flex">Submit App</button>
          </div>
        </div>
        
        <div className="mt-2 md:hidden">
          <nav className="flex items-center justify-between overflow-x-auto hide-scrollbar">
            <Link to="/" className={`nav-link whitespace-nowrap ${isActive('/') ? 'active' : ''}`}>Home</Link>
            <Link to="/apps" className={`nav-link whitespace-nowrap ${isActive('/apps') ? 'active' : ''}`}>Apps</Link>
            <Link to="/coding" className={`nav-link whitespace-nowrap ${isActive('/coding') ? 'active' : ''}`}>Coding</Link>
            <Link to="/creatives" className={`nav-link whitespace-nowrap ${isActive('/creatives') ? 'active' : ''}`}>Creatives</Link>
            <Link to="/learning" className={`nav-link whitespace-nowrap ${isActive('/learning') ? 'active' : ''}`}>Learning</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;