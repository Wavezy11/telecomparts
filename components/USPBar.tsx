import { Check } from 'lucide-react';

export default function USPBar() {
  const usps = [
    '30 dagen bedenktijd',
    'Betaal achteraf met Klarna',
    'Webshop Keurmerk',
  ];

  return (
    <div className="bg-white py-6 border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
          {usps.map((usp, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-teal-400 flex-shrink-0" />
              <span className="text-gray-700 font-medium">{usp}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
