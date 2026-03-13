'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  ShoppingCart, 
  Star, 
  Heart, 
  Truck, 
  Shield, 
  ChevronLeft,
  Plus,
  Minus,
  Check,
  X,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

interface ProductImage {
  url: string;
  alt: string;
}

interface ProductVariant {
  id: string;
  name: string;
  color: string;
  colorCode: string;
  inStock: boolean;
  price?: number;
}

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  category: string;
  brand: string;
  description: string;
  features: string[];
  images: ProductImage[];
  variants: ProductVariant[];
  inStock: boolean;
  sku: string;
}

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  // Mock product data
  const product: Product = {
    id: params.id,
    name: 'Apple iPhone 16 MagSafe Hoesje',
    price: 29.99,
    originalPrice: 39.99,
    rating: 4.8,
    reviewCount: 234,
    category: 'hoesjes',
    brand: 'Apple',
    description: 'Bescherm je iPhone 16 in stijl met dit officiële MagSafe hoesje. Gemaakt van hoogwaardig materiaal dat perfect om je toestel past en compatibel is met MagSafe accessoires. Het hoesje biedt uitstekende bescherming tegen vallen en krassen zonder de elegantie van je iPhone te compromitteren.',
    features: [
      'Officieel Apple MagSafe compatibel',
      'Perfecte pasvorm voor iPhone 16',
      'Dun en lichtgewicht ontwerp',
      'Verhoogde randen voor scherm- en camerabescherming',
      'Ondersteunt draadloos opladen',
      'Knopen en poorten blijven volledig toegankelijk'
    ],
    images: [
      { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', alt: 'iPhone 16 MagSafe Hoesje - Voorzijde' },
      { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', alt: 'iPhone 16 MagSafe Hoesje - Zijkant' },
      { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', alt: 'iPhone 16 MagSafe Hoesje - Achterzijde' },
      { url: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80', alt: 'iPhone 16 MagSafe Hoesje - Detail' },
    ],
    variants: [
      { id: '1', name: 'Transparant', color: 'Transparant', colorCode: 'bg-gray-100', inStock: true },
      { id: '2', name: 'Zwart', color: 'Zwart', colorCode: 'bg-gray-900', inStock: true },
      { id: '3', name: 'Blauw', color: 'Blauw', colorCode: 'bg-blue-500', inStock: true },
      { id: '4', name: 'Rood', color: 'Rood', colorCode: 'bg-red-500', inStock: false },
    ],
    inStock: true,
    sku: 'APL-IP16-MSC-001'
  };

  const currentVariant = product.variants[selectedVariant];
  const currentPrice = currentVariant.price || product.price;
  const currentOriginalPrice = product.originalPrice;

  const handleAddToCart = () => {
    setShowAddedToCart(true);
    setTimeout(() => setShowAddedToCart(false), 3000);
  };

  const updateQuantity = (newQuantity: number) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-900 transition-colors">Producten</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-xl overflow-hidden">
              <Image
                src={product.images[selectedImage].url}
                alt={product.images[selectedImage].alt}
                fill
                className="object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {currentOriginalPrice && (
                  <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    SALE
                  </span>
                )}
                <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  Bestseller
                </span>
              </div>

              {/* Favorite Button */}
              <button className="absolute top-4 right-4 p-3 bg-white rounded-full shadow-lg hover:shadow-xl transition-shadow">
                <Heart className="w-5 h-5 text-gray-600 hover:text-red-500 transition-colors" />
              </button>
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative aspect-square bg-white rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h1>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span className="capitalize">{product.category}</span>
                    <span>•</span>
                    <span>{product.brand}</span>
                    <span>•</span>
                    <span>SKU: {product.sku}</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) 
                          ? 'text-yellow-400 fill-current' 
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-semibold text-gray-900">{product.rating}</span>
                <span className="text-gray-600">({product.reviewCount} reviews)</span>
                <Link href="#reviews" className="text-blue-600 hover:text-blue-700 font-medium">
                  Bekijk reviews
                </Link>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl font-bold text-gray-900">
                  €{currentPrice.toFixed(2)}
                </span>
                {currentOriginalPrice && (
                  <span className="text-xl text-gray-400 line-through">
                    €{currentOriginalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              {currentOriginalPrice && (
                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-sm font-bold">
                  Bespaar €{(currentOriginalPrice - currentPrice).toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Beschrijving</h3>
              <p className="text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Kenmerken</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Color Variants */}
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Kleur</h3>
              <div className="flex flex-wrap gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(index)}
                    disabled={!variant.inStock}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-all ${
                      selectedVariant === index
                        ? 'border-blue-600 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    } ${!variant.inStock ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <div className={`w-6 h-6 rounded-full border-2 border-gray-300 ${variant.colorCode}`} />
                    <span className="font-medium text-gray-900">{variant.name}</span>
                    {!variant.inStock && (
                      <span className="text-red-500 text-sm">Niet op voorraad</span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-gray-900">Aantal:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(quantity - 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                    disabled={quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-4 py-3 font-medium min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => updateQuantity(quantity + 1)}
                    className="p-3 hover:bg-gray-100 transition-colors"
                    disabled={quantity >= 10}
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!currentVariant.inStock}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-4 rounded-xl font-semibold transition-colors flex items-center justify-center gap-3 disabled:cursor-not-allowed"
                >
                  <ShoppingCart className="w-5 h-5" />
                  <span>{currentVariant.inStock ? 'In Winkelwagen' : 'Niet Beschikbaar'}</span>
                </button>
                
                <button className="px-6 py-4 border border-gray-300 rounded-xl font-semibold hover:bg-gray-50 transition-colors">
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Added to Cart Notification */}
              {showAddedToCart && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-600" />
                  <span className="text-green-800 font-medium">
                    {quantity}x {product.name} toegevoegd aan winkelwagen
                  </span>
                </div>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <Truck className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Voor 23:59 besteld</p>
                  <p className="text-gray-600 text-xs">Morgen in huis</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">100% Passgarantie</p>
                  <p className="text-gray-600 text-xs">Niet tevreden? Geld terug</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Check className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Officieel Product</p>
                  <p className="text-gray-600 text-xs">100% Echte merkproducten</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-sm">
          <div className="border-b border-gray-200 mb-8">
            <nav className="flex gap-8">
              <button className="pb-4 border-b-2 border-blue-600 font-semibold text-blue-600">
                Beschrijving
              </button>
              <button className="pb-4 border-b-2 border-transparent font-semibold text-gray-600 hover:text-gray-900">
                Specificaties
              </button>
              <button id="reviews" className="pb-4 border-b-2 border-transparent font-semibold text-gray-600 hover:text-gray-900">
                Reviews ({product.reviewCount})
              </button>
              <button className="pb-4 border-b-2 border-transparent font-semibold text-gray-600 hover:text-gray-900">
                Verzending & Retour
              </button>
            </nav>
          </div>

          <div className="prose prose-gray max-w-none">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Uitgebreide Beschrijving</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              {product.description}
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dit MagSafe hoesje is speciaal ontworpen voor de iPhone 16 en biedt de perfecte balans tussen bescherming en functionaliteit. Dankzij de ingebouwde MagSafe magneten werkt het naadloos samen met alle MagSafe accessoires, zoals opladers, holders en wallets.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Materiaal en Duurzaamheid</h4>
            <p className="text-gray-600 leading-relaxed mb-4">
              Gemaakt van hoogwaardig polycarbonaat en thermoplastisch polyurethaan (TPU) die samenwerken om optimale bescherming te bieden tegen dagelijkse valpartijen en krassen. Het materiaal is bestand tegen vergeling en behoudt zijn kleur en transparantie gedurende de gehele levensduur van je toestel.
            </p>
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Installatie en Gebruik</h4>
            <p className="text-gray-600 leading-relaxed">
              Het hoesje is eenvoudig te installeren en te verwijderen zonder gereedschap. Alle knoppen, poorten en camera's blijven volledig toegankelijk en behouden hun volledige functionaliteit. Het dunne ontwerp voegt minimale bulk toe aan je toestel.
            </p>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Gerelateerde Producten</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Mock related products */}
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-white rounded-xl border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="relative h-48 bg-gray-50 overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=400&q=80"
                    alt="Related product"
                    fill
                    className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-gray-900 text-sm mb-2 line-clamp-2">
                    Gerelateerd Product {i}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, j) => (
                        <Star
                          key={j}
                          className={`w-3 h-3 ${
                            j < 4 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-gray-600">(45)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-gray-900">€{(19.99 + i * 5).toFixed(2)}</span>
                    <button className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
                      <ShoppingCart className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
