import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Carousel from './Carousel';
import VideoPlayer from './VideoPlayer';
import { Link } from 'react-router-dom';

const gameImages = [
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(5%20of%2057).png", alt: "Hyper low-angled shot of arcade stick at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(6%20of%2057).png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(7%20of%2057).png", alt: "High-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/new_pinball_20241124_160220.jpg", alt: "Three pinball machines. Gophers, Spiderman, and Ghostbusters" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(8%20of%2057).png", alt: "Picture of Sega Super GT arcade cabinets at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(13%20of%2057).png", alt: "Picture of Police Trainer arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(15%20of%2057).png", alt: "Picture of the console setup at 6R's entertainment yard. Xbox One X and Playstation 5 consoles are shown" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(44%20of%2057).png", alt: "Picture of high score board at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(37%20of%2057).png", alt: "Picture of Xbox One X controller at 6R's entertainment yard" },
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
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(42%20of%2057).png", alt: "Picture of controller for Xbox One X at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(45%20of%2057).png", alt: "Picture of Iron Maiden arcade machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(46%20of%2057).png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(47%20of%2057).png", alt: "Picture of Astro City arcade cabinet running Marvel vs Capcom 2 at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(49%20of%2057).png", alt: "Picture of Naomi hardware running in Astro City arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(43%20of%2057).png", alt: "Picture of Naomi hardware running in Astro City arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(41%20of%2057).png", alt: "Picture of lindy arcade cabinet at 6R's entertainment yard. Running Marvel vs Capcom 2" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(31%20of%2057).png", alt: "Picture 6R banner explaining services offered at 6R's entertainment yard."},
];

// Remove Laserdisc from hardware images mapping
const hardwareImages = {
  Atomiswave: "Atomiswave_Logo.webp",
  CSP1: "Capcom%20CPS-1.png",
  CSP2: "Capcom%20CPS-2.png",
  CSP3: "Capcom%20CPS-3.png",
  ES3: "namco_system_es3_logo.png",
  Lindbergh: "sega_lindebergh_board_logo.png",
  Naomi: "Sega_NAOMI_logo.png",
  "Neo Geo MVS": "Neo%20Geo.png",
  "Taito F3": "Taito.png"
};

export default function Games() {
  const [selectedHardware, setSelectedHardware] = useState<string | null>(null);

  // Game lists organized by hardware
  const gamesByHardware = {
    Atomiswave: [
      "Animale Kaiser",
      "Block Pong",
      "Demolish Fist",
      "Dolphin Blue",
      "Extreme Hunting",
      "Extreme Hunting 2",
      "Fist of the North Star",
      "Faster Than Speed",
      "Guilty Gear Isuka",
      "Guilty Gear X",
      "Knights of Valour Seven Spirits",
      "Maximum Speed",
      "Metal Slug 6",
      "Neo Geo Battle Coliseum",
      "Ranger Mission",
      "Rumble Fish",
      "Rumble Fish 2",
      "Samurai Shodown IV",
      "Salary Man Kintaro",
      "Sega Bass Fishing Challenge",
      "Sega Clay Challenge",
      "Sports Shooting USA",
      "Sushi Bar",
      "Yai Yai Drive"
    ],
    CSP1: [
      "Adventure Quiz Capcom World 2",
      "Captain Commando",
      "Carrier Air Wing",
      "Cyberbots",
      "Dynasty Wars",
      "Final Fight",
      "Forgotten Worlds",
      "Ghouls and Dinosaurs",
      "Gunforce Marine Comm",
      "Ghouls N' Ghosts",
      "Knights of the Round",
      "Lost Worlds",
      "Magic Sword: Heroic Fantasy",
      "Mega Man: The Power Battle",
      "Mega Twins",
      "Muscle Bomber Duo's Ultimate Team",
      "Nemo",
      "Pang! 3",
      "Pnickies",
      "Progear",
      "Quiz & Dragons: Capcom Quiz Game",
      "Quiz Tonosama no Yabou 2",
      "Rainbow Edition",
      "Saturday Night Slam Masters",
      "Street Fighter II: Champion Edition",
      "Street Fighter II: Champion Edition - Rainbow Edition",
      "Street Fighter II: Hyper Fighting",
      "Street Fighter II: The World Warrior",
      "Strider",
      "The King of Dragons",
      "The Punisher",
      "Three Wonders",
      "U.N. Squadron",
      "Varth",
      "Warriors of Fate",
      "Willow"
    ],
    CSP2: [
      "1944: The Loop Master",
      "1996: The War Against Destiny",
      "Alien vs Predator",
      "Armored Warriors",
      "Battle Circuit",
      "Capcom Sports Club",
      "Cyberbots: Full Metal Madness",
      "Darkstalkers: The Night Warriors",
      "Dimahoo",
      "Dungeons & Dragons: Tower of Doom",
      "Dungeons & Dragons: Shadow Over Mystara",
      "Eco Fighters",
      "Gigawing",
      "Hyper Street Fighter II: The Anniversary Edition",
      "Jyangokushi: Haoh no Saihai",
      "Japan Puzzle CHK",
      "Mars Matrix",
      "Marvel Super Heroes",
      "Marvel Super Heroes vs Street Fighter",
      "Marvel vs Capcom",
      "Mega Man 2: The Power Fighters",
      "Mega Man: The Power Battle",
      "Mighty Guy",
      "Night Warriors: Darkstalkers",
      "Progear",
      "Quiz Nanairo Dreams: Nijiirochou",
      "Reverse",
      "Ring of Destruction: Slammasters",
      "Street Fighter Alpha",
      "Street Fighter Alpha 2",
      "Street Fighter Alpha 3",
      "Super Gem Fighter mini mix",
      "Super Puzzle Fighter II Turbo",
      "Super Street Fighter II: New Challengers",
      "Super Street Fighter II: Tournament Battle",
      "Super Street Fighter II Turbo",
      "Super Puzzle Fighter 2",
      "Vampire Savior: The Lord of the Vampire",
      "Vampire: Children of the Night",
      "X-men vs Street Fighter"
    ],
    CSP3: [
      "JoJo's Venture EU",
      "JoJo's No Kimyou na Bouken JP",
      "JoJo's Bizarre Adventure EU",
      "Red Earth EX",
      "Red Earth JP",
      "Street Fighter III: New Generation EU",
      "Street Fighter III: New Generation JP",
      "Street Fighter III: 2nd Impact US",
      "Street Fighter III 2nd Impact JP",
      "Street Fighter III: 3rd Strike",
      "Street Fighter III: 3rd Strike EN",
      "Street Fighter III: 3rd Strike JP"
    ],
    ES3: [
      "Lost Island Adventure",
      "Lost Island Adventure Demo",
      "Mario Kart Arcade GP DX",
      "Mario Party",
      "Pokken Tournament",
      "Star Wars Battle Pod",
      "Tekken 7 Fated Retribution",
      "Tekken 7 Fated Retribution Round 2",
      "Time Crisis 5",
      "Vampire Night Arcade Time 5",
      "Vampire Night Arcade Time 5"
    ],
    Lindbergh: [
      "After Burner Climax",
      "Rampage Medley",
      "Initial D Arcade Stage 4",
      "Initial D Arcade Stage 4 EX",
      "Let's Go Jungle: Lost on the Island",
      "Island of Spirit",
      "Let's Go Jungle Special",
      "Rampage 2: Special Tours Deluxe",
      "Rampage 4: Ultimate Street",
      "Sega Race TV",
      "Star Trek: Voyager The Arcade",
      "Secuna",
      "Pop Splash",
      "Virtual Fighter 5 Rev C",
      "Virtua Tennis 3"
    ],
    Naomi: [
      "Capcom vs SNK 2",
      "Dynamite",
      "Marvel vs Capcom 2",
      "Marvel vs Capcom 2 ENG",
      "Power Stone",
      "Power Stone 2",
      "Virtua Tennis 2",
      "Zero Gunner 2"
    ],
    "Neo Geo MVS": [
      "2020 Super Baseball",
      "3 Count Bout",
      "Art of Fighting",
      "Art of Fighting 2",
      "Art of Fighting 3: The Path of the Warrior",
      "Baseball Stars 2",
      "Baseball Stars Professional",
      "Battle Flip Shot",
      "Blazing Star",
      "Blues Journey",
      "Breakers",
      "Breakers Revenge",
      "Burning Fight",
      "Captain Tomaday",
      "Chibi Maruko-Chan: Marukochan",
      "Crossed Swords",
      "Crossed Swords 2",
      "Cyber Lip",
      "Cyber Cup",
      "Fatal Fury: King of Fighters",
      "Fatal Fury 2",
      "Fatal Fury 3 Road",
      "Fight Man",
      "Far East of Eden -Kabuki Klash"
    ],
    "Taito F3": [
      "ABC Arabian Magic",
      "Air Ranger Rescue",
      "Bubble Memories",
      "Bubble Memories: The Story of",
      "Bubble Bobble III",
      "Bubble Memories: The Story of",
      "Bubble Bobble III Black Edition",
      "Cleopatra Fortune",
      "Gekirindan",
      "Grid Seeker: Project Storm Hammer",
      "Gunlock",
      "In Tournament Cup 64",
      "Kaiser Knuckle",
      "Kirameki Star Road",
      "Land Maker",
      "Pop N' Pop",
      "Puzzle Bobble 2",
      "Puzzle Bobble 3",
      "Puzzle Bobble 4",
      "Prime Time Fighter",
      "Puchi Carat",
      "Space Invaders '95: Attack of the Lunar Loonies",
      "Space Invaders DX",
      "Super Cup Finals",
      "Taito Cup Finals",
      "Taito Super Seal",
      "Top Force",
      "Twin Cobra II",
      "Twin Qix",
      "Re-Seal RV",
      "Ring Rage",
      "Ring Rise"
    ]
  };

  return (
    <section id="games" className="py-20 bg-[#0A1929] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <img src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6_reys_logo.jpg" alt="6R's entertainment yard logo" className="mx-auto mb-4" />
      </div>
      
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Explore Our Game Collection</h2>
          
          {/* New flex container for side-by-side layout */}
          <div className="flex flex-col md:flex-row md:gap-8">
            {/* Text content - 40% width on desktop/tablet */}
            <div className="md:w-[40%] mb-8 md:mb-0">
              <div className="text-gray-400">
                <p>
                  We love videogames here at 6R's! Don't just take our word for it! We've got some pictures that show you exactly what we mean!
                </p>

                <br/>

                <p>
                  How much do we love videogames? We love them so much that we've assembled a great collection of arcade cabinets, modern consoles, and arcade and console games for you to play with.
                </p>

                <br/>

                <p>We even have air hockey and pinball!</p>

                <br/>

                <p>
                   We also have a ton of tickets and prizes for you to win as well! You can check out what we offer <Link 
                     to="/prizes" 
                     state={{ scrollToTop: true }} 
                     className="text-white font-semibold hover:underline"
                   >here!</Link>
                </p>

                <br/>

                <p>
                  Do you have games, consoles, or peripherals to trade in? Learn about our trade in process <Link 
                    to="/tradeins" 
                    state={{ scrollToTop: true }} 
                    className="text-white font-semibold hover:underline"
                  >here!</Link>
                </p>

                <br/>

              </div>
            </div>

            {/* Carousel - 60% width on desktop/tablet */}
            <div className="md:w-[60%]">
              <Carousel images={gameImages} />
            </div>
          </div>
        </div>

        {/* New decorative divider */}
        <div className="flex items-center justify-center mb-16">
          <div className="h-px bg-pink-500 w-24 md:w-48"></div>
          <Gamepad2 className="mx-4 w-8 h-8 text-pink-500" />
          <div className="h-px bg-pink-500 w-24 md:w-48"></div>
        </div>

        {/* Hardware Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Explore Our Complete Arcade Game Collection
          </h2>
          
          {/* Mobile-only text placement */}
          <p className="text-gray-400 mb-12 md:hidden">
            Dive deep into our extensive library of arcade titles. Clicking each of the buttons will allow you to browse through our complete collection organized by hardware platform.
          </p>

          {/* New flex container for side-by-side layout */}
          <div className="flex flex-col md:flex-row md:gap-8 md:items-start">
            {/* Hardware buttons - now on the left side */}
            <div className="md:w-1/2">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {Object.entries(gamesByHardware).map(([hardware, games]) => (
                  <div key={hardware} className="flex flex-col">
                    <button 
                      className={`transition-colors p-6 rounded-lg w-full h-[120px] flex items-center justify-center
                        ${selectedHardware === hardware ? 'bg-pink-500' : 'bg-gray-800 hover:bg-pink-500'}`}
                      onClick={() => setSelectedHardware(selectedHardware === hardware ? null : hardware)}
                    >
                      <img 
                        src={`https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/${hardwareImages[hardware]}`}
                        alt={hardware}
                        className="max-h-[80px] w-auto object-contain"
                      />
                    </button>
                    
                    {/* Mobile Game List */}
                    {selectedHardware === hardware && (
                      <div className="md:hidden mt-4 bg-gray-800 rounded-lg p-4">
                        <h3 className="text-xl font-bold mb-2">
                          {hardware === "Taito F3" ? "Taito F3 Games" : `${hardware} Games`}
                        </h3>
                        <ul className="space-y-1">
                          {games.map((game) => (
                            <li key={game} className="text-gray-300 hover:text-white">
                              • {game}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Text content and game list - now on the right side */}
            <div className="md:w-1/2">
              {/* Desktop/tablet-only text placement */}
              <p className="text-gray-400 mb-12 max-w-2xl mx-auto md:mx-0 hidden md:block">
                Dive deep into our extensive library of arcade titles. Browse through our complete collection organized by hardware platform.
              </p>

              {/* Desktop Game List Section */}
              {selectedHardware && (
                <div className="hidden md:block">
                  <h3 className="text-2xl font-bold mb-4">
                    {selectedHardware === "Taito F3" ? "Taito F3 Games" : `${selectedHardware} Games`}
                  </h3>
                  <div className="bg-gray-800 rounded-lg p-6">
                    <ul className="grid grid-cols-1 gap-1 text-sm">
                      {gamesByHardware[selectedHardware]?.map((game) => (
                        <li key={game} className="text-gray-300 hover:text-white">
                          • {game}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}