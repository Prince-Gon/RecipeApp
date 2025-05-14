import { type Recipe } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Clock, Heart, MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
}

export function RecipeCard({ recipe }: RecipeCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(recipe.likesCount);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy':
        return 'bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400';
      case 'medium':
        return 'bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400';
      case 'hard':
        return 'bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400';
      default:
        return 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400';
    }
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsLiked(!isLiked);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
  };

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <Card className="overflow-hidden h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="aspect-video relative overflow-hidden">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
          {recipe.isTrending && (
            <Badge className="absolute top-3 left-0 rounded-r-full px-3 py-1 bg-primary text-primary-foreground">
              Trending
            </Badge>
          )}
        </div>
        <CardHeader className="p-4 pb-2">
          <Badge 
            variant="outline" 
            className={cn("text-xs font-medium p-1 px-2.5 rounded-full", getDifficultyColor(recipe.difficulty))}
          >
            {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
          </Badge>
          <h3 className="font-semibold text-lg mt-2 line-clamp-2">{recipe.title}</h3>
        </CardHeader>
        <CardContent className="p-4 pt-0">
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
            {recipe.description}
          </p>
        </CardContent>
        <CardFooter className="p-4 pt-0 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src={recipe.author.avatarUrl} alt={recipe.author.name} />
              <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-xs text-muted-foreground">{recipe.author.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock size={14} />
              <span>{recipe.cookingTime} min</span>
            </div>
            <div 
              className="flex items-center gap-1 text-xs text-muted-foreground cursor-pointer"
              onClick={handleLike}
            >
              <Heart size={14} className={isLiked ? "fill-primary text-primary" : ""} />
              <span>{likesCount}</span>
            </div>
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
              <MessageCircle size={14} />
              <span>{recipe.commentsCount}</span>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}