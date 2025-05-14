import { type Recipe, type User, type Difficulty } from './types';

// Mock Users
export const users: User[] = [
  {
    id: '1',
    name: 'James Spader',
    username: 'chefjames',
    avatarUrl: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'Professional chef with a passion for Asian cuisine',
    followersCount: 1542,
    followingCount: 287,
    recipesCount: 48
  },
  {
    id: '2',
    name: 'Olivia Chen',
    username: 'oliviac',
    avatarUrl: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'Food blogger and nutritionist',
    followersCount: 3201,
    followingCount: 412,
    recipesCount: 72
  },
  {
    id: '3',
    name: 'Elena Rodriguez',
    username: 'elenarod',
    avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'Home cook with a love for Mexican cuisine',
    followersCount: 892,
    followingCount: 156,
    recipesCount: 35
  },
  {
    id: '4',
    name: 'Kenji Tanaka',
    username: 'kenjit',
    avatarUrl: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'Japanese chef specializing in traditional recipes',
    followersCount: 1875,
    followingCount: 230,
    recipesCount: 62
  },
  {
    id: '5',
    name: 'Marco Rossi',
    username: 'marcorossi',
    avatarUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'Italian chef with a passion for Mediterranean cuisine',
    followersCount: 2104,
    followingCount: 192,
    recipesCount: 51
  },
  {
    id: '6',
    name: 'Zoe Williams',
    username: 'zoew',
    avatarUrl: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    bio: 'Vegan chef and cookbook author',
    followersCount: 2430,
    followingCount: 315,
    recipesCount: 89
  }
];

// Mock Recipes
export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Asian white noodle with extra seafood',
    description: 'A delightful combination of tender noodles and fresh seafood, tossed in an umami-rich sauce.',
    imageUrl: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    author: users[0],
    createdAt: '2023-06-15T10:30:00.000Z',
    cookingTime: 20,
    calories: 380,
    likesCount: 243,
    commentsCount: 42,
    ingredients: [
      '200g white noodles',
      '150g mixed seafood (shrimp, squid, mussels)',
      '3 cloves garlic, minced',
      '2 tbsp soy sauce',
      '1 tbsp sesame oil',
      '1 tbsp rice vinegar',
      'Fresh cilantro for garnish',
      'Sliced green onions for garnish'
    ],
    instructions: [
      'Cook noodles according to package instructions.',
      'In a wok, sauté garlic until fragrant.',
      'Add seafood and cook until just done.',
      'Add cooked noodles, soy sauce, sesame oil, and rice vinegar.',
      'Toss everything together and cook for another minute.',
      'Garnish with fresh cilantro and green onions before serving.'
    ],
    difficulty: 'medium' as Difficulty,
    category: 'Dinner',
    isFeatured: true
  },
  {
    id: '2',
    title: 'Healthy breakfast bowl with fresh fruits',
    description: 'Start your day with this nutritious and colorful breakfast bowl packed with vitamins and antioxidants.',
    imageUrl: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    author: users[1],
    createdAt: '2023-06-20T08:15:00.000Z',
    cookingTime: 15,
    calories: 240,
    likesCount: 512,
    commentsCount: 76,
    ingredients: [
      '1 cup Greek yogurt',
      '2 tbsp honey',
      '1/2 cup mixed berries (strawberries, blueberries, raspberries)',
      '1 banana, sliced',
      '2 tbsp granola',
      '1 tbsp chia seeds',
      '1 tbsp almond butter'
    ],
    instructions: [
      'Add Greek yogurt to a bowl.',
      'Drizzle with honey.',
      'Top with mixed berries, sliced banana, granola, and chia seeds.',
      'Add a dollop of almond butter.',
      'Serve immediately.'
    ],
    difficulty: 'easy' as Difficulty,
    category: 'Breakfast',
    isFeatured: true,
    isTrending: true
  },
  {
    id: '3',
    title: 'Healthy Taco Salad with fresh vegetables',
    description: 'A lighter take on tacos, this salad is full of flavor and texture.',
    imageUrl: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    author: users[2],
    createdAt: '2023-06-18T12:45:00.000Z',
    cookingTime: 25,
    calories: 320,
    likesCount: 189,
    commentsCount: 31,
    ingredients: [
      '250g ground turkey or beef',
      '1 packet taco seasoning',
      '1 head romaine lettuce, chopped',
      '1 cup cherry tomatoes, halved',
      '1 avocado, diced',
      '1/2 cup black beans, rinsed and drained',
      '1/4 cup shredded cheddar cheese',
      '2 tbsp Greek yogurt or sour cream',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Brown meat in a pan and add taco seasoning according to package instructions.',
      'In a large bowl, combine chopped lettuce, tomatoes, avocado, and black beans.',
      'Top with cooked meat, cheese, and a dollop of Greek yogurt or sour cream.',
      'Garnish with fresh cilantro before serving.'
    ],
    difficulty: 'easy' as Difficulty,
    category: 'Lunch'
  },
  {
    id: '4',
    title: 'Japanese-style Pancakes Recipe',
    description: 'Fluffy, souffle-like pancakes that are a popular trend in Japan.',
    imageUrl: 'https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    author: users[3],
    createdAt: '2023-06-25T09:20:00.000Z',
    cookingTime: 30,
    calories: 264,
    likesCount: 356,
    commentsCount: 48,
    ingredients: [
      '2 large eggs, separated',
      '1/4 cup sugar, divided',
      '1/4 cup milk',
      '1/2 cup cake flour',
      '1/4 tsp salt',
      '1/4 tsp cream of tartar',
      '1 tbsp unsalted butter, melted',
      'Maple syrup and fresh berries for serving'
    ],
    instructions: [
      'In a bowl, whisk egg yolks with half the sugar, milk, and melted butter.',
      'Sift in cake flour and salt, and mix until smooth.',
      'In another bowl, whip egg whites with cream of tartar until foamy. Gradually add remaining sugar and whip to stiff peaks.',
      'Fold egg whites into yolk mixture gently, taking care not to deflate the whites.',
      'Heat a non-stick pan over low heat. Grease with a little butter.',
      'Spoon batter into 3-inch circles. Cover and cook for 4-5 minutes.',
      'Flip carefully and cook for another 4-5 minutes.',
      'Serve with maple syrup and fresh berries.'
    ],
    difficulty: 'medium' as Difficulty,
    category: 'Breakfast'
  },
  {
    id: '5',
    title: 'Mediterranean Chickpea Salad with Feta',
    description: 'A refreshing salad packed with Mediterranean flavors and protein-rich chickpeas.',
    imageUrl: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    author: users[4],
    createdAt: '2023-06-22T11:30:00.000Z',
    cookingTime: 15,
    calories: 210,
    likesCount: 278,
    commentsCount: 39,
    ingredients: [
      '1 can (15 oz) chickpeas, rinsed and drained',
      '1 cucumber, diced',
      '1 cup cherry tomatoes, halved',
      '1/2 red onion, thinly sliced',
      '1/2 cup Kalamata olives, pitted and halved',
      '100g feta cheese, crumbled',
      '2 tbsp fresh lemon juice',
      '3 tbsp extra virgin olive oil',
      '1 tsp dried oregano',
      'Salt and pepper to taste',
      'Fresh parsley, chopped, for garnish'
    ],
    instructions: [
      'In a large bowl, combine chickpeas, cucumber, tomatoes, red onion, and olives.',
      'In a small bowl, whisk together lemon juice, olive oil, oregano, salt, and pepper.',
      'Pour dressing over salad and toss gently to combine.',
      'Sprinkle with crumbled feta cheese and fresh parsley before serving.'
    ],
    difficulty: 'easy' as Difficulty,
    category: 'Lunch'
  },
  {
    id: '6',
    title: 'Creamy Avocado Toast with poached eggs',
    description: 'A modern breakfast classic elevated with perfectly poached eggs.',
    imageUrl: 'https://images.pexels.com/photos/704569/pexels-photo-704569.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    author: users[5],
    createdAt: '2023-06-28T08:45:00.000Z',
    cookingTime: 15,
    calories: 220,
    likesCount: 423,
    commentsCount: 57,
    ingredients: [
      '2 slices of sourdough bread',
      '1 ripe avocado',
      '2 eggs',
      '1 tbsp white vinegar',
      '1 tsp lemon juice',
      'Red pepper flakes',
      'Salt and pepper to taste',
      'Fresh chives, chopped, for garnish'
    ],
    instructions: [
      'Toast the sourdough bread until golden and crisp.',
      'In a small bowl, mash the avocado with lemon juice, salt, and pepper.',
      'For poached eggs: bring a pot of water to a simmer, add vinegar, create a gentle whirlpool, and crack each egg into the center. Cook for 3-4 minutes.',
      'Spread mashed avocado on toast slices.',
      'Top each toast with a poached egg, sprinkle with red pepper flakes, and garnish with fresh chives.'
    ],
    difficulty: 'easy' as Difficulty,
    category: 'Breakfast',
    isTrending: true
  }
];

// Recipe categories
export const categories = [
  'All',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Desserts',
  'Vegetarian',
  'Vegan',
  'Gluten-Free',
  'Low-Carb',
  'Healthy'
];

// Current user (for demo purposes)
export const currentUser: User = {
  id: '7',
  name: 'Alena Scott',
  username: 'alenascott',
  avatarUrl: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  bio: 'Food enthusiast and amateur chef',
  followersCount: 342,
  followingCount: 267,
  recipesCount: 12
};

// Social Posts (for demo purposes)
import type { SocialPost } from './types';

export const socialPosts: SocialPost[] = [
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