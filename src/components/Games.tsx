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

export default function Games() {
  return (
    <section id="games" className="py-20 bg-[#0A1929] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
         <img src="https://i.imgur.com/xCmlmje.png" alt="6R's entertainment yard logo" className="mx-auto mb-4" />
      </div>
      
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-center">Featured Arcade Games and Cabinets</h2>
          <div className="text-gray-400 max-w-2xl mx-auto">
           <p>
            We love videogames here at 6R's!
          </p>

          <br/>

          <p>
            How much do we love videogames? We love them so much that we've assembled a great collection of arcade cabinets, modern consoles, and arcade and console games for you to play with. We like to share here at 6R's.
          </p>

          <br/>

          <br/>

          {/* <VideoPlayer 
           videoUrl="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/20241201_184257.mp4"
           title="Video Title"
           /> */}

          <p>What exactly are we sharing with you? Classic arcade games like Missile Command, Mortal Kombat, and Pac Man for starters! We've got dedicated machines for NBA Jam, NFL Blitz, and the niche classic Outzone if you're into shooting games.</p>

          <br/>
          
          <p>
            We have a ton of dedicated racing arcade cabinets! Do you want to drive a car? We've got Daytona USA, San Francisco Rush: Extreme Racing, Sega Super GT, and Crazy Taxi for that! Do you want to ride a motorcycle? You can do that with Suzuka 8 Hours. Do you want to fight in a Star War? We've got a dedicated cabinet for that. Do you want to be a Ninja Turtle? We've got a dedicated arcade cabinet for that too!  
          </p>

          <br/>

          <p>Our real variety comes with our multi-game cabinet systems. We have an authentic retro Neo Geo MVS cabinet that is loaded with different fighting, sports, sidescrollers, puzzle games, brawlers, or shooting games. We also have TWO newer and linked Lindbergh Universal Cabinets that are able to play classic games that you remember from the 1980's but can also load games that came out as recently as two or five years ago in arcades in the East! If you would like to know more about the games that are loaded on these two machines or would like to change them, ask at the front desk, and they will see what they can do for you. </p>

          <br/>

          <p>
             We have a ton of tickets and prizes for you to win as well! You can check out what we offer <Link 
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

          <p>We even have air hockey and pinball!</p>

          <br/>

          <p>Don't just take my word for it! We've got some pictures that show you exactly what we mean below!</p>

          </div>
        </div>
        
        <div className="mb-16">
          <Carousel images={gameImages} />
        </div>
      </div>
    </section>
  );
}