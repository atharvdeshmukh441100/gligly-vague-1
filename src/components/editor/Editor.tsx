import React, { useState, useEffect, useCallback, useRef } from 'react';
import Header from './Header';
import Toolbar from './Toolbar';
import Preview from './Preview';
import { parseFrontmatter, stringifyFrontmatter } from '../../utils/frontmatterParser';
import { EDITOR_DEFAULT_FRONTMATTER, EDITOR_DEFAULT_CONTENT } from '../../utils/constants';
import { savePost, getPost, updatePost, PostResponse } from '../../services/api';

// Helper to safely get string values from frontmatter
const getFmString = (fm: any, key: string, defaultValue = ''): string => (typeof fm?.[key] === 'string' ? fm[key] : defaultValue);
const getFmArrayAsString = (fm: any, key: string, defaultValue = ''): string => (Array.isArray(fm?.[key]) ? fm[key].join(', ') : defaultValue);


const Editor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>(() => stringifyFrontmatter(EDITOR_DEFAULT_FRONTMATTER, EDITOR_DEFAULT_CONTENT));
  const [frontmatter, setFrontmatter] = useState<object>(EDITOR_DEFAULT_FRONTMATTER);
  const [body, setBody] = useState<string>(EDITOR_DEFAULT_CONTENT);
  
  // State for individual frontmatter input fields
  const [titleInput, setTitleInput] = useState<string>(getFmString(EDITOR_DEFAULT_FRONTMATTER, 'title'));
  const [descriptionInput, setDescriptionInput] = useState<string>(getFmString(EDITOR_DEFAULT_FRONTMATTER, 'description'));
  const [imageUrlInput, setImageUrlInput] = useState<string>(getFmString(EDITOR_DEFAULT_FRONTMATTER, 'image_url'));
  const [tagsInput, setTagsInput] = useState<string>(getFmArrayAsString(EDITOR_DEFAULT_FRONTMATTER, 'tags'));
  const [linksInput, setLinksInput] = useState<string>(getFmArrayAsString(EDITOR_DEFAULT_FRONTMATTER, 'links'));

  const [isDirty, setIsDirty] = useState<boolean>(false);
  const [currentPostId, setCurrentPostId] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isApplyingProgrammaticChange, setIsApplyingProgrammaticChange] = useState<boolean>(false);

  // Ref to track if it's the initial mount or first data load
  const isInitialLoadDone = useRef(false);

  // 1. Effect to parse markdown whenever it changes (e.g., from textarea, load, or FM input sync)
  // This updates `frontmatter`, `body`, AND the individual input fields
  useEffect(() => {
    if (isApplyingProgrammaticChange) return; // Avoid re-parsing if change came from FM inputs updating markdown

    const { fm, content: newBody } = parseFrontmatter(markdown);
    const newFm = fm || EDITOR_DEFAULT_FRONTMATTER;
    
    setFrontmatter(newFm);
    setBody(newBody);

    // Update individual input fields from parsed frontmatter
    // This ensures textarea changes reflect in the input fields
    setIsApplyingProgrammaticChange(true); // Mark that next state updates are programmatic
    setTitleInput(getFmString(newFm, 'title'));
    setDescriptionInput(getFmString(newFm, 'description'));
    setImageUrlInput(getFmString(newFm, 'image_url', getFmString(newFm, 'image'))); // Handle 'image' as fallback
    setTagsInput(getFmArrayAsString(newFm, 'tags'));
    setLinksInput(getFmArrayAsString(newFm, 'links'));
    // eslint-disable-next-line no-prototype-builtins
    if (newFm.hasOwnProperty('title') || Object.keys(newFm).length > Object.keys(EDITOR_DEFAULT_FRONTMATTER).length) {
         // Only mark dirty if significant FM change, not just default object assignment
    }
    requestAnimationFrame(() => setIsApplyingProgrammaticChange(false)); // Reset flag after updates

  }, [markdown]);


  // 2. Effect to update markdown when individual frontmatter input fields change
  useEffect(() => {
    if (isLoading || isApplyingProgrammaticChange || !isInitialLoadDone.current) return; // Don't run if loading, if markdown change is being processed, or on initial mount

    const newFrontmatterData: any = {
      title: titleInput,
      description: descriptionInput,
      image_url: imageUrlInput,
      tags: tagsInput.split(',').map(tag => tag.trim()).filter(tag => tag),
      links: linksInput.split(',').map(link => link.trim()).filter(link => link),
    };
    
    // Clean up empty optional fields to avoid empty keys in YAML
    if (!newFrontmatterData.description) delete newFrontmatterData.description;
    if (!newFrontmatterData.image_url) delete newFrontmatterData.image_url;
    if (newFrontmatterData.tags.length === 0) delete newFrontmatterData.tags;
    if (newFrontmatterData.links.length === 0) delete newFrontmatterData.links;


    setIsApplyingProgrammaticChange(true); // Mark that next markdown update is programmatic
    setMarkdown(stringifyFrontmatter(newFrontmatterData, body));
    setIsDirty(true);
    requestAnimationFrame(() => setIsApplyingProgrammaticChange(false)); // Reset flag

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleInput, descriptionInput, imageUrlInput, tagsInput, linksInput, body]); // body is needed to reconstruct markdown


  // Effect to load post ID 1 on component mount
  useEffect(() => {
    const loadInitialPost = async () => {
      setIsLoading(true);
      try {
        const fetchedPost = await getPost(1);
        if (fetchedPost && fetchedPost.content) {
          // This will trigger the first useEffect (markdown parser) which updates FM inputs
          setMarkdown(fetchedPost.content); 
          setCurrentPostId(fetchedPost.id);
          setIsDirty(false);
        }
      } catch (error) {
        console.error('Failed to load post ID 1:', error);
        // If load fails, editor starts with default content, which is already set
        // The first useEffect (markdown parser) will ensure FM inputs are set from default markdown
        setMarkdown(stringifyFrontmatter(EDITOR_DEFAULT_FRONTMATTER, EDITOR_DEFAULT_CONTENT));
      } finally {
        setIsLoading(false);
        isInitialLoadDone.current = true; // Mark initial load as done
      }
    };
    loadInitialPost();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); 

  const handleMarkdownChange = useCallback((newRawMarkdown: string) => {
    if (isApplyingProgrammaticChange) return; // Prevent feedback loop if change is from FM inputs
    setMarkdown(newRawMarkdown);
    if (!isLoading) setIsDirty(true);
  }, [isLoading, isApplyingProgrammaticChange]);

  const handleSave = useCallback(async () => {
    // Markdown state is the single source of truth for content being saved
    const rawContentToSave = markdown; 
    try {
      let savedPost: PostResponse;
      if (currentPostId !== null) {
        savedPost = await updatePost(currentPostId, { content: rawContentToSave });
      } else {
        savedPost = await savePost({ content: rawContentToSave });
        setCurrentPostId(savedPost.id);
      }
      setIsDirty(false);
      // If backend modifies content (e.g. sanitizes, adds updated_at to FM), update local markdown
      // This will re-trigger parsing and update all derived states.
      if (savedPost.content !== markdown) {
        setIsApplyingProgrammaticChange(true);
        setMarkdown(savedPost.content);
        requestAnimationFrame(() => setIsApplyingProgrammaticChange(false));
      }
      console.log('Post saved:', savedPost);
    } catch (error) {
      console.error('Failed to save content:', error);
    }
  }, [markdown, currentPostId]);

  useEffect(() => {
    if (isDirty && !isLoading && isInitialLoadDone.current) {
      const timer = setTimeout(() => handleSave(), 3000);
      return () => clearTimeout(timer);
    }
  }, [isDirty, isLoading, handleSave]);

  if (isLoading && !isInitialLoadDone.current) { // Show loading only on very first load
    return <div className="flex justify-center items-center min-h-screen">Loading editor...</div>;
  }

  const commonInputClass = "w-full p-2 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="flex flex-col h-screen">
      <Header onSave={handleSave} isDirty={isDirty} />
      
      {/* Frontmatter Input Fields Section */}
      <div className="p-4 space-y-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div>
          <label htmlFor="fm-title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Title</label>
          <input type="text" id="fm-title" value={titleInput} onChange={(e) => {setTitleInput(e.target.value); if (!isLoading) setIsDirty(true);}} className={commonInputClass} />
        </div>
        <div>
          <label htmlFor="fm-description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description</label>
          <textarea id="fm-description" value={descriptionInput} onChange={(e) => {setDescriptionInput(e.target.value); if (!isLoading) setIsDirty(true);}} rows={2} className={commonInputClass}></textarea>
        </div>
        <div>
          <label htmlFor="fm-imageurl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Image URL</label>
          <input type="text" id="fm-imageurl" value={imageUrlInput} onChange={(e) => {setImageUrlInput(e.target.value); if (!isLoading) setIsDirty(true);}} className={commonInputClass} />
        </div>
        <div>
          <label htmlFor="fm-tags" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Tags (comma-separated)</label>
          <input type="text" id="fm-tags" value={tagsInput} onChange={(e) => {setTagsInput(e.target.value); if (!isLoading) setIsDirty(true);}} className={commonInputClass} />
        </div>
        <div>
          <label htmlFor="fm-links" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Links (comma-separated)</label>
          <input type="text" id="fm-links" value={linksInput} onChange={(e) => {setLinksInput(e.target.value); if (!isLoading) setIsDirty(true);}} className={commonInputClass} />
        </div>
      </div>

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
