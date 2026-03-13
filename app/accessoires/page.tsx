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
  Headphones,
  Cable,
  Shield,
  Camera,
  Check
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
  features: string[];
}

export default function AccessoiresPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'AirPods Pro 2nd Generation',
      price: 279.99,
      rating: 4.9,
      reviewCount: 1247,
      category: 'audio',
      brand: 'Apple',
      colorVariants: ['wit'],
      badge: 'Bestseller',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=400&q=80',
      features: ['Active Noise Cancellation', 'Transparency mode', 'Spatial audio']
    },
    {
      id: '2',
      name: 'JBL Tune 760NC Wireless Headphones',
      price: 89.99,
      originalPrice: 119.99,
      rating: 4.6,
      reviewCount: 456,
      category: 'audio',
      brand: 'JBL',
      colorVariants: ['zwart', 'blauw', 'roze'],
      badge: 'Sale',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=400&q=80',
      features: ['Active Noise Cancelling', '40hr battery', 'Bluetooth 5.0']
    },
    {
      id: '3',
      name: 'Anker PowerCore 10000 Powerbank',
      price: 29.99,
      rating: 4.7,
      reviewCount: 892,
      category: 'power',
      brand: 'Anker',
      colorVariants: ['zwart', 'wit'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['10000mAh', 'PowerIQ 3.0', 'Compact design']
    },
    {
      id: '4',
      name: 'Ring Stick Up Cam Battery',
      price: 99.99,
      rating: 4.5,
      reviewCount: 234,
      category: 'smart-home',
      brand: 'Ring',
      colorVariants: ['wit'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['1080p HD video', 'Two-way talk', 'Motion detection']
    },
    {
      id: '5',
      name: 'Logitech MX Master 3S Mouse',
      price: 99.99,
      rating: 4.8,
      reviewCount: 567,
      category: 'computer',
      brand: 'Logitech',
      colorVariants: ['zwart', 'grijs'],
      badge: 'Premium',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Silent clicks', '70 days battery', 'Custom buttons']
    },
    {
      id: '6',
      name: 'USB-C to Lightning Cable 2m',
      price: 19.99,
      rating: 4.4,
      reviewCount: 1234,
      category: 'cables',
      brand: 'Apple',
      colorVariants: ['wit'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['MFi certified', '2m length', 'Fast charging']
    },
    {
      id: '7',
      name: 'Sony WH-1000XM5 Headphones',
      price: 379.99,
      originalPrice: 429.99,
      rating: 4.9,
      reviewCount: 789,
      category: 'audio',
      brand: 'Sony',
      colorVariants: ['zwart', 'zilver'],
      badge: 'Premium',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=400&q=80',
      features: ['Industry leading ANC', '30hr battery', 'Multipoint connection']
    },
    {
      id: '8',
      name: 'Tile Mate Bluetooth Tracker',
      price: 24.99,
      rating: 4.2,
      reviewCount: 345,
      category: 'trackers',
      brand: 'Tile',
      colorVariants: ['zwart', 'wit', 'blauw'],
      inStock: false,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['250ft range', 'Replaceable battery', 'Water resistant']
    },
  ];

  const categories = [
    { value: 'all', label: 'Alle Categorieën', icon: Grid },
    { value: 'audio', label: 'Audio & Oordopjes', icon: Headphones },
    { value: 'power', label: 'Powerbanks & Batterijen', icon: Cable },
    { value: 'cables', label: 'Kabels & Adapters', icon: Cable },
    { value: 'smart-home', label: 'Smart Home', icon: Shield },
    { value: 'computer', label: 'Computer Accessoires', icon: Camera },
    { value: 'trackers', label: 'Trackers & Locators', icon: Shield },
  ];

  const brands = [
    { value: 'all', label: 'Alle Merken' },
    { value: 'Apple', label: 'Apple' },
    { value: 'Samsung', label: 'Samsung' },
    { value: 'JBL', label: 'JBL' },
    { value: 'Sony', label: 'Sony' },
    { value: 'Anker', label: 'Anker' },
    { value: 'Logitech', label: 'Logitech' },
    { value: 'Ring', label: 'Ring' },
    { value: 'Tile', label: 'Tile' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 lg:h-56 bg-gray-50 overflow-hidden">
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
        
        {/* Category Icon */}
        <div className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md">
          {categories.find(cat => cat.value === product.category)?.icon && 
            React.createElement(categories.find(cat => cat.value === product.category)!.icon, { className: "w-4 h-4 text-gray-600" })
          }
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
        {/* Brand & Category */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-500 uppercase tracking-wider">{product.brand}</span>
          <span className="text-xs text-purple-600 font-semibold capitalize">{product.category}</span>
        </div>
        
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
      <Header />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Grid className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Accessoires</h1>
              <p className="text-purple-100 mt-2">Alles voor je smartphone, tablet en meer</p>
            </div>
          </div>
          
          {/* Category Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
            {categories.filter(cat => cat.value !== 'all').map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedCategory === category.value 
                    ? 'bg-white border-white' 
                    : 'bg-purple-700/30 border-purple-500/50 hover:bg-purple-700/50'
                }`}
              >
                <category.icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{category.label}</div>
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

              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Categorie
                </label>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => setSelectedCategory(category.value)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-purple-50 text-purple-700 border-purple-300'
                          : 'text-gray-700 hover:bg-gray-50'
                      } border`}
                    >
                      <category.icon className="w-4 h-4" />
                      <span className="text-sm">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Merk
                </label>
                <select 
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {brands.map(brand => (
                    <option key={brand.value} value={brand.value}>
                      {brand.label}
                    </option>
                  ))}
                </select>
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
                    {filteredProducts.length} accessoires gevonden
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
                      placeholder="Zoek accessoires..."
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
                <Grid className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen accessoires gevonden</h3>
                <p className="text-gray-600 mb-4">
                  Probeer andere filters of zoektermen
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedBrand('all');
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
      
      <Footer />
    </div>
  );
}
