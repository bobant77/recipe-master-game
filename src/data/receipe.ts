import type { Recipe } from '@/lib/types'

export const recipes: Recipe[] = [
  // Italian Cuisine
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    ingredients: ['Spaghetti pasta', 'Eggs', 'Pancetta', 'Parmesan cheese', 'Black pepper', 'Garlic'],
    cookingMethod: 'Pasta tossed with creamy egg sauce, crispy pancetta, and freshly grated cheese',
    cuisine: 'italian',
    difficulty: 'medium',
    emoji: '🍝',
    cookingTime: 20,
    servings: 4
  },
  {
    id: 'margherita-pizza',
    name: 'Margherita Pizza',
    ingredients: ['Pizza dough', 'Tomato sauce', 'Fresh mozzarella', 'Fresh basil', 'Olive oil'],
    cookingMethod: 'Thin crust topped with sauce, cheese, and herbs, baked in a hot oven',
    cuisine: 'italian',
    difficulty: 'easy',
    emoji: '🍕',
    cookingTime: 25,
    servings: 2
  },
  {
    id: 'lasagna',
    name: 'Lasagna',
    ingredients: ['Lasagna noodles', 'Ground beef', 'Ricotta cheese', 'Mozzarella', 'Tomato sauce', 'Parmesan'],
    cookingMethod: 'Layered pasta with meat sauce, cheese, and béchamel, baked until bubbly',
    cuisine: 'italian',
    difficulty: 'hard',
    emoji: '🥘',
    cookingTime: 90,
    servings: 8
  },
  {
    id: 'tiramisu',
    name: 'Tiramisu',
    ingredients: ['Ladyfinger cookies', 'Mascarpone', 'Coffee', 'Cocoa powder', 'Eggs', 'Sugar'],
    cookingMethod: 'Layered Italian dessert with coffee-soaked cookies and creamy cheese mixture',
    cuisine: 'italian',
    difficulty: 'medium',
    emoji: '🍰',
    cookingTime: 30,
    servings: 8
  },

  // Chinese Cuisine
  {
    id: 'kung-pao-chicken',
    name: 'Kung Pao Chicken',
    ingredients: ['Chicken breast', 'Peanuts', 'Bell peppers', 'Soy sauce', 'Garlic', 'Ginger', 'Chili peppers'],
    cookingMethod: 'Diced chicken stir-fried with vegetables, peanuts, and savory-spicy sauce',
    cuisine: 'chinese',
    difficulty: 'medium',
    emoji: '🥘',
    cookingTime: 15,
    servings: 4
  },
  {
    id: 'fried-rice',
    name: 'Fried Rice',
    ingredients: ['Cooked rice', 'Eggs', 'Soy sauce', 'Vegetables', 'Green onions', 'Garlic'],
    cookingMethod: 'Day-old rice stir-fried with eggs, vegetables, and seasonings in a hot wok',
    cuisine: 'chinese',
    difficulty: 'easy',
    emoji: '🍛',
    cookingTime: 10,
    servings: 4
  },
  {
    id: 'sweet-sour-pork',
    name: 'Sweet and Sour Pork',
    ingredients: ['Pork shoulder', 'Pineapple', 'Bell peppers', 'Onions', 'Vinegar', 'Sugar', 'Ketchup'],
    cookingMethod: 'Battered pork deep-fried and tossed with tangy-sweet sauce and fresh fruits',
    cuisine: 'chinese',
    difficulty: 'medium',
    emoji: '🍖',
    cookingTime: 30,
    servings: 4
  },
  {
    id: 'dumplings',
    name: 'Pork Dumplings',
    ingredients: ['Ground pork', 'Dumpling wrappers', 'Cabbage', 'Ginger', 'Soy sauce', 'Sesame oil'],
    cookingMethod: 'Seasoned meat filling wrapped in dough and steamed, boiled, or pan-fried',
    cuisine: 'chinese',
    difficulty: 'medium',
    emoji: '🥟',
    cookingTime: 45,
    servings: 6
  },

  // Mexican Cuisine
  {
    id: 'chicken-tacos',
    name: 'Chicken Tacos',
    ingredients: ['Chicken breast', 'Corn tortillas', 'Onions', 'Cilantro', 'Lime', 'Salsa', 'Avocado'],
    cookingMethod: 'Seasoned grilled chicken served in soft tortillas with fresh toppings',
    cuisine: 'mexican',
    difficulty: 'easy',
    emoji: '🌮',
    cookingTime: 20,
    servings: 4
  },
  {
    id: 'guacamole',
    name: 'Guacamole',
    ingredients: ['Avocados', 'Lime juice', 'Onions', 'Tomatoes', 'Cilantro', 'Jalapeños', 'Salt'],
    cookingMethod: 'Fresh avocados mashed with lime, herbs, and vegetables for a creamy dip',
    cuisine: 'mexican',
    difficulty: 'easy',
    emoji: '🥑',
    cookingTime: 10,
    servings: 6
  },
  {
    id: 'beef-enchiladas',
    name: 'Beef Enchiladas',
    ingredients: ['Corn tortillas', 'Ground beef', 'Cheese', 'Enchilada sauce', 'Onions', 'Sour cream'],
    cookingMethod: 'Rolled tortillas filled with meat and cheese, covered in sauce and baked',
    cuisine: 'mexican',
    difficulty: 'medium',
    emoji: '🌯',
    cookingTime: 45,
    servings: 6
  },

  // Indian Cuisine
  {
    id: 'chicken-curry',
    name: 'Chicken Curry',
    ingredients: ['Chicken', 'Onions', 'Tomatoes', 'Ginger', 'Garlic', 'Curry spices', 'Coconut milk'],
    cookingMethod: 'Tender chicken simmered in aromatic spiced sauce with herbs and vegetables',
    cuisine: 'indian',
    difficulty: 'medium',
    emoji: '🍛',
    cookingTime: 40,
    servings: 4
  },
  {
    id: 'biryani',
    name: 'Chicken Biryani',
    ingredients: ['Basmati rice', 'Chicken', 'Yogurt', 'Saffron', 'Onions', 'Spices', 'Mint'],
    cookingMethod: 'Fragrant rice layered with spiced meat and slow-cooked to perfection',
    cuisine: 'indian',
    difficulty: 'hard',
    emoji: '🍚',
    cookingTime: 90,
    servings: 6
  },
  {
    id: 'butter-chicken',
    name: 'Butter Chicken',
    ingredients: ['Chicken', 'Butter', 'Cream', 'Tomatoes', 'Garam masala', 'Ginger', 'Garlic'],
    cookingMethod: 'Marinated chicken in rich, creamy tomato-based sauce with aromatic spices',
    cuisine: 'indian',
    difficulty: 'medium',
    emoji: '🍗',
    cookingTime: 35,
    servings: 4
  },

  // French Cuisine
  {
    id: 'beef-bourguignon',
    name: 'Beef Bourguignon',
    ingredients: ['Beef chuck', 'Red wine', 'Bacon', 'Mushrooms', 'Onions', 'Carrots', 'Herbs'],
    cookingMethod: 'Slow-braised beef in red wine with vegetables and aromatic herbs',
    cuisine: 'french',
    difficulty: 'hard',
    emoji: '🍷',
    cookingTime: 180,
    servings: 6
  },
  {
    id: 'ratatouille',
    name: 'Ratatouille',
    ingredients: ['Eggplant', 'Zucchini', 'Bell peppers', 'Tomatoes', 'Onions', 'Garlic', 'Herbs'],
    cookingMethod: 'Mediterranean vegetables slowly simmered with herbs until tender and flavorful',
    cuisine: 'french',
    difficulty: 'medium',
    emoji: '🥬',
    cookingTime: 45,
    servings: 4
  },
  {
    id: 'french-onion-soup',
    name: 'French Onion Soup',
    ingredients: ['Yellow onions', 'Beef broth', 'White wine', 'Gruyère cheese', 'Baguette', 'Thyme'],
    cookingMethod: 'Caramelized onions in rich broth, topped with cheese-crusted bread and broiled',
    cuisine: 'french',
    difficulty: 'medium',
    emoji: '🍲',
    cookingTime: 60,
    servings: 4
  },

  // Japanese Cuisine
  {
    id: 'chicken-teriyaki',
    name: 'Chicken Teriyaki',
    ingredients: ['Chicken thighs', 'Soy sauce', 'Mirin', 'Sugar', 'Ginger', 'Garlic', 'Sesame seeds'],
    cookingMethod: 'Grilled chicken glazed with sweet and savory teriyaki sauce',
    cuisine: 'japanese',
    difficulty: 'easy',
    emoji: '🍗',
    cookingTime: 25,
    servings: 4
  },
  {
    id: 'salmon-sushi',
    name: 'Salmon Sushi',
    ingredients: ['Sushi rice', 'Fresh salmon', 'Rice vinegar', 'Nori seaweed', 'Wasabi', 'Soy sauce'],
    cookingMethod: 'Seasoned rice topped with fresh fish, carefully shaped by hand',
    cuisine: 'japanese',
    difficulty: 'hard',
    emoji: '🍣',
    cookingTime: 30,
    servings: 2
  },
  {
    id: 'miso-soup',
    name: 'Miso Soup',
    ingredients: ['Miso paste', 'Dashi stock', 'Tofu', 'Green onions', 'Seaweed', 'Shiitake mushrooms'],
    cookingMethod: 'Clear broth with fermented soybean paste, tofu, and vegetables',
    cuisine: 'japanese',
    difficulty: 'easy',
    emoji: '🍜',
    cookingTime: 15,
    servings: 4
  },

  // American Cuisine
  {
    id: 'classic-burger',
    name: 'Classic Burger',
    ingredients: ['Ground beef', 'Burger buns', 'Lettuce', 'Tomatoes', 'Onions', 'Cheese', 'Pickles'],
    cookingMethod: 'Grilled beef patty on a toasted bun with fresh vegetables and condiments',
    cuisine: 'american',
    difficulty: 'easy',
    emoji: '🍔',
    cookingTime: 15,
    servings: 4
  },
  {
    id: 'mac-and-cheese',
    name: 'Mac and Cheese',
    ingredients: ['Macaroni pasta', 'Cheddar cheese', 'Milk', 'Butter', 'Flour', 'Breadcrumbs'],
    cookingMethod: 'Pasta in creamy cheese sauce, topped with crispy breadcrumbs and baked',
    cuisine: 'american',
    difficulty: 'easy',
    emoji: '🧀',
    cookingTime: 30,
    servings: 6
  },
  {
    id: 'bbq-ribs',
    name: 'BBQ Ribs',
    ingredients: ['Pork ribs', 'BBQ sauce', 'Brown sugar', 'Paprika', 'Garlic powder', 'Onion powder'],
    cookingMethod: 'Slow-cooked ribs with dry rub and tangy barbecue sauce until fall-off-the-bone tender',
    cuisine: 'american',
    difficulty: 'medium',
    emoji: '🍖',
    cookingTime: 240,
    servings: 4
  },
  {
    id: 'chicken-noodle-soup',
    name: 'Chicken Noodle Soup',
    ingredients: ['Chicken broth', 'Egg noodles', 'Chicken breast', 'Carrots', 'Celery', 'Onions'],
    cookingMethod: 'Comforting soup with tender chicken, vegetables, and pasta in savory broth',
    cuisine: 'american',
    difficulty: 'easy',
    emoji: '🍜',
    cookingTime: 30,
    servings: 6
  },
  {
    id: 'pancakes',
    name: 'Pancakes',
    ingredients: ['Flour', 'Eggs', 'Milk', 'Sugar', 'Baking powder', 'Butter', 'Vanilla'],
    cookingMethod: 'Fluffy breakfast cakes cooked on a griddle and served with syrup',
    cuisine: 'american',
    difficulty: 'easy',
    emoji: '🥞',
    cookingTime: 15,
    servings: 4
  },

  // Thai Cuisine
  {
    id: 'pad-thai',
    name: 'Pad Thai',
    ingredients: ['Rice noodles', 'Shrimp', 'Bean sprouts', 'Eggs', 'Tamarind paste', 'Fish sauce', 'Peanuts'],
    cookingMethod: 'Stir-fried rice noodles with sweet and tangy sauce, proteins, and fresh vegetables',
    cuisine: 'thai',
    difficulty: 'medium',
    emoji: '🍜',
    cookingTime: 20,
    servings: 4
  },
  {
    id: 'green-curry',
    name: 'Green Curry',
    ingredients: ['Green curry paste', 'Coconut milk', 'Chicken', 'Thai basil', 'Eggplant', 'Fish sauce'],
    cookingMethod: 'Aromatic curry simmered in coconut milk with herbs, vegetables, and protein',
    cuisine: 'thai',
    difficulty: 'medium',
    emoji: '🍛',
    cookingTime: 30,
    servings: 4
  },
  {
    id: 'tom-yum-soup',
    name: 'Tom Yum Soup',
    ingredients: ['Shrimp', 'Mushrooms', 'Lemongrass', 'Lime leaves', 'Chili', 'Fish sauce', 'Lime juice'],
    cookingMethod: 'Hot and sour soup with fragrant herbs, seafood, and bold flavors',
    cuisine: 'thai',
    difficulty: 'easy',
    emoji: '🍲',
    cookingTime: 25,
    servings: 4
  },

  // Greek Cuisine
  {
    id: 'greek-salad',
    name: 'Greek Salad',
    ingredients: ['Tomatoes', 'Cucumbers', 'Red onions', 'Feta cheese', 'Olives', 'Olive oil', 'Oregano'],
    cookingMethod: 'Fresh vegetables tossed with cheese, herbs, and olive oil dressing',
    cuisine: 'greek',
    difficulty: 'easy',
    emoji: '🥗',
    cookingTime: 10,
    servings: 4
  },
  {
    id: 'moussaka',
    name: 'Moussaka',
    ingredients: ['Eggplant', 'Ground lamb', 'Béchamel sauce', 'Tomatoes', 'Onions', 'Parmesan cheese'],
    cookingMethod: 'Layered casserole with eggplant, meat sauce, and creamy topping, baked until golden',
    cuisine: 'greek',
    difficulty: 'hard',
    emoji: '🍆',
    cookingTime: 120,
    servings: 8
  },
  {
    id: 'gyros',
    name: 'Gyros',
    ingredients: ['Pita bread', 'Lamb', 'Tzatziki sauce', 'Tomatoes', 'Onions', 'Cucumber'],
    cookingMethod: 'Seasoned meat wrapped in flatbread with yogurt sauce and fresh vegetables',
    cuisine: 'greek',
    difficulty: 'medium',
    emoji: '🥙',
    cookingTime: 30,
    servings: 4
  },

  // Mediterranean
  {
    id: 'hummus',
    name: 'Hummus',
    ingredients: ['Chickpeas', 'Tahini', 'Lemon juice', 'Garlic', 'Olive oil', 'Cumin'],
    cookingMethod: 'Creamy dip made from blended legumes, sesame paste, and Middle Eastern spices',
    cuisine: 'mediterranean',
    difficulty: 'easy',
    emoji: '🫘',
    cookingTime: 10,
    servings: 6
  },
  {
    id: 'paella',
    name: 'Paella',
    ingredients: ['Arborio rice', 'Saffron', 'Seafood', 'Chicken', 'Bell peppers', 'Peas', 'Tomatoes'],
    cookingMethod: 'Spanish rice dish cooked with saffron, mixed proteins, and vegetables in a large pan',
    cuisine: 'mediterranean',
    difficulty: 'hard',
    emoji: '🥘',
    cookingTime: 45,
    servings: 6
  },
  {
    id: 'falafel',
    name: 'Falafel',
    ingredients: ['Chickpeas', 'Parsley', 'Cilantro', 'Onions', 'Garlic', 'Cumin', 'Coriander'],
    cookingMethod: 'Deep-fried balls made from ground legumes and aromatic herbs and spices',
    cuisine: 'mediterranean',
    difficulty: 'medium',
    emoji: '🧆',
    cookingTime: 25,
    servings: 4
  },

  // More American Classics
  {
    id: 'beef-stew',
    name: 'Beef Stew',
    ingredients: ['Beef chuck', 'Potatoes', 'Carrots', 'Celery', 'Onions', 'Beef broth', 'Herbs'],
    cookingMethod: 'Hearty stew with tender meat and vegetables slow-cooked in rich gravy',
    cuisine: 'american',
    difficulty: 'medium',
    emoji: '🍲',
    cookingTime: 150,
    servings: 6
  },
  {
    id: 'caesar-salad',
    name: 'Caesar Salad',
    ingredients: ['Romaine lettuce', 'Parmesan cheese', 'Croutons', 'Caesar dressing', 'Anchovies'],
    cookingMethod: 'Crisp lettuce tossed with creamy dressing, cheese, and crunchy bread cubes',
    cuisine: 'american',
    difficulty: 'easy',
    emoji: '🥗',
    cookingTime: 10,
    servings: 4
  },
  {
    id: 'chocolate-chip-cookies',
    name: 'Chocolate Chip Cookies',
    ingredients: ['Flour', 'Butter', 'Brown sugar', 'Eggs', 'Chocolate chips', 'Vanilla', 'Baking soda'],
    cookingMethod: 'Sweet dough baked until golden with melted chocolate pieces throughout',
    cuisine: 'american',
    difficulty: 'easy',
    emoji: '🍪',
    cookingTime: 20,
    servings: 24
  },
  {
    id: 'apple-pie',
    name: 'Apple Pie',
    ingredients: ['Apples', 'Pie crust', 'Sugar', 'Cinnamon', 'Butter', 'Flour', 'Lemon juice'],
    cookingMethod: 'Classic American dessert with spiced fruit filling in flaky pastry crust',
    cuisine: 'american',
    difficulty: 'medium',
    emoji: '🥧',
    cookingTime: 75,
    servings: 8
  }
]


export const getRecipesByDifficulty = (difficulty: 'easy' | 'medium' | 'hard'): Recipe[] => {
  return recipes.filter(recipe => recipe.difficulty === difficulty)
}

export const getRecipesByCuisine = (cuisine: string): Recipe[] => {
  return recipes.filter(recipe => recipe.cuisine === cuisine)
}

export const getRandomRecipes = (count: number): Recipe[] => {
  const shuffled = [...recipes].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, count)
}

export const searchRecipes = (query: string): Recipe[] => {
  const lowerQuery = query.toLowerCase()
  return recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(lowerQuery) ||
    recipe.ingredients.some(ingredient => 
      ingredient.toLowerCase().includes(lowerQuery)
    ) ||
    recipe.cuisine.toLowerCase().includes(lowerQuery)
  )
}