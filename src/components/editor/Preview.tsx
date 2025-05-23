import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'; 

interface PreviewProps {
  frontmatter: object;
  body: string;
}

const Preview: React.FC<PreviewProps> = ({ frontmatter, body }) => {
  return (
    <div className="flex-1 p-4 overflow-y-auto bg-white dark:bg-gray-900 prose dark:prose-invert lg:prose-xl max-w-none h-full">
      {Object.keys(frontmatter).length > 0 && (
        <div className="mb-8 p-4 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-800">
          <h2 className="text-xl font-semibold mb-2 text-gray-700 dark:text-gray-300">Frontmatter:</h2>
          <pre className="text-sm bg-gray-100 dark:bg-gray-700 p-2 rounded overflow-x-auto">
            <code>{JSON.stringify(frontmatter, null, 2)}</code>
          </pre>
        </div>
      )}
      <ReactMarkdown
        children={body}
        remarkPlugins={[remarkGfm]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                style={oneDark} 
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            );
          }
        }}
      />
    </div>
  );
};

export default Preview;
