import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

// const games = [
//   {
//     title: "Arcade Cabinets",
//     cabinet: "Candy Cabinet",
//     image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//   },
//   {
//     title: "Initial D Arcade Stage",
//     cabinet: "Driving Cabinet",
//     image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//   },
//   {
//     title: "DoDonPachi",
//     cabinet: "Candy Cabinet",
//     image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
//   }
// ];

const carouselImages = [
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(5%20of%2057).png", alt: "Hyper low-angled shot of arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(6%20of%2057).png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(7%20of%2057).png", alt: "High-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(8%20of%2057).png", alt: "Picture of Sega Super GT arcade cabinets at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(13%20of%2057).png", alt: "Picture of Police Trainer arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(14%20of%2057).png", alt: "Picture of Simpsons Pinball machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(15%20of%2057).png", alt: "Picture of the console setup at 6R's entertainment yard. Xbox One X and Playstation 5 consoles are shown" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(44%20of%2057).png", alt: "Picture of high score board at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(37%20of%2057).png", alt: "Picture of Xbox One X controller at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(16%20of%2057).png", alt: "Picture of fancy new claw machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(17%20of%2057).png", alt: "Small toddler sized arcade cabinets with Pac Man and a Paw Patrol game at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(9%20of%2057).png", alt: "Picture of mother and daughter playing Teenage Mutant Ninja Turtle arcade game at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(30%20of%2057).png", alt: "Picture of someone using arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(33%20of%2057).png", alt: "Picture of pink custom acrade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(34%20of%2057).png", alt: "Picture of red and blue custom arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(18%20of%2057).png", alt: "Picture of MVS arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(19%20of%2057).png", alt: "Picture of control panel of an MVS arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(20%20of%2057).png", alt: "Picture of airhockey table at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(26%20of%2057).png", alt: "Picture of Star Wars Trilogy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(27%20of%2057).png", alt: "Picture of Suzuka 8 hours arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(38%20of%2057).png", alt: "Picture of redemption machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(42%20of%2057).png", alt: "Picture of controller for Xbox One X at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(45%20of%2057).png", alt: "Picture of Iron Maiden arcade machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(46%20of%2057).png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(47%20of%2057).png", alt: "Picture of Astro City arcade cabinet running Marvel vs Capcom 2 at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(49%20of%2057).png", alt: "Picture of Naomi hardware running in Astro City arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(43%20of%2057).png", alt: "Picture of Naomi hardware running in Astro City arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(41%20of%2057).png", alt: "Picture of lindy arcade cabinet at 6R's entertainment yard. Running Marvel vs Capcom 2" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(31%20of%2057).png", alt: "Picture 6R banner explaining services offered at 6R's entertainment yard."},
];

export default function Games() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section id="games" className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img src="https://i.imgur.com/6XkhKhy.png" alt="Trade-In Chicken" className="mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Featured Games Available for Purchase</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Browse our extensive collection of games available for purchase, or bring in your own titles to trade. Exchange your games for something new from our shelves or opt for store credit – the choice is yours!
          </p>
          <img src="https://imgur.com/J9JZ4TN.png" alt="Examples of games you can buy or trade in img 1" className="mx-auto mb-4" />
          <img src="https://imgur.com/QsEVnyW.png" alt="Examples of games you can buy or trade in img 2" className="mx-auto mb-4" />

          <br/>
          <br/>
          <br/>
          <h2 className="text-4xl font-bold mb-4">Featured Arcade Games and Cabinets</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Experience our carefully curated selection of authentic American and Japanese arcade cabinets!
          </p>
        </div>
        
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
              {carouselImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full aspect-[1000/667] object-contain bg-black-900"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
            onClick={() => setCurrentIndex((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1))}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 p-2 rounded-full text-white"
            onClick={() => setCurrentIndex((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1))}
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full ${
                  currentIndex === index ? 'bg-white' : 'bg-white/50'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {games.map((game, index) => (
            <div key={index} className="bg-gray-900 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all">
              <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{game.title}</h3>
                <p className="text-gray-400">{game.cabinet}</p>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}