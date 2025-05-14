import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { recipes } from '@/lib/mock-data';
import { type Recipe } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heart, Clock, Bookmark, Share, Users, ChefHat, Flame } from 'lucide-react';
import { cn } from '@/lib/utils';

export function RecipeDetail() {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('ingredients');
  const [servings, setServings] = useState(4);

  useEffect(() => {
    const foundRecipe = recipes.find(r => r.id === id);
    if (foundRecipe) {
      setRecipe(foundRecipe);
      // Scroll to top when recipe changes
      window.scrollTo(0, 0);
    }
    // Reset states
    setIsLiked(false);
    setIsSaved(false);
  }, [id]);

  if (!recipe) {
    return (
      <div className="container px-4 py-8 max-w-4xl mx-auto">
        <p>Recipe not found</p>
      </div>
    );
  }

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

  return (
    <div className="container px-4 py-8 max-w-4xl mx-auto">
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">{recipe.title}</h1>
          <div className="flex flex-wrap gap-3 mt-4">
            <Badge 
              variant="outline" 
              className={cn("text-xs font-medium p-1 px-2.5 rounded-full", getDifficultyColor(recipe.difficulty))}
            >
              {recipe.difficulty.charAt(0).toUpperCase() + recipe.difficulty.slice(1)}
            </Badge>
            <Badge variant="outline" className="rounded-full">
              {recipe.category}
            </Badge>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Clock size={16} />
              <span>{recipe.cookingTime} min</span>
            </div>
            <div className="flex items-center gap-1 text-muted-foreground text-sm">
              <Flame size={16} />
              <span>{recipe.calories} kcal</span>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src={recipe.author.avatarUrl} alt={recipe.author.name} />
              <AvatarFallback>{recipe.author.name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">{recipe.author.name}</p>
              <p className="text-xs text-muted-foreground">
                {new Date(recipe.createdAt).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'short', 
                  day: 'numeric' 
                })}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="icon"
              className={isLiked ? "text-primary border-primary" : ""}
              onClick={() => setIsLiked(!isLiked)}
            >
              <Heart size={20} className={isLiked ? "fill-primary" : ""} />
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className={isSaved ? "text-primary border-primary" : ""}
              onClick={() => setIsSaved(!isSaved)}
            >
              <Bookmark size={20} className={isSaved ? "fill-primary" : ""} />
            </Button>
            <Button variant="outline" size="icon">
              <Share size={20} />
            </Button>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden">
          <img 
            src={recipe.imageUrl} 
            alt={recipe.title} 
            className="w-full h-auto object-cover aspect-video"
          />
        </div>

        <p className="text-lg">{recipe.description}</p>

        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4">
          <div className="flex items-center gap-3 p-4 rounded-lg border">
            <Clock size={24} className="text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Cooking Time</p>
              <p className="text-lg font-medium">{recipe.cookingTime} min</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border">
            <ChefHat size={24} className="text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Difficulty</p>
              <p className="text-lg font-medium capitalize">{recipe.difficulty}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-lg border">
            <Users size={24} className="text-primary" />
            <div>
              <p className="text-sm text-muted-foreground">Servings</p>
              <div className="flex items-center gap-3 mt-1">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => servings > 1 && setServings(servings - 1)}
                  disabled={servings <= 1}
                >
                  -
                </Button>
                <span className="text-lg font-medium">{servings}</span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="h-8 w-8 p-0"
                  onClick={() => setServings(servings + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="ingredients">Ingredients</TabsTrigger>
            <TabsTrigger value="instructions">Instructions</TabsTrigger>
          </TabsList>
          <TabsContent value="ingredients" className="pt-6">
            <ul className="space-y-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          <TabsContent value="instructions" className="pt-6">
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-1">
                    <p>{instruction}</p>
                  </div>
                </li>
              ))}
            </ol>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}