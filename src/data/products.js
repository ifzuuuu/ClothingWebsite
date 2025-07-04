


export const products = [
  {
    id: '1',
    name: 'Premium Cotton Henley',
    price: 1299,
    originalPrice: 1999,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mens',
    brand: 'StyleCraft',
    rating: 4.5,
    reviews: 128,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Navy', 'White', 'Gray'],
    description: 'Comfortable cotton henley perfect for casual wear',
    inStock: true
  },
  {
    id: '2',
    name: 'Elegant Floral Dress',
    price: 2499,
    originalPrice: 3499,
    image: 'https://images.pexels.com/photos/794062/pexels-photo-794062.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'womens',
    brand: 'Bella Vista',
    rating: 4.8,
    reviews: 89,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Floral Pink', 'Floral Blue'],
    description: 'Beautiful floral dress perfect for special occasions',
    inStock: true
  },
  {
    id: '3',
    name: 'Classic Denim Jacket',
    price: 3999,
    originalPrice: 5999,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mens',
    brand: 'Urban Edge',
    rating: 4.6,
    reviews: 67,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Light Blue', 'Dark Blue', 'Black'],
    description: 'Timeless denim jacket that never goes out of style',
    inStock: true
  },
  {
    id: '4',
    name: 'Bohemian Maxi Dress',
    price: 1899,
    originalPrice: 2899,
    image: 'https://images.pexels.com/photos/1755385/pexels-photo-1755385.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'womens',
    brand: 'Free Spirit',
    rating: 4.7,
    reviews: 156,
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Burgundy', 'Navy', 'Black'],
    description: 'Flowing maxi dress with bohemian print',
    inStock: true
  },
  {
    id: '5',
    name: 'Cozy Knit Sweater',
    price: 2199,
    originalPrice: 3199,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'womens',
    brand: 'Comfort Zone',
    rating: 4.4,
    reviews: 92,
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Pink', 'Gray'],
    description: 'Soft and cozy knit sweater for chilly days',
    inStock: true
  },
  {
    id: '6',
    name: 'Formal Button-Up Shirt',
    price: 1599,
    originalPrice: 2299,
    image: 'https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mens',
    brand: 'Executive',
    rating: 4.3,
    reviews: 73,
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['White', 'Light Blue', 'Pink'],
    description: 'Professional button-up shirt for office wear',
    inStock: true
  },
  {
    id: '7',
    name: 'Kids Rainbow T-Shirt',
    price: 799,
    originalPrice: 1199,
    image: 'https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'kids',
    brand: 'Little Sunshine',
    rating: 4.9,
    reviews: 201,
    sizes: ['2-3Y', '4-5Y', '6-7Y', '8-9Y'],
    colors: ['Rainbow', 'Blue', 'Pink'],
    description: 'Colorful and comfortable t-shirt for kids',
    inStock: true
  },
  {
    id: '8',
    name: 'Sports Track Pants',
    price: 1499,
    originalPrice: 2199,
    image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'mens',
    brand: 'ActiveFit',
    rating: 4.5,
    reviews: 134,
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Gray'],
    description: 'Comfortable track pants for workouts and leisure',
    inStock: true
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'mens', name: "Men's Clothing", count: products.filter(p => p.category === 'mens').length },
  { id: 'womens', name: "Women's Clothing", count: products.filter(p => p.category === 'womens').length },
  { id: 'kids', name: "Kids' Clothing", count: products.filter(p => p.category === 'kids').length }
];
export const ageGroups = ['2-3Y', '4-5Y', '6-7Y', '8-9Y', 'Teens', 'Adults'];
