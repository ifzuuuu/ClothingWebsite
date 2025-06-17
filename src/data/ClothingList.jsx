import React from 'react';
import '../css/ClothingList.css';

// ✅ Renamed the array to avoid conflict
export const clothingItems = [
  // WOMEN'S TOPS
  {
    id: 'w001',
    name: 'Essential Cotton T-Shirt',
    brand: 'Everlane',
    category: 'tops',
    demographic: 'women',
    price: 28,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Navy', 'Gray', 'Blush'],
    recommendedFor: {
      bodyType: ['pear', 'apple', 'hourglass', 'rectangle'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'w002',
    name: 'Silk Camisole',
    brand: 'Equipment',
    category: 'tops',
    demographic: 'women',
    price: 168,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/7679665/pexels-photo-7679665.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Ivory', 'Blush', 'Navy', 'Black'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'inverted-triangle'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'w003',
    name: 'Oversized Button-Down',
    brand: 'Madewell',
    category: 'tops',
    demographic: 'women',
    price: 89,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7679577/pexels-photo-7679577.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Striped', 'Pink'],
    recommendedFor: {
      bodyType: ['pear', 'apple', 'rectangle'],
      skinTone: ['neutral', 'cool']
    }
  },
  {
    id: 'w004',
    name: 'Ribbed Tank Top',
    brand: 'COS',
    category: 'tops',
    demographic: 'women',
    price: 45,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679641/pexels-photo-7679641.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Black', 'Gray', 'Olive', 'Camel'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'inverted-triangle'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'w005',
    name: 'Cropped Cardigan',
    brand: 'Acne Studios',
    category: 'tops',
    demographic: 'women',
    price: 320,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679729/pexels-photo-7679729.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Cream', 'Pink', 'Black', 'Green'],
    recommendedFor: {
      bodyType: ['pear', 'rectangle', 'hourglass'],
      skinTone: ['warm', 'neutral']
    }
  },

  // WOMEN'S BOTTOMS
  {
    id: 'w101',
    name: 'High-Rise Skinny Jeans',
    brand: 'Levi\'s',
    category: 'bottoms',
    demographic: 'women',
    price: 98,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/7679664/pexels-photo-7679664.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    colors: ['Dark Wash', 'Light Wash', 'Black', 'White'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'inverted-triangle'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'w102',
    name: 'Wide-Leg Trousers',
    brand: 'Arket',
    category: 'bottoms',
    demographic: 'women',
    price: 69,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679598/pexels-photo-7679598.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Navy', 'Black', 'Beige', 'Olive'],
    recommendedFor: {
      bodyType: ['pear', 'apple', 'rectangle'],
      skinTone: ['neutral', 'warm']
    }
  },
  {
    id: 'w103',
    name: 'Pleated Mini Skirt',
    brand: 'Zara',
    category: 'bottoms',
    demographic: 'women',
    price: 39,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/7679584/pexels-photo-7679584.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Plaid', 'Brown'],
    recommendedFor: {
      bodyType: ['rectangle', 'inverted-triangle'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'w104',
    name: 'High-Waisted Shorts',
    brand: 'Reformation',
    category: 'bottoms',
    demographic: 'women',
    price: 68,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679627/pexels-photo-7679627.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Denim', 'White', 'Black', 'Khaki'],
    recommendedFor: {
      bodyType: ['hourglass', 'pear', 'rectangle'],
      skinTone: ['warm', 'neutral']
    }
  },

  // WOMEN'S DRESSES
  {
    id: 'w201',
    name: 'Midi Wrap Dress',
    brand: 'Ganni',
    category: 'dresses',
    demographic: 'women',
    price: 195,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/7679683/pexels-photo-7679683.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Black', 'Navy', 'Red'],
    recommendedFor: {
      bodyType: ['hourglass', 'pear', 'apple'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'w202',
    name: 'Slip Dress',
    brand: 'Realisation Par',
    category: 'dresses',
    demographic: 'women',
    price: 210,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679715/pexels-photo-7679715.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'Leopard', 'Red', 'Navy'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle'],
      skinTone: ['warm', 'cool']
    }
  },
  {
    id: 'w203',
    name: 'A-Line Midi Dress',
    brand: 'COS',
    category: 'dresses',
    demographic: 'women',
    price: 125,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7679722/pexels-photo-7679722.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Camel'],
    recommendedFor: {
      bodyType: ['pear', 'apple', 'rectangle'],
      skinTone: ['neutral', 'cool']
    }
  },

  // WOMEN'S OUTERWEAR  
  {
    id: 'w301',
    name: 'Wool Coat',
    brand: 'Max Mara',
    category: 'outerwear',
    demographic: 'women',
    price: 890,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/7679696/pexels-photo-7679696.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Camel', 'Black', 'Navy', 'Gray'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'inverted-triangle'],
      skinTone: ['warm', 'neutral']
    }
  },
  {
    id: 'w302',
    name: 'Denim Jacket',
    brand: 'Agolde',
    category: 'outerwear',
    demographic: 'women',
    price: 168,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679694/pexels-photo-7679694.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Blue', 'Black', 'White', 'Light Wash'],
    recommendedFor: {
      bodyType: ['pear', 'rectangle', 'hourglass'],
      skinTone: ['cool', 'neutral']
    }
  },

  // MEN'S TOPS
  {
    id: 'm001',
    name: 'Classic White T-Shirt',
    brand: 'Sunspel',
    category: 'tops',
    demographic: 'men',
    price: 55,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679645/pexels-photo-7679645.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy'],
    recommendedFor: {
      bodyType: ['athletic', 'slim', 'broad', 'average'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'm002',
    name: 'Oxford Shirt',
    brand: 'Brooks Brothers',
    category: 'tops',
    demographic: 'men',
    price: 89,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679652/pexels-photo-7679652.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Blue', 'Pink', 'Yellow'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'average'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'm003',
    name: 'Crew Neck Sweater',
    brand: 'Norse Projects',
    category: 'tops',
    demographic: 'men',
    price: 145,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/7679679/pexels-photo-7679679.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Gray', 'Black', 'Burgundy'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'broad'],
      skinTone: ['warm', 'neutral']
    }
  },
  {
    id: 'm004',
    name: 'Polo Shirt',
    brand: 'Lacoste',
    category: 'tops',
    demographic: 'men',
    price: 98,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7679648/pexels-photo-7679648.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'White', 'Green', 'Red'],
    recommendedFor: {
      bodyType: ['athletic', 'slim', 'average'],
      skinTone: ['cool', 'warm', 'neutral']
    }
  },
  {
    id: 'm005',
    name: 'Henley Long Sleeve',
    brand: 'J.Crew',
    category: 'tops',
    demographic: 'men',
    price: 49,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/7679661/pexels-photo-7679661.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Navy', 'White', 'Olive'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'average'],
      skinTone: ['warm', 'neutral']
    }
  },

  // MEN'S BOTTOMS
  {
    id: 'm101',
    name: 'Slim Fit Chinos',
    brand: 'Bonobos',
    category: 'bottoms',
    demographic: 'men',
    price: 89,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679681/pexels-photo-7679681.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['28', '30', '32', '34', '36', '38', '40'],
    colors: ['Navy', 'Khaki', 'Gray', 'Olive'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'average'],
      skinTone: ['neutral', 'cool']
    }
  },
  {
    id: 'm102',
    name: 'Raw Denim Jeans',
    brand: 'A.P.C.',
    category: 'bottoms',
    demographic: 'men',
    price: 195,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679667/pexels-photo-7679667.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Indigo', 'Black', 'Light Wash'],
    recommendedFor: {
      bodyType: ['slim', 'athletic'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'm103',
    name: 'Cargo Shorts',
    brand: 'Patagonia',
    category: 'bottoms',
    demographic: 'men',
    price: 65,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679673/pexels-photo-7679673.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Khaki', 'Navy', 'Olive', 'Black'],
    recommendedFor: {
      bodyType: ['athletic', 'broad', 'average'],
      skinTone: ['warm', 'neutral']
    }
  },
  {
    id: 'm104',
    name: 'Dress Trousers',
    brand: 'Hugo Boss',
    category: 'bottoms',
    demographic: 'men',
    price: 149,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7679685/pexels-photo-7679685.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['30', '32', '34', '36', '38', '40'],
    colors: ['Navy', 'Charcoal', 'Black', 'Brown'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'average'],
      skinTone: ['cool', 'neutral']
    }
  },

  // MEN'S OUTERWEAR
  {
    id: 'm301',
    name: 'Wool Peacoat',
    brand: 'Schott',
    category: 'outerwear',
    demographic: 'men',
    price: 425,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/7679687/pexels-photo-7679687.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Black', 'Charcoal'],
    recommendedFor: {
      bodyType: ['broad', 'athletic', 'average'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'm302',
    name: 'Bomber Jacket',
    brand: 'Alpha Industries',
    category: 'outerwear',
    demographic: 'men',
    price: 135,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679691/pexels-photo-7679691.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Olive', 'Black', 'Navy', 'Gray'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'average'],
      skinTone: ['warm', 'neutral']
    }
  },
  {
    id: 'm303',
    name: 'Leather Jacket',
    brand: 'AllSaints',
    category: 'outerwear',
    demographic: 'men',
    price: 398,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679693/pexels-photo-7679693.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Brown', 'Tan'],
    recommendedFor: {
      bodyType: ['slim', 'athletic'],
      skinTone: ['cool', 'warm']
    }
  },

  // KIDS CLOTHING
  {
    id: 'k001',
    name: 'Rainbow Striped T-Shirt',
    brand: 'Mini Boden',
    category: 'tops',
    demographic: 'kids',
    price: 22,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679714/pexels-photo-7679714.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8', '10', '12'],
    colors: ['Rainbow', 'Blue Stripes', 'Pink Stripes'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'k002',
    name: 'Dinosaur Hoodie',
    brand: 'H&M Kids',
    category: 'tops',
    demographic: 'kids',
    price: 19,
    rating: 4.3,
    image: 'https://images.pexels.com/photos/7679719/pexels-photo-7679719.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['2T', '3T', '4T', '5T', '6', '7', '8', '10'],
    colors: ['Green', 'Blue', 'Gray'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'k003',
    name: 'Denim Overalls',
    brand: 'OshKosh B\'gosh',
    category: 'bottoms',
    demographic: 'kids',
    price: 34,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679721/pexels-photo-7679721.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['12M', '18M', '2T', '3T', '4T', '5T', '6', '7'],
    colors: ['Classic Blue', 'Light Wash', 'Black'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'k004',
    name: 'Unicorn Dress',
    brand: 'Carter\'s',
    category: 'dresses',
    demographic: 'kids',
    price: 16,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679723/pexels-photo-7679723.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['12M', '18M', '2T', '3T', '4T', '5T', '6', '7', '8'],
    colors: ['Pink', 'Purple', 'White'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'k005',
    name: 'Superhero Cape',
    brand: 'Pottery Barn Kids',
    category: 'outerwear',
    demographic: 'kids',
    price: 29,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/7679725/pexels-photo-7679725.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['One Size'],
    colors: ['Red', 'Blue', 'Purple', 'Green'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },

  // ADDITIONAL WOMEN'S ITEMS
  {
    id: 'w401',
    name: 'Blazer',
    brand: 'Theory',
    category: 'outerwear',
    demographic: 'women',
    price: 445,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Gray', 'Camel'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'inverted-triangle'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'w402',
    name: 'Cashmere Sweater',
    brand: 'Nili Lotan',
    category: 'tops',
    demographic: 'women',
    price: 395,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/7679730/pexels-photo-7679730.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Camel', 'Gray', 'Navy', 'Black'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'apple'],
      skinTone: ['warm', 'neutral']
    }
  },
  {
    id: 'w403',
    name: 'Maxi Dress',
    brand: 'Reformation',
    category: 'dresses',
    demographic: 'women',
    price: 148,
    rating: 4.4,
    image: 'https://images.pexels.com/photos/7679732/pexels-photo-7679732.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral', 'Black', 'Rust', 'Navy'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle', 'pear'],
      skinTone: ['warm', 'cool']
    }
  },

  // MORE MEN'S ITEMS
  {
    id: 'm401',
    name: 'Merino Wool V-Neck',
    brand: 'Uniqlo',
    category: 'tops',
    demographic: 'men',
    price: 39,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7679734/pexels-photo-7679734.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Navy', 'Black', 'Burgundy'],
    recommendedFor: {
      bodyType: ['slim', 'athletic', 'average'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 'm402',
    name: 'Flannel Shirt',
    brand: 'Pendleton',
    category: 'tops',
    demographic: 'men',
    price: 129,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679736/pexels-photo-7679736.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red Plaid', 'Green Plaid', 'Navy Plaid'],
    recommendedFor: {
      bodyType: ['broad', 'athletic', 'average'],
      skinTone: ['warm', 'neutral']
    }
  },

  // MORE KIDS ITEMS  
  {
    id: 'k101',
    name: 'Fairy Wings',
    brand: 'Melissa & Doug',
    category: 'outerwear',
    demographic: 'kids',
    price: 24,
    rating: 4.5,
    image: 'https://images.pexels.com/photos/7679738/pexels-photo-7679738.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['One Size'],
    colors: ['Pink', 'Purple', 'Blue', 'Rainbow'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'k102',
    name: 'Baseball Jersey',
    brand: 'Nike Kids',
    category: 'tops',
    demographic: 'kids',
    price: 45,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679740/pexels-photo-7679740.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['4', '5', '6', '7', '8', '10', '12', '14'],
    colors: ['Red', 'Blue', 'Green', 'Black'],
    recommendedFor: {
      bodyType: ['kids'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },

  // LUXURY BRANDS
  {
    id: 'l001',
    name: 'Silk Blouse',
    brand: 'Saint Laurent',
    category: 'tops',
    demographic: 'women',
    price: 890,
    rating: 4.8,
    image: 'https://images.pexels.com/photos/7679742/pexels-photo-7679742.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Black', 'White', 'Gold'],
    recommendedFor: {
      bodyType: ['hourglass', 'rectangle'],
      skinTone: ['cool', 'warm']
    }
  },
  {
    id: 'l002',
    name: 'Italian Wool Suit',
    brand: 'Giorgio Armani',
    category: 'outerwear',
    demographic: 'men',
    price: 2450,
    rating: 4.9,
    image: 'https://images.pexels.com/photos/7679744/pexels-photo-7679744.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['36', '38', '40', '42', '44', '46'],
    colors: ['Navy', 'Charcoal', 'Black'],
    recommendedFor: {
      bodyType: ['slim', 'athletic'],
      skinTone: ['cool', 'neutral']
    }
  },

  // AFFORDABLE BRANDS
  {
    id: 'a001',
    name: 'Basic Tee Pack',
    brand: 'Target',
    category: 'tops',
    demographic: 'women',
    price: 12,
    rating: 4.1,
    image: 'https://images.pexels.com/photos/7679746/pexels-photo-7679746.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Pink', 'Blue'],
    recommendedFor: {
      bodyType: ['pear', 'apple', 'hourglass', 'rectangle'],
      skinTone: ['warm', 'cool', 'neutral']
    }
  },
  {
    id: 'a002',
    name: 'Joggers',
    brand: 'Old Navy',
    category: 'bottoms',
    demographic: 'men',
    price: 24,
    rating: 4.2,
    image: 'https://images.pexels.com/photos/7679748/pexels-photo-7679748.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gray', 'Navy', 'Black', 'Olive'],
    recommendedFor: {
      bodyType: ['athletic', 'broad', 'average'],
      skinTone: ['warm', 'neutral']
    }
  },

  // SUSTAINABLE BRANDS
  {
    id: 's001',
    name: 'Organic Cotton Dress',
    brand: 'Eileen Fisher',
    category: 'dresses',
    demographic: 'women',
    price: 268,
    rating: 4.7,
    image: 'https://images.pexels.com/photos/7679750/pexels-photo-7679750.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Charcoal', 'Sage'],
    recommendedFor: {
      bodyType: ['apple', 'rectangle', 'pear'],
      skinTone: ['cool', 'neutral']
    }
  },
  {
    id: 's002',
    name: 'Recycled Wool Sweater',
    brand: 'Patagonia',
    category: 'tops',
    demographic: 'men',
    price: 149,
    rating: 4.6,
    image: 'https://images.pexels.com/photos/7679752/pexels-photo-7679752.jpeg?auto=compress&cs=tinysrgb&w=400',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Forest', 'Navy', 'Burgundy', 'Gray'],
    recommendedFor: {
      bodyType: ['athletic', 'broad', 'slim'],
      skinTone: ['warm', 'neutral']
    }
  }
];


