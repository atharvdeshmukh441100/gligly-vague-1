import React from 'react';
import ToolbarButton from './ToolbarButton';
import { Bold, Italic, Strikethrough, Code, Link, List, Image, Quote, CheckSquare } from 'lucide-react'; 

interface ToolbarProps {
  onApplyFormat: (format: string) => void; 
}

const Toolbar: React.FC<ToolbarProps> = ({ onApplyFormat }) => {
  const handleFormatClick = (format: string) => {
    console.log(`Apply format: ${format}`);
    onApplyFormat(format);
  };

  return (
    <div className="flex items-center p-2 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 space-x-1">
      <ToolbarButton icon={<Bold size={18} />} onClick={() => handleFormatClick('bold')} tooltip="Bold" />
      <ToolbarButton icon={<Italic size={18} />} onClick={() => handleFormatClick('italic')} tooltip="Italic" />
      <ToolbarButton icon={<Strikethrough size={18} />} onClick={() => handleFormatClick('strikethrough')} tooltip="Strikethrough" />
      <ToolbarButton icon={<Code size={18} />} onClick={() => handleFormatClick('code')} tooltip="Code" />
      <ToolbarButton icon={<Link size={18} />} onClick={() => handleFormatClick('link')} tooltip="Link" />
      <ToolbarButton icon={<List size={18} />} onClick={() => handleFormatClick('ul')} tooltip="Unordered List" />
      <ToolbarButton icon={<Image size={18} />} onClick={() => handleFormatClick('image')} tooltip="Image" />
      <ToolbarButton icon={<Quote size={18} />} onClick={() => handleFormatClick('blockquote')} tooltip="Blockquote" />
      <ToolbarButton icon={<CheckSquare size={18} />} onClick={() => handleFormatClick('task')} tooltip="Task List" />
    </div>
  );
};

export default Toolbar;
