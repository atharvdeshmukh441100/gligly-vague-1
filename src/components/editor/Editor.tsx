import React, { useState, useEffect, useCallback } from 'react';
import Header from './Header';
import Toolbar from './Toolbar';
import Preview from './Preview';
import { parseFrontmatter, stringifyFrontmatter } from '../../utils/frontmatterParser'; // Path to be checked
import { EDITOR_DEFAULT_FRONTMATTER, EDITOR_DEFAULT_CONTENT } from '../../utils/constants'; // Path to be checked

const Editor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('');
  const [frontmatter, setFrontmatter] = useState<object>(EDITOR_DEFAULT_FRONTMATTER);
  const [body, setBody] = useState<string>(EDITOR_DEFAULT_CONTENT);
  const [isDirty, setIsDirty] = useState<boolean>(false);

  useEffect(() => {
    const savedRawContent = localStorage.getItem('markdownContent');
    if (savedRawContent) {
      const { fm, content } = parseFrontmatter(savedRawContent);
      setFrontmatter(fm || EDITOR_DEFAULT_FRONTMATTER);
      setBody(content);
      setMarkdown(savedRawContent); 
    } else {
      const initialRawContent = stringifyFrontmatter(EDITOR_DEFAULT_FRONTMATTER, EDITOR_DEFAULT_CONTENT);
      setMarkdown(initialRawContent);
    }
  }, []);

  const handleMarkdownChange = useCallback((newRawMarkdown: string) => {
    setMarkdown(newRawMarkdown);
    const { fm, content } = parseFrontmatter(newRawMarkdown);
    setFrontmatter(fm || {}); 
    setBody(content);
    setIsDirty(true);
  }, []);

  const handleSave = useCallback(() => {
    const rawContent = stringifyFrontmatter(frontmatter, body);
    setMarkdown(rawContent); 
    localStorage.setItem('markdownContent', rawContent);
    setIsDirty(false);
    console.log('Content saved to localStorage');
  }, [frontmatter, body]);

  useEffect(() => {
    if (isDirty) {
      const timer = setTimeout(() => {
        handleSave();
      }, 3000); 
      return () => clearTimeout(timer);
    }
  }, [markdown, isDirty, handleSave]); 

  return (
    <div className="flex flex-col h-screen">
      <Header onSave={handleSave} isDirty={isDirty} />
      <Toolbar onApplyFormat={() => { /* Implement formatting actions */ }} />
      <div className="flex flex-1 overflow-hidden">
        <textarea
          value={markdown}
          onChange={(e) => handleMarkdownChange(e.target.value)}
          className="flex-1 p-4 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none resize-none h-full"
          placeholder="Start typing your Markdown here..."
        />
        <Preview frontmatter={frontmatter} body={body} />
      </div>
    </div>
  );
};

export default Editor;
