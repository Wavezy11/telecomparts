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
  ChevronDown,
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
  model: string;
  colorVariants: string[];
  badge?: string;
  inStock: boolean;
  imageUrl: string;
  features: string[];
}

export default function SamsungPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [selectedModel, setSelectedModel] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const products: Product[] = [
    {
      id: '1',
      name: 'Samsung Galaxy S24 Ultra Case (Zwart)',
      price: 32.99,
      originalPrice: 42.99,
      rating: 4.8,
      reviewCount: 298,
      model: 'Galaxy S24 Ultra',
      colorVariants: ['zwart', 'blauw', 'violet'],
      badge: 'Bestseller',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Military grade protection', 'Precise cutouts', 'Shockproof']
    },
    {
      id: '2',
      name: 'Samsung Galaxy S24+ Leather Cover (Bruin)',
      price: 49.99,
      rating: 4.9,
      reviewCount: 167,
      model: 'Galaxy S24+',
      colorVariants: ['bruin', 'zwart', 'beige'],
      badge: 'Premium',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Echt leer', 'Samsung origineel', 'Card slot']
    },
    {
      id: '3',
      name: 'Samsung Galaxy S24 Clear View Cover',
      price: 39.99,
      rating: 4.7,
      reviewCount: 234,
      model: 'Galaxy S24',
      colorVariants: ['transparant', 'zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Smart view', 'LED notifications', 'Samsung origineel']
    },
    {
      id: '4',
      name: 'Samsung Galaxy Tab S9 Screen Protector',
      price: 22.99,
      originalPrice: 29.99,
      rating: 4.6,
      reviewCount: 145,
      model: 'Galaxy Tab S9',
      colorVariants: ['transparant'],
      badge: 'Sale',
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['9H hardness', 'Anti-fingerprint', 'Bubble free']
    },
    {
      id: '5',
      name: 'Samsung 45W Super Fast Charger',
      price: 34.99,
      rating: 4.9,
      reviewCount: 512,
      model: 'Universeel',
      colorVariants: ['wit', 'zwart'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['45W fast charging', 'USB-C', 'Samsung origineel']
    },
    {
      id: '6',
      name: 'Samsung Galaxy Buds2 Pro Case',
      price: 19.99,
      rating: 4.5,
      reviewCount: 89,
      model: 'Galaxy Buds2 Pro',
      colorVariants: ['zwart', 'wit', 'blauw'],
      inStock: false,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Silicone protection', 'Keychain included', 'Precise fit']
    },
    {
      id: '7',
      name: 'Samsung Galaxy Watch 6 Strap',
      price: 24.99,
      rating: 4.4,
      reviewCount: 76,
      model: 'Galaxy Watch 6',
      colorVariants: ['bruin', 'zwart', 'roze'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['Genuine leather', 'Quick release', 'Adjustable size']
    },
    {
      id: '8',
      name: 'Samsung Wireless Charging Pad',
      price: 29.99,
      rating: 4.7,
      reviewCount: 198,
      model: 'Universeel',
      colorVariants: ['wit'],
      inStock: true,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      features: ['10W fast charging', 'LED indicator', 'Qi compatible']
    },
  ];

  const models = [
    { value: 'all', label: 'Alle Modellen' },
    { value: 'Galaxy S24 Ultra', label: 'Galaxy S24 Ultra' },
    { value: 'Galaxy S24+', label: 'Galaxy S24+' },
    { value: 'Galaxy S24', label: 'Galaxy S24' },
    { value: 'Galaxy S23 Ultra', label: 'Galaxy S23 Ultra' },
    { value: 'Galaxy S23+', label: 'Galaxy S23+' },
    { value: 'Galaxy S23', label: 'Galaxy S23' },
    { value: 'Galaxy Tab S9', label: 'Galaxy Tab S9' },
    { value: 'Galaxy Buds2 Pro', label: 'Galaxy Buds2 Pro' },
    { value: 'Galaxy Watch 6', label: 'Galaxy Watch 6' },
    { value: 'Universeel', label: 'Universeel' },
  ];

  const filteredProducts = products.filter(product => {
    const matchesModel = selectedModel === 'all' || product.model === selectedModel;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesModel && matchesSearch;
  });

  const ProductCard = ({ product }: { product: Product }) => (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 lg:h-56 bg-gray-50 overflow-hidden">
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex gap-2">
          {product.badge && (
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          )}
          {product.originalPrice && (
            <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          )}
        </div>
        
        {/* Samsung Logo */}
        <div className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md">
          <span className="text-blue-600 font-bold text-xs">SAMSUNG</span>
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
        {/* Model */}
        <div className="text-xs text-blue-600 font-semibold mb-1">{product.model}</div>
        
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
            <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
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
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!product.inStock}>
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
              <span className="text-blue-600 font-bold text-lg">S</span>
            </div>
            <div>
              <h1 className="text-3xl lg:text-4xl font-bold">Samsung Galaxy</h1>
              <p className="text-blue-100 mt-2">Officiële Samsung accessoires en hoogwaardige hoesjes</p>
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold">80+</div>
              <div className="text-blue-100 text-sm">Galaxy Producten</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold">100%</div>
              <div className="text-blue-100 text-sm">Passgarantie</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold">24h</div>
              <div className="text-blue-100 text-sm">Levering</div>
            </div>
            <div className="text-center">
              <div className="text-2xl lg:text-3xl font-bold">4.7</div>
              <div className="text-blue-100 text-sm">Gem. Beoordeling</div>
            </div>
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

              {/* Model Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Galaxy Model
                </label>
                <select 
                  value={selectedModel}
                  onChange={(e) => setSelectedModel(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {models.map(model => (
                    <option key={model.value} value={model.value}>
                      {model.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quick Links */}
              <div className="border-t pt-6">
                <h3 className="font-semibold text-gray-900 mb-4">Populaire Categorieën</h3>
                <div className="space-y-2">
                  <Link href="/samsung?model=Galaxy+S24+Ultra" className="block text-sm text-blue-600 hover:text-blue-700">
                    Galaxy S24 Ultra Hoesjes
                  </Link>
                  <Link href="/samsung?model=Galaxy+S24" className="block text-sm text-blue-600 hover:text-blue-700">
                    Galaxy S24 Accessoires
                  </Link>
                  <Link href="/samsung?model=Galaxy+Tab+S9" className="block text-sm text-blue-600 hover:text-blue-700">
                    Galaxy Tab S9 Hoesjes
                  </Link>
                  <Link href="/samsung?model=Universeel" className="block text-sm text-blue-600 hover:text-blue-700">
                    Universele Opladers
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
                    {filteredProducts.length} producten gevonden
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
                      placeholder="Zoek Galaxy producten..."
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                    />
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

            {/* Products Grid */}
            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-gray-400 font-bold text-2xl">S</span>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Geen Galaxy producten gevonden</h3>
                <p className="text-gray-600 mb-4">
                  Probeer andere filters of zoektermen
                </p>
                <button 
                  onClick={() => {
                    setSelectedModel('all');
                    setSearchQuery('');
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
