import { type Recipe } from '@/lib/types';
import { RecipeCard } from './RecipeCard';

interface RecipeFeedProps {
  recipes: Recipe[];
}

export function RecipeFeed({ recipes }: RecipeFeedProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
}