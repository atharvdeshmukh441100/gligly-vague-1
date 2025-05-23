import yaml from 'yaml'; // Using 'yaml' package

interface FrontmatterParseResult {
  fm: object | null;
  content: string;
}

// Regex to find frontmatter:
// --- (anything here) --- (the rest)
// It needs to be at the very start of the string.
// DOTALL (s) allows . to match newlines. MULTILINE (m) for ^ and $.
const frontmatterRegex = /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)$/s;


export function parseFrontmatter(rawContent: string): FrontmatterParseResult {
  const match = frontmatterRegex.exec(rawContent);

  if (match && match[1] && match[2] !== undefined) {
    try {
      const frontmatterString = match[1];
      const bodyContent = match[2].trimStart(); // Remove leading newlines/whitespace from body
      const parsedFm = yaml.parse(frontmatterString);
      return { fm: typeof parsedFm === 'object' && parsedFm !== null ? parsedFm : {}, content: bodyContent };
    } catch (e) {
      console.error("Error parsing YAML frontmatter:", e);
      // If parsing fails, return the whole thing as content, no frontmatter
      return { fm: null, content: rawContent.trimStart() };
    }
  }
  // No frontmatter found, or match was incomplete
  return { fm: null, content: rawContent.trimStart() };
}

export function stringifyFrontmatter(frontmatter: object, body: string): string {
  if (Object.keys(frontmatter).length === 0) {
    return body;
  }
  try {
    const fmString = yaml.stringify(frontmatter).trim(); // Trim to remove trailing newline if any
    return `---
${fmString}
---
${body}`;
  } catch (e) {
    console.error("Error stringifying YAML frontmatter:", e);
    return body; // Fallback to just body if stringification fails
  }
}
