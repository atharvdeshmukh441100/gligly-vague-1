import React from 'react';
import { Save, Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme'; // Path to be checked

interface HeaderProps {
  onSave: () => void;
  isDirty: boolean;
}

const Header: React.FC<HeaderProps> = ({ onSave, isDirty }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <h1 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Markdown Editor</h1>
      <div className="flex items-center space-x-2">
        <button
          onClick={onSave}
          className={`p-2 rounded-md ${
            isDirty 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-gray-300 dark:bg-gray-600 text-gray-500 dark:text-gray-400 cursor-not-allowed'
          }`}
          title={isDirty ? "Save changes" : "No changes to save"}
          disabled={!isDirty}
        >
          <Save size={20} />
        </button>
        <button
          onClick={toggleTheme}
          className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
          title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
