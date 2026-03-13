'use client';

import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allNavItems = [
    { name: 'Home', href: '/', type: 'main' },
    { name: 'Apple', href: '/apple', type: 'category' },
    { name: 'Samsung', href: '/samsung', type: 'category' },
    { name: 'Accessoires', href: '/accessoires', type: 'category' },
    { name: 'Opladers', href: '/opladers', type: 'category' },
    { name: 'Gaming', href: '/gaming', type: 'category' },
    { name: 'Sale', href: '/sale', type: 'category' },
    { name: 'Bestsellers', href: '/products?sort=popular', type: 'main' },
    { name: 'Over Ons', href: '/over-ons', type: 'main' },
  ];

  return (
    <>
      {/* Top Bar - USPs */}
      <div className="bg-blue-600 text-white py-2 text-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-center">
            <span className="flex items-center gap-1">
              <span className="font-semibold">Voor 23:59 besteld, morgen in huis</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">Gratis verzending vanaf €20</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="flex items-center gap-1">
              <span className="font-semibold">Klantbeoordeling 9.3/10</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20 lg:h-24 gap-8">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link 
                href="/"
                className="text-2xl lg:text-3xl font-black bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-tight select-none hover:opacity-80 transition-opacity"
              >
                TELECOMPARTS
              </Link>
            </div>

            {/* Desktop Navigation - Combined */}
            <nav className="hidden lg:flex items-center gap-4">
              {allNavItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 font-medium transition-colors py-2 px-3 rounded-lg hover:bg-blue-50 ${
                    item.type === 'category' ? 'text-sm' : 'text-base'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Search - desktop */}
            <div className="hidden lg:flex flex-1 max-w-2xl mx-8">
              <div className="relative w-full">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Zoek op merk, toestel of product..."
                  className="w-full px-6 py-4 pl-14 pr-4 text-gray-900 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-base shadow-sm border border-gray-200"
                />
                <Search className="absolute left-5 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
              </div>
            </div>

            {/* Icons rechts */}
            <div className="flex items-center gap-4">
              <button className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
                <User className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Account</span>
              </button>
              <Link href="/cart" className="relative p-3 rounded-lg hover:bg-gray-100 transition-colors">
                <ShoppingCart className="w-6 h-6 text-gray-700" />
                <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center shadow-md">
                  2
                </span>
              </Link>
              <button 
                className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
              </button>
            </div>
          </div>

          {/* Search - mobiel */}
          <div className="lg:hidden pb-4">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Zoek op merk, toestel of product..."
                className="w-full px-5 py-3.5 pl-12 pr-4 text-gray-900 bg-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-300 text-base shadow-sm border border-gray-200"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500 w-5 h-5" />
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-100 py-4">
              <ul className="flex flex-col gap-2">
                {allNavItems.map((item) => (
                  <li key={item.name}>
                    <Link 
                      href={item.href}
                      className={`block w-full text-left text-gray-700 hover:text-blue-600 font-medium transition-colors py-3 px-4 rounded-lg hover:bg-blue-50 ${
                        item.type === 'category' ? 'text-sm' : 'text-base'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </header>
    </>
  );
}