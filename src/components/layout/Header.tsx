import { Link } from 'react-router-dom';
import { type User } from '@/lib/types';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  Bell, 
  Bookmark, 
  ChefHat, 
  Search, 
  User as UserIcon,
  LogOut,
  Settings
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from '@/components/ui/theme-provider';
import { Moon, Sun } from 'lucide-react';

interface HeaderProps {
  currentUser: User;
}

export function Header({ currentUser }: HeaderProps) {
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-sm border-b">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <ChefHat size={24} className="text-primary" />
          <Link to="/" className="text-xl font-bold tracking-tighter">
            FlavorCanvas
          </Link>
        </div>

        <div className="relative hidden md:flex w-full max-w-sm items-center mx-4 md:mx-8">
          <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search recipes, ingredients, chefs..."
            className="pl-8 bg-muted/50 border-none"
          />
        </div>

        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            size="icon" 
            className="relative"
            asChild
          >
            <Link to="/notifications">
              <Bell size={20} />
              <span className="absolute top-0 right-0 h-2 w-2 rounded-full bg-primary"></span>
            </Link>
          </Button>

          <Button 
            variant="ghost" 
            size="icon" 
            asChild
          >
            <Link to="/saved">
              <Bookmark size={20} />
            </Link>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={currentUser.avatarUrl} alt={currentUser.name} />
                  <AvatarFallback>{currentUser.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/profile" className="flex items-center gap-2 cursor-pointer">
                  <UserIcon size={16} />
                  <span>Profile</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/saved" className="flex items-center gap-2 cursor-pointer">
                  <Bookmark size={16} />
                  <span>Saved Recipes</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/settings" className="flex items-center gap-2 cursor-pointer">
                  <Settings size={16} />
                  <span>Settings</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="flex items-center gap-2 cursor-pointer">
                {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link to="/logout" className="flex items-center gap-2 cursor-pointer text-destructive">
                  <LogOut size={16} />
                  <span>Log Out</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}