'use client';

import { Shield, Truck, Award, Clock } from 'lucide-react';

export default function SEOContentBlock() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: '100% Passgarantie',
      description: 'Al onze producten zijn perfect getest op jouw specifieke toestel.'
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: 'Snelle Levering',
      description: 'Voor 23:59 besteld = morgen in huis. Gratis verzending vanaf €20.'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'Kwaliteitsproducten',
      description: 'Alleen de beste materialen en merken. Gegarandeerd 1 jaar garantie.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Expert Sinds 2010',
      description: 'Meer dan 10 jaar ervaring in smartphone accessoires.'
    }
  ];

  return (
    <section className="py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {/* Main Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Telecomparters: Dé Specialist in Smartphone Accessoires
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Al meer dan 10 jaar dé betrouwbare partner voor al jouw smartphone benodigdheden. 
            Van hoesjes tot opladers, vind alles wat je nodig hebt voor optimale bescherming en gebruiksgemak.
          </p>
        </div>

        {/* Two Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {/* Left Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Waarom Kiezen voor Telecomparters?
            </h3>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Bij Telecomparters begrijpen we dat jouw smartphone meer is dan alleen een apparaat - 
                het is een essentieel onderdeel van je dagelijks leven. Daarom bieden we alleen de 
                beste accessoires die jouw toestel optimaal beschermen en verbeteren.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Onze uitgebreide collectie bevat duizenden producten voor alle merken en modellen. 
                Of je nu zoekt naar een <strong>iPhone hoesje</strong>, <strong>Samsung cover</strong>, 
                of <strong>oplaadoplossingen</strong> - bij ons vind je het allemaal. 
                Elk product wordt zorgvuldig geselecteerd op basis van kwaliteit, duurzaamheid en gebruiksgemak.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Met onze <strong>100% passgarantie</strong> ben je verzekerd van een perfecte pasvorm. 
                Past het product niet? Dan ruilen we het gratis om. Geen gedoe, alleen tevredenheid.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Onze Service & Kwaliteit
            </h3>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Service staat bij ons centraal. Onze klantenservice is bereikbaar van maandag tot en met 
                vrijdag voor al je vragen en advies. Met een gemiddelde beoordeling van <strong>9.3/10</strong> 
                bewijzen duizenden klanten dat we ze niet teleurstellen.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                Alle producten worden uitvoerig getest voordat ze ons assortiment bereiken. 
                We werken samen met de beste merken en leveranciers om ervoor te zorgen dat je 
                alleen accessoires van de hoogste kwaliteit ontvangt.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Bestel je voor 23:59? Dan heb je je bestelling morgen al in huis. 
                Onze snelle levering en gratis verzending vanaf €20 maken het nog makkelijker 
                om snel van je nieuwe accessoires te genieten.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4">
                {feature.icon}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
            Klaar om Jouw Smartphone te Upgraden?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Bekijk onze complete collectie en vind de perfecte accessoires voor jouw toestel. 
            Altijd de beste prijs, snelle levering en uitstekende service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Bekijk Alle Producten
            </button>
            <button className="bg-white hover:bg-gray-50 text-blue-600 px-8 py-3 rounded-lg font-semibold border border-blue-200 transition-colors">
              Neem Contact Op
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
