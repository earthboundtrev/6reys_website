import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';
import { Facebook, Instagram, Twitch, Youtube, Link  } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">Subscribe to get updates about new games and events!</p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-l-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              />
              <button className="px-4 py-2 bg-purple-600 hover:bg-pink-700 text-white rounded-r-md transition-colors">
                Subscribe
              </button>
            </div>
          </div>
          
          <div className="pt-8 md:pt-0 px-4 md:px-0">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="/games" className="text-gray-300 hover:text-pink-500 transition-colors">Games</a></li>
              <li><a href="/parties" className="text-gray-300 hover:text-pink-500 transition-colors">Parties</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-pink-500 transition-colors">Events</a></li>
              <li><a href="/tradeins" className="text-gray-300 hover:text-pink-500 transition-colors">Trade-ins</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Follow Us!</h4>
            <div className="mt-4 flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=100088216744060" className="text-gray-400 hover:text-pink-500">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/sixreys/" className="text-gray-400 hover:text-pink-500">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.twitch.tv/6reys" className="text-gray-400 hover:text-pink-500">
                <Twitch className="h-6 w-6" />
              </a>
              <a href="https://www.youtube.com/@6REYs" className="text-gray-400 hover:text-pink-500">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="https://linktr.ee/6rsentertainmentyard" className="text-gray-400 hover:text-pink-500">
                <Link className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} 6R's Entertainment Yard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}