export interface App {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: AppCategory[];
  url: string;
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Free Trial';
  featured?: boolean;
  tags: string[];
  rating?: number;
}

export type AppCategory = 'Coding' | 'Creative' | 'Learning' | 'Productivity' | 'Writing' | 'General';