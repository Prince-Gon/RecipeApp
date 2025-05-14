import { useState, useRef, useEffect } from 'react';
import { recipes, currentUser } from '@/lib/mock-data';
import { FeaturedRecipe } from '@/components/recipes/FeaturedRecipe';
import { RecipeFeed } from '@/components/recipes/RecipeFeed';
import { CategoryFilter } from '@/components/recipes/CategoryFilter';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showThreeColumns, setShowThreeColumns] = useState(false);
  const popularSectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowThreeColumns(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (popularSectionRef.current) {
      observer.observe(popularSectionRef.current);
    }

    return () => observer.disconnect();
  }, []);
  
  // Filter featured recipes
  const featuredRecipes = recipes.filter(recipe => recipe.isFeatured);
  
  // Filter recipes based on the selected category
  const filteredRecipes = selectedCategory === 'All'
    ? recipes.filter(recipe => !recipe.isFeatured)
    : recipes.filter(recipe => recipe.category === selectedCategory && !recipe.isFeatured);

  return (
    <div className="container px-4 py-8 max-w-[1600px] mx-auto">
      <div className="mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Hello, {currentUser.name.split(' ')[0]}</h1>
            <p className="text-muted-foreground mt-1">What delicious recipe will you discover today?</p>
          </div>
          <div className="md:hidden">
            <CategoryFilter 
              selectedCategory={selectedCategory} 
              onSelectCategory={setSelectedCategory} 
            />
          </div>
        </div>
      </div>

      {/* Initial Layout */}
      <div className={`space-y-12 transition-opacity duration-300 ${showThreeColumns ? 'hidden' : ''}`}>
        <section>
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

        <section ref={popularSectionRef}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Popular Recipes</h2>
            <Button variant="ghost" asChild>
              <Link to="/explore" className="text-primary">View all</Link>
            </Button>
          </div>
          <RecipeFeed recipes={filteredRecipes.slice(0, 6)} />
        </section>
      </div>

      {/* Three Column Layout */}
      <div className={`flex gap-8 transition-opacity duration-300 ${showThreeColumns ? 'opacity-100' : 'hidden opacity-0'}`}>
        {/* Left Column - Featured and Popular */}
        <div className="hidden lg:block w-[300px] shrink-0">
          <div className="space-y-8 sticky top-24">
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Today's Picks</h2>
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

            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">Popular Recipes</h2>
                <Button variant="ghost" asChild>
                  <Link to="/explore" className="text-primary">View all</Link>
                </Button>
              </div>
              <RecipeFeed recipes={filteredRecipes.slice(0, 3)} />
            </section>
          </div>
        </div>

        {/* Middle Column - Feed */}
        <div className="flex-1 min-w-0">
          <RecipeFeed recipes={filteredRecipes} />
        </div>

        {/* Right Column - Categories */}
        <div className="hidden md:block w-[200px] shrink-0">
          <div className="sticky top-24 space-y-2">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <div className="flex flex-col gap-2">
              {['All', 'Breakfast', 'Lunch', 'Dinner', 'Desserts', 'Vegetarian', 'Vegan', 'Gluten-Free', 'Low-Carb', 'Healthy'].map(category => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  className="justify-start"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>

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