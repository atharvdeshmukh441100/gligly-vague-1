export interface Content {
  id: string;
  title: string;
  excerpt: string;
  imageUrl?: string;
  category: ContentCategory;
  contentType: ContentType;
  author: {
    name: string;
    avatarUrl?: string;
  };
  date: string;
  url: string;
  tags: string[];
}

export type ContentCategory = 'Coding' | 'Creative' | 'Learning' | 'General';
export type ContentType = 'Article' | 'Tutorial' | 'Tip' | 'Blog' | 'Use Case';