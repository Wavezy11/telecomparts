'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Plus, 
  Minus, 
  Trash2, 
  ArrowLeft, 
  Truck, 
  Shield,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface CartItem {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  quantity: number;
  color: string;
  imageUrl: string;
  inStock: boolean;
}

export default function CartPage() {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: '1',
      name: 'Apple iPhone 16 MagSafe Hoesje (Transparant)',
      price: 29.99,
      quantity: 1,
      color: 'Transparant',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      inStock: true,
    },
    {
      id: '2',
      name: 'Apple iPhone 17 MagSafe Hoesje (Zwart)',
      price: 32.99,
      originalPrice: 39.99,
      quantity: 2,
      color: 'Zwart',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      inStock: true,
    },
    {
      id: '3',
      name: 'Magnetic Battery Pack 15W 5000mAh (Wit)',
      price: 49.95,
      originalPrice: 59.95,
      quantity: 1,
      color: 'Wit',
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80',
      inStock: true,
    },
  ]);

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);
  const shipping = subtotal >= 20 ? 0 : 4.95;
  const total = subtotal - discount + shipping;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span>Verder winkelen</span>
            </Link>
            
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-6 h-6 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Winkelwagen</h1>
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full text-sm font-semibold">
                {cartItems.length}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center">
                <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Je winkelwagen is leeg</h2>
                <p className="text-gray-600 mb-6">Voeg producten toe om te beginnen met winkelen</p>
                <Link 
                  href="/"
                  className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  <span>Verder winkelen</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex gap-4">
                    {/* Product Image */}
                    <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0">
                      <Image
                        src={item.imageUrl}
                        alt={item.name}
                        fill
                        className="object-cover rounded-lg"
                      />
                      {item.originalPrice && (
                        <div className="absolute top-2 left-2">
                          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                            SALE
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Product Details */}
                    <div className="flex-1">
                      <div className="flex justify-between mb-2">
                        <h3 className="font-semibold text-gray-900 text-sm lg:text-base line-clamp-2">
                          {item.name}
                        </h3>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-gray-400 hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <p className="text-sm text-gray-600 mb-3">Kleur: {item.color}</p>
                      
                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-gray-600">Aantal:</span>
                          <div className="flex items-center border border-gray-300 rounded-lg">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="w-4 h-4" />
                            </button>
                            <span className="px-3 py-1 font-medium min-w-[40px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-2 hover:bg-gray-100 transition-colors"
                            >
                              <Plus className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <div className="flex items-center gap-2">
                            <span className="text-lg font-bold text-gray-900">
                              €{(item.price * item.quantity).toFixed(2)}
                            </span>
                            {item.originalPrice && (
                              <span className="text-sm text-gray-400 line-through">
                                €{(item.originalPrice * item.quantity).toFixed(2)}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-600">
                            €{item.price.toFixed(2)} per stuk
                          </span>
                        </div>
                      </div>

                      {/* Stock Status */}
                      {item.inStock ? (
                        <p className="text-sm text-green-600 mt-2 flex items-center gap-1">
                          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                          Op voorraad - morgen in huis
                        </p>
                      ) : (
                        <p className="text-sm text-red-600 mt-2 flex items-center gap-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                          Niet op voorraad
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <h2 className="text-lg font-bold text-gray-900 mb-6">Besteloverzicht</h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotaal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} producten)</span>
                  <span className="font-medium">€{subtotal.toFixed(2)}</span>
                </div>
                
                {discount > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-green-600">Korting</span>
                    <span className="font-medium text-green-600">-€{discount.toFixed(2)}</span>
                  </div>
                )}
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Verzending</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600">Gratis</span>
                    ) : (
                      `€${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="border-t pt-3">
                  <div className="flex justify-between">
                    <span className="font-bold text-gray-900">Totaal</span>
                    <span className="font-bold text-xl text-gray-900">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              {/* Shipping Info */}
              <div className="bg-blue-50 rounded-lg p-4 mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-blue-600" />
                  <span className="font-semibold text-blue-900 text-sm">Gratis verzending</span>
                </div>
                <p className="text-xs text-blue-700">
                  Bestel voor €20 of meer en verzending is gratis
                </p>
                {subtotal < 20 && (
                  <p className="text-xs text-blue-700 mt-1">
                    Nog €{(20 - subtotal).toFixed(2)} tot gratis verzending
                  </p>
                )}
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-2 mb-6">
                <Shield className="w-4 h-4 text-green-600" />
                <span className="text-xs text-gray-600">Veilig betalen met iDEAL, PayPal, Creditcard</span>
              </div>

              {/* Checkout Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2 mb-3">
                <span>Afrekenen</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <Link 
                href="/"
                className="block w-full text-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Verder winkelen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
