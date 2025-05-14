// Type definitions for the recipe-sharing platform

export interface User {
  id: string;
  name: string;
  username: string;
  avatarUrl: string;
  bio?: string;
  followersCount: number;
  followingCount: number;
  recipesCount: number;
}

export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Recipe {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  author: User;
  createdAt: string;
  cookingTime: number; // in minutes
  calories: number;
  likesCount: number;
  commentsCount: number;
  ingredients: string[];
  instructions: string[];
  difficulty: Difficulty;
  category: string;
  isTrending?: boolean;
  isFeatured?: boolean;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likesCount: number;
}