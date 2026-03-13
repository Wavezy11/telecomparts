'use client';

import { ShoppingCart, Star, Heart } from 'lucide-react';
import Image from 'next/image';

type Product = {
  id: string;
  name: string;
  price: number;
  icon: string;
  colorVariants: string[];
  isSale?: boolean;
  originalPrice?: number;
  rating?: number;
  reviewCount?: number;
  badge?: string;
};

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const rating = product.rating || 4.5;
  const reviewCount = product.reviewCount || Math.floor(Math.random() * 200) + 50;
  
  return (
    <div className="group bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Product Image Container */}
      <div className="relative h-48 lg:h-56 bg-gray-50 overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              {product.badge}
            </span>
          </div>
        )}
        
        {/* Sale Badge */}
        {product.isSale && (
          <div className="absolute top-3 right-3 z-10">
            <span className="inline-block bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              SALE
            </span>
          </div>
        )}
        
        {/* Heart/Favorite Button */}
        <button className="absolute top-3 right-3 z-10 p-2 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow opacity-0 group-hover:opacity-100">
          <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
        </button>
        
        {/* Product Image */}
        <div className="relative w-full h-full">
          <Image
            src={`https://images.unsplash.com/photo-${product.id === '1' ? '1511707171634-5f897ff02aa9' : 
                      product.id === '2' ? '1519125323398-675f0ddb6308' : 
                      product.id === '3' ? '1465101046530-73398c7f28ca' : 
                      product.id === '4' ? '1588628344517-7c9883849b1b' : 
                      '1598678358796-5d1313f4d4b7'}?auto=format&fit=crop&w=400&q=80`}
            alt={product.name}
            fill
            className="object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>
      
      {/* Product Info */}
      <div className="p-4 lg:p-5">
        {/* Title */}
        <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-gray-600">
            ({reviewCount})
          </span>
        </div>
        
        {/* Color Variants */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs text-gray-500">Kleuren:</span>
          <div className="flex gap-1">
            {product.colorVariants.slice(0, 3).map((color, idx) => (
              <span
                key={idx}
                className={
                  color === 'white'
                    ? 'w-3 h-3 rounded-full bg-white border border-gray-300'
                    : color === 'bg-gray-900' || color === 'bg-slate-800'
                    ? 'w-3 h-3 rounded-full bg-gray-900 border border-gray-700'
                    : color === 'bg-slate-300'
                    ? 'w-3 h-3 rounded-full bg-gray-300 border border-gray-400'
                    : color === 'bg-teal-400'
                    ? 'w-3 h-3 rounded-full bg-teal-400 border border-teal-500'
                    : `w-3 h-3 rounded-full ${color}`
                }
              />
            ))}
            {product.colorVariants.length > 3 && (
              <span className="text-xs text-gray-500">+{product.colorVariants.length - 3}</span>
            )}
          </div>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xl lg:text-2xl font-bold text-gray-900">
            €{product.price.toFixed(2)}
          </span>
          {product.isSale && product.originalPrice && (
            <span className="text-sm lg:text-base text-gray-400 line-through">
              €{product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>
        
        {/* Add to Cart Button */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold text-sm lg:text-base shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-200 flex items-center justify-center gap-2">
          <ShoppingCart className="w-4 h-4 lg:w-5 lg:h-5" />
          <span>In Winkelwagen</span>
        </button>
      </div>
    </div>
  );
}

