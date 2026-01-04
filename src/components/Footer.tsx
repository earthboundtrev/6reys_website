import { Phone, MapPin, Clock } from 'lucide-react';
import { Facebook, Instagram, Twitch, Youtube, Link  } from 'lucide-react';


export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Visit Us!</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-purple-500" />
                <p>110B East Washington St., Orange, VA 22960</p>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-purple-500" />
                <p>(540) 661-8866</p>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-500" />
                <div>
                  <p>Monday - Wednesday: CLOSED</p>
                  <p>Thursday: CLOSED</p>
                  <p>Friday and Saturday: 12PM - 10PM</p>
                  <p>Sunday 1PM - 8PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-8 md:pt-0 px-4 md:px-0">
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-300 hover:text-pink-500 transition-colors">Home</a></li>
              <li><a href="/games" className="text-gray-300 hover:text-pink-500 transition-colors">Games</a></li>
              <li><a href="/events" className="text-gray-300 hover:text-pink-500 transition-colors">Events</a></li>

              <li><a href="/prizes" className="text-gray-300 hover:text-pink-500 transition-colors">Prizes</a></li>
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