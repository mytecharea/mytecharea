export interface Blog {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  category: string;
  tags: string[];
  author: string;
  status: 'draft' | 'published';
  createdAt: string;
  updatedAt: string;
}