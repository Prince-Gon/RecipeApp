import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChefHat, Home } from 'lucide-react';

export function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
      <ChefHat size={80} className="text-primary mb-6" />
      <h1 className="text-4xl font-bold mb-2">Whoops!</h1>
      <p className="text-xl mb-8 text-muted-foreground">
        Looks like we've burned this recipe.
      </p>
      <Button asChild>
        <Link to="/" className="flex items-center gap-2">
          <Home size={16} />
          Back to Home
        </Link>
      </Button>
    </div>
  );
}