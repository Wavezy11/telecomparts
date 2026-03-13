'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Filter, 
  Grid, 
  List, 
  Search,
  Gamepad2,
  Monitor,
  Headphones,
  Keyboard,
  Check
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  platform: string;
  category: string;
  brand: string;
  colorVariants: string[];
  badge?: string;
  inStock: boolean;
  imageUrl: string;
  features: string[];
}

export default function GamingPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedPlatform, setSelectedPlatform] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'PlayStation 5 DualSense Controller',
      price: 69.99,
      originalPrice: 79.99,
      rating: 4.9,
      reviewCount: 1247,
      platform: 'playstation',
      category: 'controllers',
      brand: 'Sony',
      colorVariants: ['zwart', 'wit', 'rood', 'blauw'],
      badge: 'Bestseller',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?auto=format&fit=crop&w=400&q=80',
      features: ['Haptic feedback', 'Adaptive triggers', 'Built-in mic']
    },
    {
      id: '2',
      name: 'Xbox Wireless Controller - Carbon Black',
      price: 59.99,
      rating: 4.8,
      reviewCount: 892,
      platform: 'xbox',
      category: 'controllers',
      brand: 'Microsoft',
      colorVariants: ['zwart', 'wit', 'blauw', 'rood'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1592155931064-9d32b5803ea6?auto=format&fit=crop&w=400&q=80',
      features: ['Textured grips', 'Bluetooth', 'USB-C charging']
    },
    {
      id: '3',
      name: 'Nintendo Switch Pro Controller',
      price: 69.99,
      rating: 4.7,
      reviewCount: 678,
      platform: 'nintendo',
      category: 'controllers',
      brand: 'Nintendo',
      colorVariants: ['zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=400&q=80',
      features: ['Motion controls', 'HD Rumble', 'Amiibo support']
    },
    {
      id: '4',
      name: 'SteelSeries Arctis 7P Gaming Headset',
      price: 129.99,
      originalPrice: 169.99,
      rating: 4.6,
      reviewCount: 445,
      platform: 'playstation',
      category: 'audio',
      brand: 'SteelSeries',
      colorVariants: ['zwart'],
      badge: 'Premium',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
      features: ['3D Audio', '24hr battery', 'ClearCast mic']
    },
    {
      id: '5',
      name: 'Razer Huntsman V2 Mechanical Keyboard',
      price: 149.99,
      originalPrice: 199.99,
      rating: 4.8,
      reviewCount: 567,
      platform: 'pc',
      category: 'keyboards',
      brand: 'Razer',
      colorVariants: ['zwart'],
      badge: 'RGB',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Hot-swappable', 'RGB Chroma', 'Linear optical']
    },
    {
      id: '6',
      name: 'Logitech G502 HERO Gaming Mouse',
      price: 79.99,
      rating: 4.7,
      reviewCount: 892,
      platform: 'pc',
      category: 'mice',
      brand: 'Logitech',
      colorVariants: ['zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['16,000 DPI', '11 programmable buttons', 'RGB lighting']
    },
    {
      id: '7',
      name: 'PlayStation 5 Media Remote',
      price: 29.99,
      rating: 4.4,
      reviewCount: 234,
      platform: 'playstation',
      category: 'accessories',
      brand: 'Sony',
      colorVariants: ['zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Voice commands', 'Backlit buttons', 'USB-C charging']
    },
    {
      id: '8',
      name: 'Xbox Stereo Headset',
      price: 24.99,
      rating: 4.3,
      reviewCount: 456,
      platform: 'xbox',
      category: 'audio',
      brand: 'Microsoft',
      colorVariants: ['zwart', 'wit'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80',
      features: ['Spatial sound', 'Flexible mic', 'Comfortable design']
    },
  ];

  const platforms = [
    { value: 'all', label: 'Alle Platforms', icon: Gamepad2 },
    { value: 'playstation', label: 'PlayStation', icon: Gamepad2 },
    { value: 'xbox', label: 'Xbox', icon: Gamepad2 },
    { value: 'nintendo', label: 'Nintendo', icon: Gamepad2 },
    { value: 'pc', label: 'PC Gaming', icon: Monitor },
  ];

  const categories = [
    { value: 'all', label: 'Alle Categorieën' },
    { value: 'controllers', label: 'Controllers' },
    { value: 'audio', label: 'Gaming Audio' },
    { value: 'keyboards', label: 'Keyboards' },
    { value: 'mice', label: 'Gaming Mice' },
    { value: 'accessories', label: 'Accessoires' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesPlatform = selectedPlatform === 'all' || product.platform === selectedPlatform;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPlatform && matchesCategory && matchesSearch;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 lg:h-56 bg-gray-900 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.badge && (
            <span className="inline-block bg-purple-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        
        {/* Platform Icon */}
        <div className="absolute top-3 right-3 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full">
          <Gamepad2 className="w-4 h-4 text-white" />
        </div>
        
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
        {/* Platform & Category */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-purple-600 font-semibold capitalize">{product.platform}</span>
          <span className="text-xs text-gray-500 capitalize">{product.category}</span>
        </div>
        
        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-purple-600 transition-colors cursor-pointer">
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
        
        {/* Features */}
        <div className="flex flex-wrap gap-1 mb-3">
          {product.features.slice(0, 2).map((feature, idx) => (
            <span key={idx} className="text-xs bg-purple-50 text-purple-700 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
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
              <Check className="w-3 h-3" />
              Op voorraad
            </p>
          ) : (
            <p className="text-sm text-red-600">Niet op voorraad</p>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>
          <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>{product.inStock ? 'In Winkelwagen' : 'Niet Beschikbaar'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center">
              <Gamepad2 className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Gaming Gear</h1>
              <p className="text-purple-100 mt-2">Professionele gaming accessoires voor elke platform</p>
            </div>
          </div>
          
          {/* Platform Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {platforms.filter(platform => platform.value !== 'all').map((platform) => (
              <button
                key={platform.value}
                onClick={() => setSelectedPlatform(platform.value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedPlatform === platform.value 
                    ? 'bg-purple-600 border-purple-600' 
                    : 'bg-purple-800/30 border-purple-600/50 hover:bg-purple-800/50'
                }`}
              >
                <platform.icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{platform.label}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Filters and Products */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-semibold text-gray-900">Filters</h2>
                <Filter className="w-5 h-5 text-gray-600" />
              </div>

              {/* Platform Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Platform
                </label>
                <div className="space-y-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform.value}
                      onClick={() => setSelectedPlatform(platform.value)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedPlatform === platform.value
                          ? 'bg-purple-50 text-purple-700 border-purple-300'
                          : 'text-gray-700 hover:bg-gray-50'
                      } border`}
                    >
                      <platform.icon className="w-4 h-4" />
                      <span className="text-sm">{platform.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Categorie
                </label>
                <select 
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Links */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Populaire Producten</h3>
                <div className="space-y-2">
                  <Link href="/gaming?platform=playstation" className="block text-sm text-purple-600 hover:text-purple-700">
                    PlayStation 5 Accessoires
                  </Link>
                  <Link href="/gaming?platform=xbox" className="block text-sm text-purple-600 hover:text-purple-700">
                    Xbox Series X/S Gear
                  </Link>
                  <Link href="/gaming?category=controllers" className="block text-sm text-purple-600 hover:text-purple-700">
                    Gaming Controllers
                  </Link>
                  <Link href="/gaming?category=audio" className="block text-sm text-purple-600 hover:text-purple-700">
                    Gaming Headsets
                  </Link>
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
                    {filteredProducts.length} gaming producten gevonden
                  </span>
                </div>
                
                <div className="flex items-center gap-4">
                  {/* Search */}
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Zoek gaming gear..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    />
                  </div>
                  
                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <Gamepad2 className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen gaming producten gevonden</h3>
                <p className="text-gray-600 mb-4">
                  Probeer andere filters of zoektermen
                </p>
                <button 
                  onClick={() => {
                    setSelectedPlatform('all');
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className="text-purple-600 hover:text-purple-700 font-medium"
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
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
