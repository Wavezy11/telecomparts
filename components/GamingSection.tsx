'use client';

import Image from 'next/image';
import { Gamepad2, ArrowRight } from 'lucide-react';

export default function GamingSection() {
  const gamingCategories = [
    {
      id: '1',
      name: 'PlayStation',
      description: 'Accessoires voor PS4 & PS5',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      badge: 'Populair',
      features: ['Controllers', 'Headsets', 'Opladers']
    },
    {
      id: '2',
      name: 'Nintendo Switch',
      description: 'Cases & bescherming',
      imageUrl: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?auto=format&fit=crop&w=600&q=80',
      badge: 'Nieuw',
      features: ['Screenprotectors', 'Carrying Cases', 'Stands']
    },
    {
      id: '3',
      name: 'Xbox',
      description: 'Controllers & meer',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80',
      features: ['Elite Controllers', 'Charging Stations', 'Headsets']
    },
  ];

  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Gamepad2 className="w-8 h-8 text-blue-400" />
            <h2 className="text-3xl lg:text-4xl font-bold">Gaming Gear</h2>
          </div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Professionele gaming accessoires voor PlayStation, Nintendo en Xbox. 
            Upgrade je setup met de beste gear.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {gamingCategories.map((category) => (
            <div
              key={category.id}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-700 hover:border-blue-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Badge */}
              {category.badge && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-block bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {category.badge}
                  </span>
                </div>
              )}
              
              {/* Image Container */}
              <div className="relative h-48 lg:h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-60"></div>
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 lg:p-8 flex flex-col flex-grow">
                <h3 className="text-xl lg:text-2xl font-bold mb-2 group-hover:text-blue-400 transition-colors">
                  {category.name}
                </h3>
                <p className="text-gray-400 mb-4 text-sm lg:text-base">
                  {category.description}
                </p>
                
                {/* Features */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {category.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-gray-700/50 text-gray-300 px-2 py-1 rounded-lg border border-gray-600"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Button */}
                <button className="w-full bg-blue-600 hover:bg-blue-500 text-white py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-blue-500 transform hover:scale-105">
                  <span>Bekijk producten</span>
                  <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-gray-400 mb-4">
            Meer dan 500+ gaming accessoires op voorraad
          </p>
          <button className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-xl font-semibold transition-all duration-200 inline-flex items-center gap-2">
            <span>Bekijk alle gaming producten</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
