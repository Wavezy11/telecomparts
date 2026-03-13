'use client';

import React from 'react';
import Image from 'next/image';
import { 
  Shield, 
  Truck, 
  Award, 
  Clock, 
  Users,
  MapPin,
  Phone,
  Mail,
  Check,
  Star,
  Heart,
  Target,
  Zap
} from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OverOnsPage() {
  const team = [
    {
      name: 'Jan van der Berg',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80',
      bio: 'Met meer dan 15 jaar ervaring in de e-commerce sector, begon Jan Telecomparts met één doel: de beste smartphone accessoires aanbieden tegen eerlijke prijzen.'
    },
    {
      name: 'Sarah de Jong',
      role: 'Head of Customer Service',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b332c1ca?auto=format&fit=crop&w=400&q=80',
      bio: 'Sarah leidt ons team van klantenservice experts en zorgt ervoor dat elke klant de beste ervaring heeft bij Telecomparts.'
    },
    {
      name: 'Michael Bakker',
      role: 'Product Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
      bio: 'Michael is verantwoordelijk voor onze productselectie en zorgt ervoor dat we alleen de hoogste kwaliteit producten in ons assortiment opnemen.'
    },
    {
      name: 'Lisa Janssen',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1573496359147-b3d8e7c1be5b?auto=format&fit=crop&w=400&q=80',
      bio: 'Lisa ontwikkelt onze marketingstrategieën en zorgt ervoor dat klanten ons weten te vinden voor al hun smartphone behoeften.'
    }
  ];

  const milestones = [
    { year: '2010', title: 'Oprichting', description: 'Telecomparts wordt opgericht in een kleine winkel in Amsterdam' },
    { year: '2014', title: 'Online Launch', description: 'We lanceren onze webshop en breiden uit naar heel Nederland' },
    { year: '2018', title: '10.000 Klanten', description: 'We bereiken de mijlpaal van 10.000 tevreden klanten' },
    { year: '2020', title: 'Nieuw Magazijn', description: 'Opening van ons moderne distributiecentrum in Almere' },
    { year: '2022', title: 'Internationale Expansie', description: 'Begin van verkoop naar België en Duitsland' },
    { year: '2024', title: 'Innovatie Award', description: 'Winning van de Dutch E-commerce Innovation Award' }
  ];

  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: '100% Kwaliteit',
      description: 'Alleen de beste producten, zorgvuldig geselecteerd en getest door ons team.'
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: 'Snelle Levering',
      description: 'Voor 23:59 besteld is morgen in huis. Gratis verzending vanaf €20.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Klantgericht',
      description: 'Uw tevredenheid staat voorop. Onze klantenservice is altijd bereikbaar.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Expertise',
      description: 'Meer dan 10 jaar ervaring in smartphone accessoires en e-commerce.'
    }
  ];

  const stats = [
    { number: '500.000+', label: 'Tevreden klanten' },
    { number: '10.000+', label: 'Producten' },
    { number: '9.3/10', label: 'Klantscore' },
    { number: '24/7', label: 'Support' },
    { number: '14', label: 'Jaar ervaring' },
    { number: '3', label: 'Landen' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              Over Telecomparts
            </h1>
            <p className="text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto mb-8">
              Jouw betrouwbare partner voor smartphone accessoires sinds 2010
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/products"
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
              >
                Bekijk Producten
              </Link>
              <Link 
                href="/contact"
                className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors border border-blue-600"
              >
                Neem Contact Op
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Ons Verhaal
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Telecomparts begon in 2010 als een kleine winkel in Amsterdam, met een simpele missie: 
                  de beste smartphone accessoires aanbieden tegen eerlijke prijzen. Oprichter Jan van der Berg 
                  merkte al snel dat er een groeiende behoefte was aan kwalitatieve, betrouwbare 
                  smartphone accessoires.
                </p>
                <p>
                  Wat begon als een lokale winkel groeide snel uit. In 2014 lanceerden we onze webshop, 
                  waardoor we klanten in heel Nederland konden bedienen. De focus bleef hetzelfde: 
                  uitmuntende service, deskundig advies en alleen producten die we zelf zouden gebruiken.
                </p>
                <p>
                  Vandaag de dag zijn we uitgegroeid tot een van de meest betrouwbare namen in de 
                  smartphone accessoires markt, met meer dan 500.000 tevreden klanten en een uitgebreid 
                  assortiment van meer dan 10.000 producten.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://images.unsplash.com/photo-1560472354-b33ff0cde6a3?auto=format&fit=crop&w=600&q=80"
                alt="Telecomparts team"
                width={600}
                height={400}
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Onze Reis
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className="flex-1 text-right">
                    <div className={`inline-block p-4 bg-white rounded-xl shadow-lg ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="text-blue-600 font-bold text-lg">{milestone.year}</div>
                      <div className="text-gray-900 font-semibold text-xl mb-2">{milestone.title}</div>
                      <div className="text-gray-600">{milestone.description}</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {milestone.year.slice(2)}
                    </div>
                  </div>
                  <div className="flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Onze Waarden
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Ons Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto object-cover"
                  />
                  <div className="absolute bottom-0 right-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Klaar om de beste smartphone accessoires te ontdekken?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Sluit je aan bij duizenden tevreden klanten en ervaar zelf waarom Telecomparts 
            de eerste keuze is voor smartphone accessoires.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Ontdek Producten
            </Link>
            <Link 
              href="/contact"
              className="bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-800 transition-colors border border-blue-600"
            >
              Contact Ons
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-12">
            Neem Contact Op
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <Phone className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefoon</h3>
              <p className="text-gray-600">085 - 123 4567</p>
              <p className="text-gray-500 text-sm">Maandag - Vrijdag, 9:00 - 17:00</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
              <p className="text-gray-600">info@telecomparts.nl</p>
              <p className="text-gray-500 text-sm">Binnen 24 uur reactie</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-xl mb-4">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Adres</h3>
              <p className="text-gray-600">Kerkstraat 123</p>
              <p className="text-gray-500 text-sm">1234 AB Amsterdam</p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
