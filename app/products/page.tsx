'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Filter, 
  Grid, 
  List, 
  Search,
  SlidersHorizontal,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  brand: string;
  colorVariants: string[];
  badge?: string;
  inStock: boolean;
  imageUrl: string;
}

export default function ProductsPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popular');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Apple iPhone 16 MagSafe Hoesje (Transparant)',
      price: 29.99,
      rating: 4.8,
      reviewCount: 234,
      category: 'hoesjes',
      brand: 'Apple',
      colorVariants: ['white', 'black', 'blue'],
      badge: 'Bestseller',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '2',
      name: 'Apple iPhone 17 MagSafe Hoesje (Zwart)',
      price: 32.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviewCount: 156,
      category: 'hoesjes',
      brand: 'Apple',
      colorVariants: ['black', 'gray', 'red'],
      badge: 'Nieuw',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      name: 'Samsung Galaxy S24 Hoesje (Blauw)',
      price: 24.99,
      rating: 4.5,
      reviewCount: 89,
      category: 'hoesjes',
      brand: 'Samsung',
      colorVariants: ['blue', 'black', 'white'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '4',
      name: 'Magnetic Battery Pack 15W 5000mAh (Wit)',
      price: 49.95,
      originalPrice: 59.95,
      rating: 4.7,
      reviewCount: 201,
      category: 'oplaad',
      brand: 'Generic',
      colorVariants: ['white', 'black'],
      badge: 'Sale',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '5',
      name: 'Privacy Screenprotector (iPhone 15/16/17)',
      price: 14.99,
      rating: 4.4,
      reviewCount: 178,
      category: 'bescherming',
      brand: 'Generic',
      colorVariants: ['clear'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '6',
      name: '20W USB-C Snellader',
      price: 19.99,
      rating: 4.3,
      reviewCount: 92,
      category: 'oplaad',
      brand: 'Generic',
      colorVariants: ['white', 'black'],
      inStock: false,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
  ];

  const categories = [
    { value: 'all', label: 'Alle Categorieën' },
    { value: 'hoesjes', label: 'Hoesjes' },
    { value: 'oplaad', label: 'Opladers & Kabels' },
    { value: 'bescherming', label: 'Screenprotectors' },
    { value: 'audio', label: 'Audio' },
    { value: 'gaming', label: 'Gaming Gear' },
  ];

  const brands = [
    { value: 'all', label: 'Alle Merken' },
    { value: 'Apple', label: 'Apple' },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'Generic', label: 'Generic' },
    { value: 'Sony', label: 'Sony' },
    { value: 'JBL', label: 'JBL' },
  ];

  const sortOptions = [
    { value: 'popular', label: 'Populairste' },
    { value: 'price-low', label: 'Prijs: Laag naar Hoog' },
    { value: 'price-high', label: 'Prijs: Hoog naar Laag' },
    { value: 'rating', label: 'Beste Beoordeling' },
    { value: 'newest', label: 'Nieuwste' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesBrand && matchesPrice && matchesSearch;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 lg:h-56 bg-gray-50 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.badge && (
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        
        {/* Heart Button */}
        <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        
        {/* Product Image */}
        <Link href={`/products/${product.id}`}>
          <div className="relative w-full h-full cursor-pointer">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        </Link>
      </div>
      
      {/* Product Info */}
      <div className="p-4 lg:p-5">
        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors cursor-pointer">
            {product.name}
          </h3>
        </Link>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            ({product.reviewCount})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl lg:text-2xl font-bold text-gray-900">
            €{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <span className="text-sm lg:text-base text-gray-400 line-through">
              €{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Stock Status */}
        <div className="mb-4">
          {product.inStock ? (
            <p className="text-sm text-green-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Op voorraad
            </p>
          ) : (
            <p className="text-sm text-red-600 flex items-center gap-1">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              Niet op voorraad
            </p>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>
          <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>{product.inStock ? 'In Winkelwagen' : 'Niet Beschikbaar'}</span>
        </button>
      </div>
    </div>
  );

  const ProductListItem = ({ product }: { product: Product }) => (
    <div className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 p-4 lg:p-6">
      <div className="flex gap-4 lg:gap-6">
        {/* Product Image */}
        <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
          <Link href={`/products/${product.id}`}>
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover rounded-lg cursor-pointer"
            />
          </Link>
          {product.badge && (
            <div className="absolute top-2 left-2">
              <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                {product.badge}
              </span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1">
          <Link href={`/products/${product.id}`}>
            <h3 className="font-semibold text-gray-900 text-base lg:text-lg mb-2 hover:text-blue-600 transition-colors cursor-pointer">
              {product.name}
            </h3>
          </Link>
          
          <div className="flex items-center gap-4 mb-3">
            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating) 
                        ? 'text-yellow-400 fill-current' 
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs text-gray-600">
                ({product.reviewCount})
              </span>
            </div>
            
            {/* Category */}
            <span className="text-sm text-gray-500 capitalize">{product.category}</span>
            
            {/* Brand */}
            <span className="text-sm text-gray-500">{product.brand}</span>
          </div>
          
          {/* Color Variants */}
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm text-gray-500">Kleuren:</span>
            <div className="flex gap-1">
              {product.colorVariants.slice(0, 3).map((color, idx) => (
                <span
                  key={idx}
                  className={`w-3 h-3 rounded-full border border-gray-300 ${
                    color === 'white' ? 'bg-white' :
                    color === 'black' ? 'bg-gray-900' :
                    color === 'blue' ? 'bg-blue-500' :
                    color === 'red' ? 'bg-red-500' :
                    color === 'gray' ? 'bg-gray-500' :
                    color === 'clear' ? 'bg-gray-200' :
                    'bg-gray-400'
                  }`}
                />
              ))}
              {product.colorVariants.length > 3 && (
                <span className="text-xs text-gray-500">+{product.colorVariants.length - 3}</span>
              )}
            </div>
          </div>
        </div>

        {/* Price & Actions */}
        <div className="flex flex-col items-end justify-between gap-4">
          <div className="text-right">
            <div className="flex items-center gap-2">
              <span className="text-xl lg:text-2xl font-bold text-gray-900">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-400 line-through">
                  €{product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.inStock ? (
              <p className="text-sm text-green-600 mt-1">Op voorraad</p>
            ) : (
              <p className="text-sm text-red-600 mt-1">Niet op voorraad</p>
            )}
          </div>
          
          <div className="flex gap-2">
            <button className="p-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Heart className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
              disabled={!product.inStock}
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="hidden sm:inline">In Winkelwagen</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">Producten</h1>
              <p className="text-gray-600">
                {filteredProducts.length} producten gevonden
              </p>
            </div>
            
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek producten..."
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Reset
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Categorie
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Merk
                </label>
                <select 
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {brands.map(brand => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Prijsbereik
                </label>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">-</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 100])}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Products */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="bg-white rounded-xl p-4 mb-6 shadow-sm">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-sm text-gray-600">
                    {filteredProducts.length} producten
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Sort */}
                  <div className="relative">
                    <select 
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    >
                      {sortOptions.map(option => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                  </div>
                  
                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                    >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen producten gevonden</h3>
            <p className="text-gray-600 mb-4">
              Probeer andere filters of zoektermen
            </p>
            <button 
              onClick={() => {
                setSelectedCategory('all');
                setSelectedBrand('all');
                setSearchQuery('');
                setPriceRange([0, 100]);
              }}
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-4'
          }>
            {filteredProducts.map((product) => (
              viewMode === 'grid' ? (
                <ProductCard key={product.id} product={product} />
              ) : (
                <ProductListItem key={product.id} product={product} />
              )
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
</div>
  );
}
