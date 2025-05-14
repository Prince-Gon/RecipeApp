import { categories } from '@/lib/mock-data';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <ScrollArea className="w-full">
      <div className="flex space-x-2 py-4">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={cn(
              "rounded-full",
              selectedCategory === category && "bg-primary text-primary-foreground"
            )}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}