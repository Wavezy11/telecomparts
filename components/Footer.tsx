'use client';

import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Send, Shield, Award, Truck } from 'lucide-react';

export default function Footer() {
  const footerLinks = {
    klantenservice: [
      'Contact',
      'Verzending & Levering',
      'Retourneren',
      'Garantie',
      'Veelgestelde vragen',
    ],
    overOns: [
      'Over Telecomparts',
      'Vacatures',
      'Pers',
      'Duurzaamheid',
      'Partners',
    ],
    juridisch: [
      'Algemene voorwaarden',
      'Privacybeleid',
      'Cookiebeleid',
      'Disclaimer',
    ],
  };

  const paymentMethods = [
    { name: 'iDEAL', icon: '🇳🇱' },
    { name: 'PayPal', icon: '🅿️' },
    { name: 'Visa', icon: '�' },
    { name: 'Mastercard', icon: '�' },
    { name: 'Apple Pay', icon: '🍎' },
  ];

  const trustBadges = [
    { name: 'Webshop Keurmerk', icon: <Award className="w-6 h-6" /> },
    { name: 'Thuiswinkel Waarborg', icon: <Shield className="w-6 h-6" /> },
    { name: 'Veilig Betalen', icon: <Truck className="w-6 h-6" /> },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 lg:p-12 mb-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                <Mail className="w-8 h-8" />
                <h3 className="text-2xl lg:text-3xl font-bold">Blijf op de hoogte!</h3>
              </div>
              <p className="text-blue-100 text-lg">
                Schrijf je in voor onze nieuwsbrief en ontvang <strong>10% korting</strong> op je eerste bestelling
              </p>
            </div>
            <div className="flex w-full lg:w-auto">
              <div className="relative flex-1 lg:flex-initial">
                <input
                  type="email"
                  placeholder="Je e-mailadres"
                  className="w-full lg:w-80 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 pr-12"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white p-2 rounded-lg transition-colors">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h4 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent mb-6">
              Telecomparts
            </h4>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed">
              Je specialist in telefoonaccessoires en gaming gear. Alleen de beste kwaliteit voor de beste prijs.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Phone className="w-5 h-5 text-blue-400" />
                <span className="font-medium">085 - 123 4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <Mail className="w-5 h-5 text-blue-400" />
                <span className="font-medium">info@telecomparts.nl</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="font-medium">Kerkstraat 123, 1234 AB Amsterdam</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div>
            <h5 className="font-bold text-lg mb-6 text-white">Klantenservice</h5>
            <ul className="space-y-3">
              {footerLinks.klantenservice.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-white">Over Ons</h5>
            <ul className="space-y-3">
              {footerLinks.overOns.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-bold text-lg mb-6 text-white">Juridisch</h5>
            <ul className="space-y-3">
              {footerLinks.juridisch.map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors text-sm lg:text-base">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges & Payment Methods */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Trust Badges */}
            <div>
              <h6 className="font-semibold text-gray-300 mb-4">Keurmerken & Garanties</h6>
              <div className="flex flex-wrap gap-4">
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg text-sm text-gray-300"
                    title={badge.name}
                  >
                    <span className="text-blue-400">{badge.icon}</span>
                    <span>{badge.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <h6 className="font-semibold text-gray-300 mb-4">Betaalmethodes</h6>
              <div className="flex flex-wrap gap-3">
                {paymentMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-gray-800 px-4 py-2 rounded-lg text-lg flex items-center justify-center min-w-[60px] hover:bg-gray-700 transition-colors"
                    title={method.name}
                  >
                    <span>{method.icon}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
            <div className="text-center lg:text-left">
              <p className="text-gray-400">
                © 2024 Telecomparts. Alle rechten voorbehouden.
              </p>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
