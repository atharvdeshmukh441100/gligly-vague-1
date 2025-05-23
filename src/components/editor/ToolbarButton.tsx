import React from 'react';

interface ToolbarButtonProps {
  icon: React.ReactNode;
  onClick: () => void;
  tooltip: string;
  disabled?: boolean;
}

const ToolbarButton: React.FC<ToolbarButtonProps> = ({ icon, onClick, tooltip, disabled = false }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      title={tooltip}
      className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {icon}
    </button>
  );
};

export default ToolbarButton;
