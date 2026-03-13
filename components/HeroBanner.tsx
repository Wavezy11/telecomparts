'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function HeroBanner() {
  return (
    <section className="relative bg-gray-50 py-8 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* CSS Grid Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Grote banner links (65% breedte) */}
          <div className="lg:col-span-2 relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 shadow-xl">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-black/40"></div>
              <Image
                src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80"
                alt="Smartphone accessoires"
                fill
                className="object-cover"
              />
            </div>
            
            <div className="relative z-10 p-8 lg:p-12 text-white">
              <div className="inline-flex items-center gap-2 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <span>Lente Deals</span>
                <ArrowRight className="w-4 h-4" />
              </div>
              
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 leading-tight">
                Beschermd en Stijlvol: De Beste Smartphone Accessoires
              </h1>
              
              <p className="text-lg lg:text-xl text-blue-100 mb-8 max-w-xl">
                Tot 30% korting op premium hoesjes, screenprotectors en opladers. 
                Snelle levering, 100% passgarantie.
              </p>
              
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-3">
                <span>Shop Nu</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Twee kleinere banners rechts (35% breedte) */}
          <div className="space-y-6 lg:space-y-8">
            {/* Banner 1: MagSafe korting */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
                  alt="MagSafe accessoires"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="relative z-10 p-6 lg:p-8 text-white">
                <div className="inline-block bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  -20% KORTING
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-3">
                  MagSafe Accessoires
                </h3>
                
                <p className="text-gray-300 text-sm mb-4">
                  Compatibele opladers en hoesjes
                </p>
                
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                  Bekijk Deal
                </button>
              </div>
            </div>

            {/* Banner 2: Screenprotectors */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600 to-teal-700 shadow-xl">
              <div className="absolute inset-0 opacity-30">
                <Image
                  src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=600&q=80"
                  alt="Screenprotectors"
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="relative z-10 p-6 lg:p-8 text-white">
                <div className="inline-block bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
                  NIEUW
                </div>
                
                <h3 className="text-xl lg:text-2xl font-bold mb-3">
                  Screenprotectors
                </h3>
                
                <p className="text-teal-100 text-sm mb-4">
                  9H hardness & anti-fingerprint
                </p>
                
                <button className="bg-white hover:bg-gray-100 text-gray-900 px-4 py-2 rounded-lg font-semibold text-sm transition-colors">
                  Ontdek Nu
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
