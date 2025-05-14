<<<<<<< Updated upstream
import { useState, useRef, useEffect } from 'react';
import { recipes, currentUser } from '@/lib/mock-data';
=======
import { useState, useEffect, useRef } from 'react';
import { recipes, currentUser, socialPosts } from '@/lib/mock-data';
>>>>>>> Stashed changes
import { FeaturedRecipe } from '@/components/recipes/FeaturedRecipe';
import { RecipeFeed } from '@/components/recipes/RecipeFeed';
import { CategoryFilter } from '@/components/recipes/CategoryFilter';
import { Button } from '@/components/ui/button';
import { PlusCircle, Heart, MessageCircle, Share2, Bookmark } from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample social posts data (in a real app, you'd import this)
const sampleSocialPosts = socialPosts || [
  {
    id: 1,
    user: {
      name: 'Jane Cooper',
      avatar: '/api/placeholder/32/32',
      username: '@janecooper'
    },
    content: 'Just made this amazing pasta dish with homemade sauce! So delicious and easy to make.',
    image: '/api/placeholder/400/400',
    likes: 152,
    comments: 23,
    timestamp: '2h ago'
  },
  {
    id: 2,
    user: {
      name: 'Alex Morgan',
      avatar: '/api/placeholder/32/32',
      username: '@alexmorgan'
    },
    content: 'My attempt at the famous chocolate soufflé. It was challenging but so worth it! Who else has tried this recipe?',
    image: '/api/placeholder/400/400',
    likes: 89,
    comments: 15,
    timestamp: '5h ago'
  },
  {
    id: 3,
    user: {
      name: 'Michael Johnson',
      avatar: '/api/placeholder/32/32',
      username: '@michaelj'
    },
    content: 'Sunday meal prep done right! These healthy containers will last me the whole week. #mealprep #healthyeating',
    image: '/api/placeholder/400/400',
    likes: 205,
    comments: 31,
    timestamp: '1d ago'
  }
];

// Social Feed Post Component
const SocialPost = ({ post }) => {
  return (
    <div className="border rounded-lg overflow-hidden bg-white mb-6 shadow-sm">
      <div className="p-4">
        <div className="flex items-center mb-3">
          <img src={post.user.avatar} alt={post.user.name} className="w-8 h-8 rounded-full mr-2" />
          <div>
            <p className="font-medium">{post.user.name}</p>
            <p className="text-sm text-gray-500">{post.user.username} · {post.timestamp}</p>
          </div>
        </div>
        <p className="mb-3">{post.content}</p>
      </div>
      
      <img src={post.image} alt="Post" className="w-full" />
      
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <button className="flex items-center text-gray-500 hover:text-red-500">
              <Heart size={20} className="mr-1" />
              <span>{post.likes}</span>
            </button>
            <button className="flex items-center text-gray-500 hover:text-blue-500">
              <MessageCircle size={20} className="mr-1" />
              <span>{post.comments}</span>
            </button>
            <button className="text-gray-500 hover:text-green-500">
              <Share2 size={20} />
            </button>
          </div>
          <button className="text-gray-500 hover:text-yellow-500">
            <Bookmark size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

// Side Column Component
const SideColumn = ({ title, children }) => {
  return (
    <div className="hidden lg:block space-y-4">
      <div className="bg-white p-4 rounded-lg border shadow-sm">
        <h3 className="font-semibold mb-3">{title}</h3>
        {children}
      </div>
    </div>
  );
};

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
<<<<<<< Updated upstream
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
=======
  const [showSocialFeed, setShowSocialFeed] = useState(false);
  const feedSectionRef = useRef(null);
>>>>>>> Stashed changes
  
  // Filter featured recipes
  const featuredRecipes = recipes.filter(recipe => recipe.isFeatured);
  
  // Filter recipes based on the selected category
  const filteredRecipes = selectedCategory === 'All'
    ? recipes.filter(recipe => !recipe.isFeatured)
    : recipes.filter(recipe => recipe.category === selectedCategory && !recipe.isFeatured);

  // Handle scroll to detect when to show the social feed
  useEffect(() => {
    const handleScroll = () => {
      if (feedSectionRef.current) {
        const rect = feedSectionRef.current.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.75) {
          setShowSocialFeed(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

<<<<<<< Updated upstream
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
=======
      <section className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">
            {selectedCategory === 'All' ? 'Popular Recipes' : `${selectedCategory} Recipes`}
          </h2>
          <Button variant="ghost" asChild>
            <Link to="/explore" className="text-primary">Explore all</Link>
          </Button>
>>>>>>> Stashed changes
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

      {/* Transition element */}
      <div 
        ref={feedSectionRef}
        className="h-16 mb-8 flex justify-center items-center"
      >
        <div className="w-1/3 h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
      </div>

      {/* Social Feed Section with 3-column layout */}
      <section className={`transition-opacity duration-700 ${showSocialFeed ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Food Community Feed</h2>
          <Button variant="ghost" asChild>
            <Link to="/social" className="text-primary">See all posts</Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Sidebar */}
          <SideColumn title="Trending Topics">
            <div className="space-y-2">
              <p className="text-sm font-medium text-blue-500 cursor-pointer">#HomemadePasta</p>
              <p className="text-sm font-medium text-blue-500 cursor-pointer">#WeekendBaking</p>
              <p className="text-sm font-medium text-blue-500 cursor-pointer">#MealPrep</p>
              <p className="text-sm font-medium text-blue-500 cursor-pointer">#QuickDinners</p>
              <p className="text-sm font-medium text-blue-500 cursor-pointer">#VeganRecipes</p>
            </div>
          </SideColumn>
          
          {/* Center Feed */}
          <div className="lg:col-span-1">
            {sampleSocialPosts.map(post => (
              <SocialPost key={post.id} post={post} />
            ))}
            <div className="flex justify-center mt-6">
              <Button variant="outline">Load more posts</Button>
            </div>
          </div>
          
          {/* Right Sidebar */}
          <SideColumn title="People to Follow">
            <div className="space-y-3">
              {[
                { name: 'Sarah Wilson', username: '@sarahchef', avatar: '/api/placeholder/32/32' },
                { name: 'David Chen', username: '@chefdavid', avatar: '/api/placeholder/32/32' },
                { name: 'Emily Parker', username: '@bakingwithemily', avatar: '/api/placeholder/32/32' }
              ].map((user, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full mr-2" />
                    <div>
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-gray-500">{user.username}</p>
                    </div>
                  </div>
                  <Button size="sm" variant="outline">Follow</Button>
                </div>
              ))}
            </div>
          </SideColumn>
        </div>
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