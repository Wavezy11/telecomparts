import Header from '@/components/Header';
import HeroBanner from '@/components/HeroBanner';
import CategoryGrid from '@/components/CategoryGrid';
import ProductGrid from '@/components/ProductGrid';
import GamingSection from '@/components/GamingSection';
import Footer from '@/components/Footer';

const mockProducts = [
  {
    id: '1',
    name: 'Apple iPhone 16 MagSafe Hoesje (Transparant)',
    price: 29.99,
    icon: 'Smartphone',
    colorVariants: ['white', 'bg-gray-900', 'bg-slate-300'],
    isSale: false,
    badge: 'Bestseller',
    rating: 4.8,
    reviewCount: 234,
  },
  {
    id: '2',
    name: 'Apple iPhone 17 MagSafe Hoesje (Zwart)',
    price: 32.99,
    icon: 'Smartphone',
    colorVariants: ['bg-gray-900', 'bg-slate-800', 'bg-teal-400'],
    isSale: true,
    originalPrice: 39.99,
    badge: 'Nieuw',
    rating: 4.6,
    reviewCount: 156,
  },
  {
    id: '3',
    name: 'Magnetic Battery Pack 15W 5000mAh (Wit)',
    price: 49.95,
    icon: 'BatteryFull',
    colorVariants: ['white', 'bg-slate-300', 'bg-teal-400'],
    isSale: true,
    originalPrice: 59.95,
    rating: 4.7,
    reviewCount: 89,
  },
  {
    id: '4',
    name: 'Privacy Screenprotector (iPhone 15/16/17)',
    price: 14.99,
    icon: 'Shield',
    colorVariants: ['white', 'bg-slate-300', 'bg-gray-900'],
    isSale: false,
    rating: 4.5,
    reviewCount: 201,
  },
  {
    id: '5',
    name: '20W USB-C Snellader',
    price: 19.99,
    icon: 'Zap',
    colorVariants: ['bg-slate-800', 'bg-teal-400', 'white'],
    isSale: false,
    rating: 4.4,
    reviewCount: 178,
  },
];


export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <section id="home">
          <HeroBanner />
        </section>
        
        <section id="categories">
          <CategoryGrid />
        </section>
        
        <section id="bestsellers" className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Bestsellers</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Onze populairste producten, beoordeeld door duizenden tevreden klanten
              </p>
            </div>
            <ProductGrid products={mockProducts} />
          </div>
        </section>
        
        <section id="gaming">
          <GamingSection />
        </section>
      </main>
      <Footer />
    </div>
  );
}
