export const EDITOR_DEFAULT_FRONTMATTER = {
  title: 'Untitled Post',
  description: '',
  tags: [],
  image_url: '', // Or a default placeholder image
  links: [],
};

export const EDITOR_DEFAULT_CONTENT = `
# Welcome to the Editor!

This is a basic Markdown document. You can use this editor to create and edit your content.

## Features

- Real-time Markdown preview
- Frontmatter editing (visible in preview)
- Syntax highlighting for code blocks
- Basic toolbar (functionality to be fully implemented)
- Dark/Light mode toggle
- Autosave to local storage

## Example Code Block

\`\`\`javascript
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}

greet('Developer');
\`\`\`

## Example List

- Item 1
- Item 2
  - Sub-item A
  - Sub-item B

Start typing to see your changes reflected in the preview pane.
`.trim(); // Using trim to remove leading/trailing newlines from the template string

// You can add other constants here as needed, for example:
// export const API_BASE_URL = '/api';
// export const DEBOUNCE_DELAY = 500;
