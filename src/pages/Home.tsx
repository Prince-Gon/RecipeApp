import { useState } from 'react';
import { recipes, currentUser } from '@/lib/mock-data';
import { FeaturedRecipe } from '@/components/recipes/FeaturedRecipe';
import { RecipeFeed } from '@/components/recipes/RecipeFeed';
import { CategoryFilter } from '@/components/recipes/CategoryFilter';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  // Filter featured recipes
  const featuredRecipes = recipes.filter(recipe => recipe.isFeatured);
  
  // Filter recipes based on the selected category
  const filteredRecipes = selectedCategory === 'All'
    ? recipes.filter(recipe => !recipe.isFeatured)
    : recipes.filter(recipe => recipe.category === selectedCategory && !recipe.isFeatured);

  return (
    <div className="container px-4 py-8 max-w-7xl mx-auto">
      <div className="mb-10 space-y-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hello, {currentUser.name.split(' ')[0]}</h1>
            <p className="text-muted-foreground mt-1">What delicious recipe will you discover today?</p>
          </div>
          <CategoryFilter 
            selectedCategory={selectedCategory} 
            onSelectCategory={setSelectedCategory} 
          />
        </div>
      </div>

      {selectedCategory === 'All' && (
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Today's Picks</h2>
            <Button variant="ghost" asChild>
              <Link to="/explore" className="text-primary">View all</Link>
            </Button>
          </div>
          <div className="space-y-6">
            {featuredRecipes.map(recipe => (
              <FeaturedRecipe key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      )}

      <section>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {selectedCategory === 'All' ? 'Popular Recipes' : `${selectedCategory} Recipes`}
          </h2>
          <Button variant="ghost" asChild>
            <Link to="/explore" className="text-primary">Explore all</Link>
          </Button>
        </div>
        <RecipeFeed recipes={filteredRecipes} />
      </section>

      <Button 
        className="fixed bottom-6 right-6 rounded-full h-14 w-14 shadow-lg md:hidden"
        size="icon"
        asChild
      >
        <Link to="/create-recipe">
          <PlusCircle size={24} />
        </Link>
      </Button>
    </div>
  );
}