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
  Zap,
  Battery,
  Wifi,
  Check,
  Truck
} from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  type: string;
  power?: string;
  brand: string;
  colorVariants: string[];
  badge?: string;
  inStock: boolean;
  imageUrl: string;
  features: string[];
}

export default function OpladersPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedPower, setSelectedPower] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Apple 20W USB-C Power Adapter',
      price: 24.99,
      rating: 4.8,
      reviewCount: 892,
      type: 'wall-charger',
      power: '20W',
      brand: 'Apple',
      colorVariants: ['wit'],
      badge: 'Bestseller',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Fast charging', 'USB-C', 'Apple origineel']
    },
    {
      id: '2',
      name: 'Anker 65W GaN Prime Charger',
      price: 44.99,
      originalPrice: 59.99,
      rating: 4.9,
      reviewCount: 567,
      type: 'wall-charger',
      power: '65W',
      brand: 'Anker',
      colorVariants: ['zwart', 'wit'],
      badge: 'Sale',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['GaN technology', '3 ports', 'Compact design']
    },
    {
      id: '3',
      name: 'Samsung 45W Super Fast Charger',
      price: 34.99,
      rating: 4.7,
      reviewCount: 445,
      type: 'wall-charger',
      power: '45W',
      brand: 'Samsung',
      colorVariants: ['zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Super Fast Charging 2.0', 'USB-C PD', 'Samsung origineel']
    },
    {
      id: '4',
      name: 'MagSafe 15W Wireless Charger',
      price: 39.99,
      rating: 4.6,
      reviewCount: 723,
      type: 'wireless',
      power: '15W',
      brand: 'Apple',
      colorVariants: ['wit'],
      badge: 'Populair',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['MagSafe compatible', '15W fast charging', 'Apple origineel']
    },
    {
      id: '5',
      name: 'Anker 637 MagSafe Charger Stand',
      price: 54.99,
      rating: 4.8,
      reviewCount: 234,
      type: 'wireless',
      power: '15W',
      brand: 'Anker',
      colorVariants: ['zwart', 'wit'],
      badge: 'Premium',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Adjustable stand', 'MagSafe', '15W charging']
    },
    {
      id: '6',
      name: 'Anker PowerCore 20000 Powerbank',
      price: 49.99,
      rating: 4.7,
      reviewCount: 892,
      type: 'powerbank',
      power: '20000mAh',
      brand: 'Anker',
      colorVariants: ['zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['20000mAh', 'PowerIQ 3.0', '22.5W output']
    },
    {
      id: '7',
      name: 'Belkin Boost Charge Pro 3-in-1',
      price: 89.99,
      rating: 4.5,
      reviewCount: 345,
      type: 'wireless',
      power: '15W',
      brand: 'Belkin',
      colorVariants: ['wit', 'zwart'],
      badge: 'Premium',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['3 devices', 'MagSafe', 'Apple Watch charging']
    },
    {
      id: '8',
      name: 'USB-C to Lightning Cable 2m',
      price: 19.99,
      rating: 4.4,
      reviewCount: 1234,
      type: 'cable',
      power: '20W',
      brand: 'Apple',
      colorVariants: ['wit'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['MFi certified', '2m length', 'Fast charging']
    },
    {
      id: '9',
      name: 'Samsung 25W Wireless Charger',
      price: 29.99,
      originalPrice: 39.99,
      rating: 4.6,
      reviewCount: 456,
      type: 'wireless',
      power: '25W',
      brand: 'Samsung',
      colorVariants: ['zwart'],
      badge: 'Sale',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Fast Wireless Charging 2.0', 'LED indicator', 'Fan cooling']
    },
    {
      id: '10',
      name: 'Car Charger 2-Port 30W',
      price: 22.99,
      rating: 4.3,
      reviewCount: 267,
      type: 'car-charger',
      power: '30W',
      brand: 'Anker',
      colorVariants: ['zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['30W total', '2 ports', 'PIQ 3.0']
    },
  ];

  const types = [
    { value: 'all', label: 'Alle Types', icon: Zap },
    { value: 'wall-charger', label: 'Wandladers', icon: Zap },
    { value: 'wireless', label: 'Draadloos', icon: Wifi },
    { value: 'powerbank', label: 'Powerbanks', icon: Battery },
    { value: 'car-charger', label: 'Auto Laders', icon: Truck },
    { value: 'cable', label: 'Kabels', icon: Zap },
  ];

  const powerLevels = [
    { value: 'all', label: 'Alle Vermogens' },
    { value: '5W', label: '5W' },
    { value: '10W', label: '10W' },
    { value: '15W', label: '15W' },
    { value: '20W', label: '20W' },
    { value: '25W', label: '25W' },
    { value: '45W', label: '45W' },
    { value: '65W', label: '65W' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesType = selectedType === 'all' || product.type === selectedType;
    const matchesPower = selectedPower === 'all' || product.power === selectedPower;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesPower && matchesSearch;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-green-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 lg:h-56 bg-gray-50 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.badge && (
            <span className="inline-block bg-green-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        
        {/* Type Icon */}
        <div className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md">
          {types.find(type => type.value === product.type)?.icon && 
            React.createElement(types.find(type => type.value === product.type)!.icon, { className: "w-4 h-4 text-green-600" })
          }
        </div>
        
        {/* Power Badge */}
        {product.power && (
          <div className="absolute bottom-3 left-3 z-10">
            <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded">
              {product.power}
            </span>
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
        {/* Brand & Type */}
        <div className="flex items-center justify-between mb-1">
          <span className="text-xs text-gray-500 uppercase tracking-wider">{product.brand}</span>
          <span className="text-xs text-green-600 font-semibold capitalize">{product.type}</span>
        </div>
        
        {/* Title */}
        <Link href={`/products/${product.id}`}>
          <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-green-600 transition-colors cursor-pointer">
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
            <span key={idx} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
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
        <button className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>
          <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>{product.inStock ? 'In Winkelwagen' : 'Niet Beschikbaar'}</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Opladers & Power</h1>
              <p className="text-green-100 mt-2">Snelle opladers, powerbanks en draadloze oplossingen</p>
            </div>
          </div>
          
          {/* Type Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
            {types.filter(type => type.value !== 'all').map((type) => (
              <button
                key={type.value}
                onClick={() => setSelectedType(type.value)}
                className={`p-4 rounded-xl border-2 transition-all ${
                  selectedType === type.value 
                    ? 'bg-white border-white' 
                    : 'bg-green-700/30 border-green-500/50 hover:bg-green-700/50'
                }`}
              >
                <type.icon className="w-6 h-6 mx-auto mb-2" />
                <div className="text-sm font-medium">{type.label}</div>
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

              {/* Type Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Type
                </label>
                <div className="space-y-2">
                  {types.map((type) => (
                    <button
                      key={type.value}
                      onClick={() => setSelectedType(type.value)}
                      className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        selectedType === type.value
                          ? 'bg-green-50 text-green-700 border-green-300'
                          : 'text-gray-700 hover:bg-gray-50'
                      } border`}
                    >
                      <type.icon className="w-4 h-4" />
                      <span className="text-sm">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Power Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Vermogen
                </label>
                <select 
                  value={selectedPower}
                  onChange={(e) => setSelectedPower(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {powerLevels.map(power => (
                    <option key={power.value} value={power.value}>
                      {power.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Links */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Populaire Producten</h3>
                <div className="space-y-2">
                  <Link href="/opladers?type=wireless" className="block text-sm text-green-600 hover:text-green-700">
                    Draadloze Opladers
                  </Link>
                  <Link href="/opladers?type=powerbank" className="block text-sm text-green-600 hover:text-green-700">
                    Powerbanks
                  </Link>
                  <Link href="/opladers?power=65W" className="block text-sm text-green-600 hover:text-green-700">
                    65W Snelladers
                  </Link>
                  <Link href="/opladers?brand=Apple" className="block text-sm text-green-600 hover:text-green-700">
                    Apple Opladers
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
                    {filteredProducts.length} oplaadproducten gevonden
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
                      placeholder="Zoek opladers..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 text-sm"
                    />
                  </div>
                  
                  {/* View Mode */}
                  <div className="flex border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-100'} transition-colors`}
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
                <Zap className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen oplaadproducten gevonden</h3>
                <p className="text-gray-600 mb-4">
                  Probeer andere filters of zoektermen
                </p>
                <button 
                  onClick={() => {
                    setSelectedType('all');
                    setSelectedPower('all');
                    setSearchQuery('');
                  }}
                  className="text-green-600 hover:text-green-700 font-medium"
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
