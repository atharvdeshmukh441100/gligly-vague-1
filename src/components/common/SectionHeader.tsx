import React from 'react';

interface SectionHeaderProps {
  title: string;
  description?: string;
  action?: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description, action }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6">
      <div className="mb-4 sm:mb-0">
        <h2 className="text-2xl font-semibold tracking-tight">{title}</h2>
        {description && <p className="text-gray-600 mt-1">{description}</p>}
      </div>
      {action && <div className="flex justify-end">{action}</div>}
    </div>
  );
};

export default SectionHeader;