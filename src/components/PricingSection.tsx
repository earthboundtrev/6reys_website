import React from 'react';
import { DollarSign } from 'lucide-react';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold bg-gradient-to-r text-white bg-clip-text text-transparent">
            Gaming Passes
          </h2>
          <p className="mt-4 text-gray-300">
            Choose your perfect pass and start gaming!
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            {
              name: "Hourly Pass",
              price: "$7",
              duration: "For a Full Hour!",
              features: [
                "Access to all arcade machines",
                "Perfect for quick sessions",
                "Add an initial 20 tokens for an extra $3!",
                "Add more tokens at any time! 4/$1 or 24/$5!"
              ]
            },
            {
              name: "Day Pass",
              price: "$12",
              duration: "For a Full Day!",
              features: [
                "Unlimited gaming all day",
                "In & out privileges",
                "Add an initial 20 tokens for an extra $3!",
                "Add more tokens at any time! 4/$1 or 24/$5!"
              ]
            },
            {
              name: "Thursday Special!",
              price: "$8",
              duration: "Deal offered every Thursday!",
              features: [
                "Unlimited gaming",
                "In & out privileges",
                "Add 20 tokens for an extra $3!",
                "Add more tokens at any time! 4/$1 or 24/$5!"
              ]
            }
          ].map((plan) => (
            <div
              key={plan.name}
              className="relative bg-slate-800 rounded-lg overflow-hidden border border-slate-700 hover:border-pink-500 transition-colors"
            >
              <div className="p-8">
                <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  <span className="ml-2 text-gray-400">{plan.duration}</span>
                </div>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <DollarSign className="h-5 w-5 text-pink-500 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}