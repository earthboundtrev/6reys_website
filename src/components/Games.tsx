import React from 'react';
import { Gamepad2 } from 'lucide-react';

const games = [
  {
    title: "Street Fighter III: 3rd Strike",
    cabinet: "Candy Cabinet",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "Initial D Arcade Stage",
    cabinet: "Driving Cabinet",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  },
  {
    title: "DoDonPachi",
    cabinet: "Candy Cabinet",
    image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
  }
];

export default function Games() {
  return (
    <section id="games" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img src="https://i.imgur.com/6XkhKhy.png" alt="Trade-In Chicken" className="mx-auto mb-4" />
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Browse our extensive collection of games available for purchase, or bring in your own titles to trade. Exchange your games for something new from our shelves or opt for store credit – the choice is yours!
          </p>
          <img src="https://imgur.com/J9JZ4TN.png" alt="Examples of games you can buy or trade in img 1" className="mx-auto mb-4" />
          <img src="https://imgur.com/QsEVnyW.png" alt="Examples of games you can buy or trade in img 2" className="mx-auto mb-4" />

          <br/>
          <br/>
          <br/>
          <h2 className="text-4xl font-bold mb-4">Featured Games</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our carefully curated selection of authentic Japanese arcade cabinets
          </p>
        </div>
        
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.cabinet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}