import { type Recipe } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Clock, Heart, MessageCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { Link } from 'react-router-dom';

interface FeaturedRecipeProps {
  recipe: Recipe;
}

export function FeaturedRecipe({ recipe }: FeaturedRecipeProps) {
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
      <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 relative">
            <img 
              src={recipe.imageUrl} 
              alt={recipe.title} 
              className="w-full h-full object-cover aspect-video md:aspect-auto transition-transform duration-500 hover:scale-105"
            />
            {recipe.isTrending && (
              <Badge className="absolute top-3 left-0 rounded-r-full px-3 py-1 bg-primary text-primary-foreground">
                Trending
              </Badge>
            )}
          </div>
          <CardContent className="w-full md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <Badge 
                variant="outline" 
                className={cn("text-xs font-medium p-1 px-2.5 rounded-full", getDifficultyColor(recipe.difficulty))}
              >
                {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
              </Badge>
              <h3 className="font-semibold text-xl mt-3 mb-2">{recipe.title}</h3>
              <p className="text-muted-foreground mb-4">{recipe.description}</p>
            </div>
            
            <div className="flex justify-between items-center mt-auto">
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={recipe.author.avatarUrl} alt={recipe.author.name} />
                  <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{recipe.author.name}</p>
                  <p className="text-xs text-muted-foreground">{recipe.cookingTime} min</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div 
                  className="flex items-center gap-1 cursor-pointer"
                  onClick={handleLike}
                >
                  <Heart size={18} className={isLiked ? "fill-primary text-primary" : ""} />
                  <span className="text-sm">{likesCount}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MessageCircle size={18} />
                  <span className="text-sm">{recipe.commentsCount}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}