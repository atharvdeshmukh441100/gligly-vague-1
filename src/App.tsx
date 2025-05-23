import React from 'react';
import Editor from './components/editor/Editor'; // Path will be checked/adjusted later
import { ThemeProvider } from './hooks/useTheme'; // Path will be checked/adjusted later

function EditorApp() { // Renamed function to EditorApp
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <Editor />
      </div>
    </ThemeProvider>
  );
}

export default EditorApp;
