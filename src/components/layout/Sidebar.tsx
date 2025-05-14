import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { type User } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Home, 
  Compass, 
  Heart, 
  Trophy, 
  Utensils, 
  Bookmark, 
  Settings, 
  ChefHat
} from 'lucide-react';
import { Button } from '../ui/button';

interface SidebarProps {
  currentUser: User;
}

export function Sidebar({ currentUser }: SidebarProps) {
  const location = useLocation();
  
  const links = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: Trophy, label: 'Challenges', path: '/challenges' },
    { icon: Utensils, label: 'My Recipes', path: '/my-recipes' },
    { icon: Bookmark, label: 'Saved', path: '/saved' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  return (
    <aside className="hidden md:flex fixed inset-y-0 left-0 z-50 flex-col w-16 lg:w-64 pb-12 border-r bg-background">
      <div className="flex h-16 items-center px-4 justify-center lg:justify-start border-b">
        <Link to="/" className="flex items-center gap-2">
          <ChefHat size={24} className="text-primary" />
          <span className="hidden lg:inline-block text-xl font-bold tracking-tighter">
            FlavorCanvas
          </span>
        </Link>
      </div>
      
      <div className="flex flex-col gap-2 p-4">
        {links.map((link) => (
          <Link 
            key={link.path} 
            to={link.path}
            className={cn(
              "flex items-center gap-3 px-3 py-2 rounded-md transition-colors",
              location.pathname === link.path 
                ? "bg-primary text-primary-foreground" 
                : "hover:bg-muted"
            )}
          >
            <link.icon size={20} />
            <span className="hidden lg:inline-block">{link.label}</span>
          </Link>
        ))}
      </div>

      <div className="mt-auto p-4">
        <Link to="/profile" className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-muted">
          <Avatar className="h-8 w-8">
            <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
            <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="hidden lg:block">
            <div className="text-sm font-medium">{currentUser.name}</div>
            <div className="text-xs text-muted-foreground">@{currentUser.username}</div>
          </div>
        </Link>
      </div>

      <div className="p-4">
        <Button className="w-full" asChild>
          <Link to="/create-recipe">
            <ChefHat className="mr-2 hidden lg:inline-block" />
            <span className="hidden lg:inline-block">Create Recipe</span>
            <ChefHat className="lg:hidden" />
          </Link>
        </Button>
      </div>
    </aside>
  );
}