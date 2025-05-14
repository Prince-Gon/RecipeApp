import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { 
  Home, 
  Compass, 
  Heart, 
  ChefHat, 
  User
} from 'lucide-react';

export function MobileNav() {
  const location = useLocation();
  
  const links = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: ChefHat, label: 'Create', path: '/create-recipe' },
    { icon: Heart, label: 'Favorites', path: '/favorites' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-background border-t">
      <div className="grid grid-cols-5 h-16">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className={cn(
              "flex flex-col items-center justify-center",
              location.pathname === link.path
                ? "text-primary"
                : "text-muted-foreground"
            )}
          >
            {link.path === '/create-recipe' ? (
              <div className="flex items-center justify-center w-12 h-12 bg-primary rounded-full -mt-6">
                <link.icon size={24} className="text-primary-foreground" />
              </div>
            ) : (
              <>
                <link.icon size={20} />
                <span className="text-xs mt-1">{link.label}</span>
              </>
            )}
          </Link>
        ))}
      </div>
    </nav>
  );
}