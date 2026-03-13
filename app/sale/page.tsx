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
  Tag,
  Clock,
  Check,
  TrendingUp
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  rating: number;
  reviewCount: number;
  category: string;
  brand: string;
  badge?: string;
  inStock: boolean;
  imageUrl: string;
  features: string[];
  endsIn?: string;
}

export default function SalePage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDiscount, setSelectedDiscount] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Apple iPhone 16 Pro Max MagSafe Hoesje (Transparant)',
      price: 24.99,
      originalPrice: 44.99,
      discount: 44,
      rating: 4.9,
      reviewCount: 312,
      category: 'apple',
      brand: 'Apple',
      badge: 'Hot Deal',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['MagSafe compatibel', '100% passgarantie', 'Premium materiaal'],
      endsIn: '2 dagen'
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24 Ultra Case (Zwart)',
      price: 19.99,
      originalPrice: 42.99,
      discount: 53,
      rating: 4.8,
      reviewCount: 298,
      category: 'samsung',
      brand: 'Samsung',
      badge: 'Limited',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Military grade protection', 'Precise cutouts', 'Shockproof'],
      endsIn: '1 dag'
    },
    {
      id: '3',
      name: 'Anker 65W GaN Prime Charger',
      price: 29.99,
      originalPrice: 59.99,
      discount: 50,
      rating: 4.9,
      reviewCount: 567,
      category: 'opladers',
      brand: 'Anker',
      badge: 'Flash Sale',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['GaN technology', '3 ports', 'Compact design'],
      endsIn: '6 uur'
    },
    {
      id: '4',
      name: 'JBL Tune 760NC Wireless Headphones',
      price: 49.99,
      originalPrice: 119.99,
      discount: 58,
      rating: 4.6,
      reviewCount: 456,
      category: 'audio',
      brand: 'JBL',
      badge: 'Bestseller',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=400&q=80',
      features: ['Active Noise Cancelling', '40hr battery', 'Bluetooth 5.0'],
      endsIn: '3 dagen'
    },
    {
      id: '5',
      name: 'MagSafe 15W Wireless Charger',
      price: 24.99,
      originalPrice: 39.99,
      discount: 38,
      rating: 4.6,
      reviewCount: 723,
      category: 'opladers',
      brand: 'Apple',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['MagSafe compatible', '15W fast charging', 'Apple origineel'],
      endsIn: '2 dagen'
    },
    {
      id: '6',
      name: 'Sony WH-1000XM5 Headphones',
      price: 279.99,
      originalPrice: 429.99,
      discount: 35,
      rating: 4.9,
      reviewCount: 789,
      category: 'audio',
      brand: 'Sony',
      badge: 'Premium Deal',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=400&q=80',
      features: ['Industry leading ANC', '30hr battery', 'Multipoint connection'],
      endsIn: '1 dag'
    },
    {
      id: '7',
      name: 'Anker PowerCore 20000 Powerbank',
      price: 29.99,
      originalPrice: 49.99,
      discount: 40,
      rating: 4.7,
      reviewCount: 892,
      category: 'opladers',
      brand: 'Anker',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['20000mAh', 'PowerIQ 3.0', '22.5W output'],
      endsIn: '4 dagen'
    },
    {
      id: '8',
      name: 'Logitech MX Master 3S Mouse',
      price: 69.99,
      originalPrice: 99.99,
      discount: 30,
      rating: 4.8,
      reviewCount: 567,
      category: 'accessoires',
      brand: 'Logitech',
      badge: 'Professional',
      inStock: false,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Silent clicks', '70 days battery', 'Custom buttons'],
      endsIn: '12 uur'
    },
    {
      id: '9',
      name: 'Samsung 45W Super Fast Charger',
      price: 19.99,
      originalPrice: 34.99,
      discount: 43,
      rating: 4.7,
      reviewCount: 445,
      category: 'opladers',
      brand: 'Samsung',
      badge: 'Clearance',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Super Fast Charging 2.0', 'USB-C PD', 'Samsung origineel'],
      endsIn: '8 uur'
    },
    {
      id: '10',
      name: 'Ring Stick Up Cam Battery',
      price: 59.99,
      originalPrice: 99.99,
      discount: 40,
      rating: 4.5,
      reviewCount: 234,
      category: 'smart-home',
      brand: 'Ring',
      badge: 'Smart Deal',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['1080p HD video', 'Two-way talk', 'Motion detection'],
      endsIn: '2 dagen'
    },
  ];

  const categories = [
    { value: 'all', label: 'Alle Categorieën' },
    { value: 'apple', label: 'Apple' },
    { value: 'samsung', label: 'Samsung' },
    { value: 'opladers', label: 'Opladers' },
    { value: 'audio', label: 'Audio' },
    { value: 'accessoires', label: 'Accessoires' },
    { value: 'smart-home', label: 'Smart Home' },
  ];

  const discountLevels = [
    { value: 'all', label: 'Alle Kortingen' },
    { value: '20', label: '20% - 30%' },
    { value: '30', label: '30% - 40%' },
    { value: '40', label: '40% - 50%' },
    { value: '50', label: '50%+' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesDiscount = selectedDiscount === 'all' || 
      (selectedDiscount === '20' && product.discount >= 20 && product.discount < 30) ||
      (selectedDiscount === '30' && product.discount >= 30 && product.discount < 40) ||
      (selectedDiscount === '40' && product.discount >= 40 && product.discount < 50) ||
      (selectedDiscount === '50' && product.discount >= 50);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesDiscount && matchesSearch;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-red-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 lg:h-56 bg-gray-50 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          <span className="inline-block bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            -{product.discount}%
          </span>
          {product.badge && (
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
        </div>
        
        {/* Timer */}
        {product.endsIn && (
          <div className="absolute top-3 right-3 z-10 bg-red-50 text-red-700 px-2 py-1 rounded-lg text-xs font-semibold flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {product.endsIn}
          </div>
        )}
        
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
          <span className="text-xs text-red-600 font-semibold capitalize">{product.category}</span>
        </div>
        
        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-red-600 transition-colors cursor-pointer">
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
            <span key={idx} className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded">
              {feature}
            </span>
          ))}
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl lg:text-2xl font-bold text-red-600">
            €{product.price.toFixed(2)}
          </span>
          <span className="text-sm lg:text-base text-gray-400 line-through">
            €{product.originalPrice.toFixed(2)}
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded font-semibold">
            Bespaar €{(product.originalPrice - product.price).toFixed(2)}
          </span>
        </div>
        
        {/* Stock Status */}
        <div className="mb-4">
          {product.inStock ? (
            <p className="text-sm text-green-600 flex items-center gap-1">
              <Check className="w-3 h-3" />
              Op voorraad
            </p>
          ) : (
            <p className="text-sm text-red-600">Bijna uitverkocht</p>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>
          <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>{product.inStock ? 'In Winkelwagen' : 'Uitverkocht'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Tag className="w-6 h-6 text-red-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">SALE</h1>
              <p className="text-red-100 mt-2">Tot 70% korting op geselecteerde producten</p>
            </div>
          </div>
          
          {/* Sale Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                <span>70%</span>
                <span className="text-lg">OFF</span>
              </div>
              <div className="text-red-100 text-sm">Maximale Korting</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold">150+</div>
              <div className="text-red-100 text-sm">Aanbiedingen</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                <Clock className="w-6 h-6" />
                <span>72h</span>
              </div>
              <div className="text-red-100 text-sm">Nog Beschikbaar</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold flex items-center justify-center gap-2">
                <span>4.8</span>
                <Star className="w-5 h-5 fill-current text-yellow-400" />
              </div>
              <div className="text-red-100 text-sm">Gem. Beoordeling</div>
            </div>
          </div>
        </div>
      </div>

      {/* Urgency Banner */}
      <div className="bg-orange-500 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-center gap-4">
            <TrendingUp className="w-5 h-5" />
            <span className="font-semibold">Flash Sale: Extra 10% korting met code FLASH10</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Nog 24 uur geldig</span>
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
                      className={`w-full px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedCategory === category.value
                          ? 'bg-red-50 text-red-700 border-red-300'
                          : 'text-gray-700 hover:bg-gray-50'
                      } border`}
                    >
                      <span className="text-sm">{category.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Discount Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Korting
                </label>
                <div className="space-y-2">
                  {discountLevels.map((discount) => (
                    <button
                      key={discount.value}
                      onClick={() => setSelectedDiscount(discount.value)}
                      className={`w-full px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedDiscount === discount.value
                          ? 'bg-red-50 text-red-700 border-red-300'
                          : 'text-gray-700 hover:bg-gray-50'
                      } border`}
                    >
                      <span className="text-sm">{discount.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Populaire Deals</h3>
                <div className="space-y-2">
                  <Link href="/sale?discount=50" className="block text-sm text-red-600 hover:text-red-700">
                    50%+ Korting
                  </Link>
                  <Link href="/sale?category=apple" className="block text-sm text-red-600 hover:text-red-700">
                    Apple Deals
                  </Link>
                  <Link href="/sale?category=opladers" className="block text-sm text-red-600 hover:text-red-700">
                    Oplader Sale
                  </Link>
                  <Link href="/sale?badge=Hot+Deal" className="block text-sm text-red-600 hover:text-red-700">
                    Hot Deals
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
                    {filteredProducts.length} aanbiedingen gevonden
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
                      placeholder="Zoek aanbiedingen..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 text-sm"
                    />
                  </div>
                  
                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-red-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
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
                <Tag className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen aanbiedingen gevonden</h3>
                <p className="text-gray-600 mb-4">
                  Probeer andere filters of zoektermen
                </p>
                <button 
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedDiscount('all');
                    setSearchQuery('');
                  }}
                  className="text-red-600 hover:text-red-700 font-medium"
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
