import { App, AppCategory } from '../types/app';
import { Content, ContentCategory, ContentType } from '../types/content';

// AI Apps Mock Data
export const apps: App[] = [
  {
    id: '1',
    name: 'CodeWhisperer',
    description: 'AI-powered coding assistant that helps developers write better code faster',
    imageUrl: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Coding', 'Productivity'],
    url: '#',
    pricing: 'Freemium',
    featured: true,
    tags: ['coding', 'development', 'programming'],
    rating: 4.8
  },
  {
    id: '2',
    name: 'CreativeCanvas',
    description: 'Generate stunning artwork and illustrations with AI-powered image generation',
    imageUrl: 'https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Creative'],
    url: '#',
    pricing: 'Free Trial',
    featured: true,
    tags: ['art', 'illustration', 'design'],
    rating: 4.6
  },
  {
    id: '3',
    name: 'LearningLens',
    description: 'Personalized learning platform that adapts to your learning style',
    imageUrl: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Learning'],
    url: '#',
    pricing: 'Paid',
    featured: true,
    tags: ['education', 'learning', 'personalized'],
    rating: 4.7
  },
  {
    id: '4',
    name: 'WordSage',
    description: 'AI writing assistant that helps you write better content faster',
    imageUrl: 'https://images.pexels.com/photos/3059748/pexels-photo-3059748.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Writing', 'Productivity'],
    url: '#',
    pricing: 'Freemium',
    tags: ['writing', 'content', 'productivity'],
    rating: 4.5
  },
  {
    id: '5',
    name: 'DataMind',
    description: 'AI-powered data analysis tool that helps you make sense of your data',
    imageUrl: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Productivity', 'General'],
    url: '#',
    pricing: 'Paid',
    tags: ['data', 'analysis', 'insights'],
    rating: 4.4
  },
  {
    id: '6',
    name: 'CodeBuddy',
    description: 'Your AI pair programming companion for faster debugging and coding',
    imageUrl: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Coding'],
    url: '#',
    pricing: 'Free',
    tags: ['coding', 'debugging', 'programming'],
    rating: 4.3
  },
  {
    id: '7',
    name: 'DesignDreamer',
    description: 'Generate UI/UX designs with AI-powered suggestions and templates',
    imageUrl: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Creative'],
    url: '#',
    pricing: 'Freemium',
    tags: ['design', 'ui', 'ux'],
    rating: 4.2
  },
  {
    id: '8',
    name: 'StudyBuddy',
    description: 'AI-powered tutor that helps you master any subject',
    imageUrl: 'https://images.pexels.com/photos/5926389/pexels-photo-5926389.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: ['Learning'],
    url: '#',
    pricing: 'Free Trial',
    tags: ['education', 'tutoring', 'learning'],
    rating: 4.6
  }
];

// Filter apps by category
export const getAppsByCategory = (category: AppCategory): App[] => {
  return apps.filter(app => app.category.includes(category));
};

export const getFeaturedApps = (): App[] => {
  return apps.filter(app => app.featured);
};

// Content Mock Data
export const content: Content[] = [
  {
    id: '1',
    title: 'Getting Started with AI-Assisted Coding',
    excerpt: 'Learn how to leverage AI tools to boost your coding productivity and write better code.',
    imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Coding',
    contentType: 'Tutorial',
    author: {
      name: 'Alex Johnson',
      avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-04-02',
    url: '#',
    tags: ['coding', 'AI', 'productivity']
  },
  {
    id: '2',
    title: 'Mastering AI Art Generation: Tips and Techniques',
    excerpt: 'Discover how to create stunning artwork using AI tools with these expert tips.',
    imageUrl: 'https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Creative',
    contentType: 'Article',
    author: {
      name: 'Sophia Chen',
      avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-04-01',
    url: '#',
    tags: ['art', 'creativity', 'AI']
  },
  {
    id: '3',
    title: 'How AI is Transforming Education',
    excerpt: 'Explore how artificial intelligence is changing the way we learn and teach.',
    imageUrl: 'https://images.pexels.com/photos/256395/pexels-photo-256395.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Learning',
    contentType: 'Blog',
    author: {
      name: 'Michael Rivera',
      avatarUrl: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-03-30',
    url: '#',
    tags: ['education', 'learning', 'technology']
  },
  {
    id: '4',
    title: 'Optimizing Your Coding Prompts for Better Results',
    excerpt: 'Learn how to craft effective prompts for AI coding assistants.',
    imageUrl: 'https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Coding',
    contentType: 'Tip',
    author: {
      name: 'David Kim',
      avatarUrl: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-03-28',
    url: '#',
    tags: ['prompts', 'coding', 'optimization']
  },
  {
    id: '5',
    title: 'Creating Stunning UI Designs with AI Tools',
    excerpt: 'Discover how to leverage AI design tools to create beautiful user interfaces.',
    imageUrl: 'https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Creative',
    contentType: 'Tutorial',
    author: {
      name: 'Emily Wong',
      avatarUrl: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-03-26',
    url: '#',
    tags: ['design', 'UI', 'tools']
  },
  {
    id: '6',
    title: 'Effective Strategies for Language Learning with AI',
    excerpt: 'Learn how AI can help you master new languages faster and more effectively.',
    imageUrl: 'https://images.pexels.com/photos/267669/pexels-photo-267669.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'Learning',
    contentType: 'Article',
    author: {
      name: 'Carlos Mendoza',
      avatarUrl: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    date: '2025-03-24',
    url: '#',
    tags: ['language', 'learning', 'strategies']
  }
];

// Filter content by category
export const getContentByCategory = (category: ContentCategory): Content[] => {
  return content.filter(item => item.category === category);
};

// Get latest content across all categories
export const getLatestContent = (): Content[] => {
  return [...content].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};