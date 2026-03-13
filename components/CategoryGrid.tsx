'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  badge?: string;
}

export default function CategoryGrid() {
  const categories: Category[] = [
    {
      id: '1',
      name: 'iPhone Hoesjes',
      description: 'Premium bescherming voor Apple',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      badge: 'Bestseller'
    },
    {
      id: '2',
      name: 'Samsung Hoesjes',
      description: 'Perfecte pasvorm Galaxy series',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '3',
      name: 'Opladers',
      description: 'Snelladers & kabels',
      imageUrl: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80',
      badge: 'Nieuw'
    },
    {
      id: '4',
      name: 'Screenprotectors',
      description: 'Gehard glas & folie',
      imageUrl: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '5',
      name: 'Audio',
      description: 'Oordopjes & speakers',
      imageUrl: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: '6',
      name: 'Kabels',
      description: 'USB-C, Lightning & meer',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Populaire Categorieën
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Alles wat je nodig hebt voor je smartphone. Van bescherming tot opladen, 
            vind het hier in één overzicht.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 lg:gap-6">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group cursor-pointer transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-50 border border-gray-200 group-hover:border-blue-300 group-hover:shadow-lg transition-all duration-300">
                {/* Badge */}
                {category.badge && (
                  <div className="absolute top-3 left-3 z-10">
                    <span className="inline-block bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                      {category.badge}
                    </span>
                  </div>
                )}
                
                {/* Afbeelding container */}
                <div className="relative h-32 lg:h-40 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-100/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                {/* Content */}
                <div className="p-4 lg:p-5">
                  <h3 className="font-semibold text-gray-900 text-sm lg:text-base mb-1 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-xs lg:text-sm text-gray-600 mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 text-xs lg:text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Bekijk</span>
                    <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
