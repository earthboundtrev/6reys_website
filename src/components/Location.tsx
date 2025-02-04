import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MapPin className="h-12 w-12 text-pink-500 mx-auto mb-4" />
          <h2 className="text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Located in the heart of Orange, Virginia, where we bring high-quality classic and modern gaming to you at an incredible price!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-pink-500 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-400">110B East Washington St. <br />Orange, VA 22960</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Clock className="h-6 w-6 text-pink-500 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Hours</h3>
                <p className="text-gray-400">
                  Monday - Wednesday: CLOSED <br />
                  Thursday: 12PM - 8PM <br />
                  Friday and Saturday: 12PM - 10PM <br />
                  Sunday: 1PM - 8PM <br/>
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-pink-500 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-400">(540) 661-8866</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-pink-500 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-400">SIXREYS@outlook.com</p>
              </div>
            </div>
          </div>

          
          
          <div className="h-96 bg-gray-800 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3133.389926303876!2d-78.11380382409428!3d38.247261671869914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b411ff09f29bed%3A0x8529b1bfcc02a7a!2s6R%E2%80%99s%20Entertainment%20Yard!5e0!3m2!1sen!2sus!4v1729732056283!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}