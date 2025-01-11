import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import Carousel from './Carousel';
import Games from './Games';
import { Link, useLocation } from 'react-router-dom';
import NavigationArrow from './NavigationArrow';

const carouselImages = [
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/tickets_to_use_for_prizes.jpg", alt: "A bunch of tickets that someone will use for a prize at 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/machines_to_get_tickets_or_prizes.jpg", alt: "Claw machine, Cyclone redemption machine, and Hoop it Up shown at 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/prizes_in_prize_machine.jpg", alt: "Closer picture of inside of a claw machine that shows prizes that can be won at 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_2.jpg", alt: "Picture of Sega Super GT arcade cabinets at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_3.jpg", alt: "Picture of Police Trainer arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_4.jpg", alt: "Picture of Simpsons Pinball machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_5.jpg", alt: "Picture of the console setup at 6R's entertainment yard. Xbox One X and Playstation 5 consoles are shown" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_6.jpg", alt: "Picture of high score board at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_7.jpg", alt: "Picture of Xbox One X controller at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/examples_of_prizes_8.jpg", alt: "Picture of Xbox One X controller at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6R_s%20Photo%20(14%20of%2057).png", alt: "Picture of Simpsons Pinball machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/hoop_it_up.jpg", alt: "Small toddler sized arcade cabinets with Pac Man and a Paw Patrol game at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(16%20of%2057).png", alt: "Picture of fancy new claw machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6Rs%20Photo%20(38%20of%2057).png", alt: "Picture of Cyclone redemption machine at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/a_bunch_of_tickets.jpg", alt: "A bunch of tickets on the counter at 6R's entertainment yard" },
];

export default function Prizes() {
  const location = useLocation();
  const needsScroll = location.state?.scrollToTop ?? false;

  return (
    <section id="games" className="py-20 bg-[#0A1929] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <img src="https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/6_reys_logo.jpg" alt="6R's entertainment yard logo" className="mx-auto mb-4" />
        </div>
        
        <h2 className="text-4xl font-bold mb-8 text-center">We have tickets and prizes!</h2>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-[50%] text-gray-400">
            <p>
              Do you like prizes? You can win them at 6R's! We have lots of exciting redemption games where you can earn tickets to trade in for awesome prizes.
            </p>

            <br/>

            <p>
              Try your luck at our <span className="text-white font-semibold">claw game</span>, <span className="text-white font-semibold">cyclone redemption game</span>, or shoot some hoops in <span className="text-white font-semibold">Hoop it Up</span> to earn tickets! 
            </p>

            <br/>

            <p>
              The more you play, the more tickets you can win.
            </p>

            <br/>

            <p>
              Once you've collected enough tickets, bring them to our prize counter where you can exchange them for a variety of fun prizes and goodies. We regularly update our prize selection to keep things fresh and exciting.
            </p>

            <br/>
            
            <p>
              The prizes we offer can change depending on what we have in stock. Check out the carousel to see examples of some of the awesome prizes we've featured in the past! From small trinkets to bigger items, there's something for everyone.
            </p>

            <br/>

            <p>
             We have a ton of games and videogames for you to play as well! You can check out what we offer <Link to="/games" className="text-white font-semibold hover:underline">here</Link>!
            </p>
          </div>

          <div className="lg:w-[70%]">
            <Carousel images={carouselImages} />
          </div>
        </div>
      </div>
    </section>
  );
}