import React from 'react';
import { Gamepad2 } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import Carousel from './Carousel';
import NavigationArrow from './NavigationArrow';
import { useLocation } from 'react-router-dom';

const Parties: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tradeinDetails: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    // Phone validation
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const templateParams = {
          to_email: 'SixREYS@outlook.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.tradeinDetails
        };

        await emailjs.send(
          'YOUR_SERVICE_ID', // Get this from EmailJS dashboard
          'YOUR_TEMPLATE_ID', // Get this from EmailJS dashboard
          templateParams,
          'YOUR_PUBLIC_KEY' // Get this from EmailJS dashboard
        );

        alert('Thank you for your party request! We will contact you soon.');
        
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          tradeinDetails: ''
        });
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Sorry, there was an error sending your request. Please try again or contact us directly.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
         <img src="https://i.imgur.com/JSwNL0C.png" alt="Event Chicken" className="mx-auto mb-4" />
      </div>

      <div className="text-gray-300 space-y-6 mb-12">
        <p>
          There has been a lot of continued interest in our party space rental, so here is a few pictures and rundown or what we have to offer for here at GREYs!
        </p>

        <p>
          Our rates start at <span className="text-white font-semibold">$250 for 2hrs and up to 20 players</span>. That includes same access as a normal day at the arcade (all games on freeplay, console games, as well as prize games, and $2 worth of tokens for each of the 20 players).
        </p>

        <p>
          The time slots for that price are <span className="text-white font-semibold">10-12 Saturday and 11-1 on Sunday</span>, or if you do not mind having the party during public hrs and sharing the space with our wonderful customers, then anytime on those days can also be booked for that starting rate. IF you would like to have your party during normal operating hours and close the arcade to you just your event, it is an additional <span className="text-white font-semibold">$100 ($350 total)</span>.
        </p>

        <p>
          We also offer <span className="text-white font-semibold">double prize tickets</span> for the guests of your party for an additional <span className="text-white font-semibold">$40</span>. This gives the partygoers a chance to earn twice as much from our redemption games, and bag those ticket items everyone has their eyes on in our display case!
        </p>

        <p>
          Also <span className="text-white font-semibold">$50</span> off the price is a deposit and will be refunded at the conclusion of your event, as long as everything is clean when you leave. We also offer a reduced rate of <span className="text-white font-semibold">$5 per player</span> for anyone wishing to stay after the event and play for the rest of the day.
        </p>

        <p>
          Please contact using here using the form below or call us at <span className="text-white font-semibold">(540)-661-8666</span> to begin to plan your event with us!
        </p>
      </div>

      <div className="text-center mb-16">
         <img src="https://imgur.com/Ngy3R8W.png" alt="Event Chicken" className="mx-auto mb-4" />
      </div>

      <h2 className="text-3xl font-bold text-white mb-8 text-center">Book Your Birthday Party</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
              First Name *
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
            {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
              Last Name *
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
            {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
            required
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
            className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
            required
          />
          {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div>
          <label htmlFor="tradeinDetails" className="block text-sm font-medium text-gray-300 mb-2">
            Party Details *
          </label>
          <textarea
            id="tradeinDetails"
            name="tradeinDetails"
            value={formData.tradeinDetails}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
            placeholder="Please provide details about the games, handhelds, or consoles you are looking for, or the games, handhelds, or consoles you would like to trade (name, name of console or handheld, damage, special requests, etc.)"
            required
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-purple-600 hover:bg-pink-700 text-white rounded-md transition-colors"
          >
            Submit Party Request
          </button>
        </div>
      </form>
    </div>
  );
};

const tradeinImages = [
  { url: "https://imgur.com/J9JZ4TN.png", alt: "Hyper low-angled shot of arcade stick at 6R's entertainment yard" },
  { url: "https://imgur.com/QsEVnyW.png", alt: "Low-angled shot of arcade stick and Lindy arcade cabinet at 6R's entertainment yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/370141510_277660371851186_5328819192749088109_n.jpg", alt: "Picture of some of games available for purchase and trade-in at GR's entertainmen yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/405963056_306020055681884_8584549272772571419_n.jpg", alt: "Another picture of some of games available for purchase and trade-in at GR's entertainmen yard" },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/449468653_438775552406333_8465903172928480941_n.jpg", alt: "Gameboy Color being traded-in boxed with some other games including a boxed copy of Perfect Dark for N64." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/370173376_277660715184485_4602905087678029944_n.jpg", alt: "Pokemon games including Pokemon Yellow, Pokemon Red, and Pokemon Dark Sun being traded in at 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/398844317_294766103473946_190448731070271638_n.jpg", alt: "Complete box of Steel Battalion being traded into 6R's entertainment yard (we do not still have this game on the shelf...)." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/439840599_396404836643405_4421939957021148196_n.jpg", alt: "Sega 32x, Nintendo 3DS, and some Gamecube games being traded into the arcade " },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/426354758_352422147708341_3133596068573353228_n.jpg", alt: "Guitar Hero for Xbox 360 and some Xbox 360 games being traded into 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/426226505_352394054377817_5228130841509951101_n.jpg", alt: "Persona, Final Fantasy, Mario, Sonic and Zelda being traded into 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/419678725_334406189509937_807479287255226743_n.jpg", alt: "A bunch of Nintendo Entertainment System games and Nintendo 64 games being traded into 6R's entertainment yard." },
  { url: "https://pub-7b456e1050984218856447be1d9a8efc.r2.dev/404554988_303722489244974_638050161365395662_n.jpg", alt: "Gamecube controller, Gamecube games, and Nintendo 64 game being traded into 6R's entertainment yard." },
];

export default function Tradeins() {
  const location = useLocation();
  const needsScroll = location.state?.scrollToTop ?? false;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    tradeinDetails: ''
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === tradeinImages.length - 1 ? 0 : prev + 1));
    }, 5000); // 5000ms = 5 seconds

    // Cleanup function to clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []); // Empty dependency array means this effect runs once on mount

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      firstName: '',
      lastName: '',
      email: '',
      phone: ''
    };

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    const phoneRegex = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const templateParams = {
          to_email: 'SixREYS@outlook.com',
          from_name: `${formData.firstName} ${formData.lastName}`,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.tradeinDetails
        };

        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          templateParams,
          'YOUR_PUBLIC_KEY'
        );

        alert('Thank you for your request! We will contact you soon.');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          tradeinDetails: ''
        });
      } catch (error) {
        console.error('Error sending email:', error);
        alert('Sorry, there was an error sending your request. Please try again or contact us directly.');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="games" className="py-20 bg-[#0A1929] text-white">
      <NavigationArrow waitForScroll={needsScroll} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <img src="https://i.imgur.com/6XkhKhy.png" alt="Trade-In Chicken" className="mx-auto mb-4" />
        <h2 className="text-4xl font-bold mb-8 text-center">Featured Games Available for Purchase</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 mb-16">
          {/* Text Content - 30% */}
          <div className="lg:w-[50%] text-gray-400">
            <p>
              Browse our extensive collection of games available for purchase, or bring in your own titles to trade. 
            </p>
            <br/>
            <p>
              Exchange your games for something new from our shelves or opt for store credit – the choice is yours!
            </p>
            <br/>
            <p>
              If you have consoles you want to trade, that's something you can do as well! We take consoles as old as the Atari 2600 to consoles as new as the PS5! Like with games, you can either trade them in for store credit or exchange them for something new.
            </p>
            <br/>
            <p>
              We also take console peripherals! Do you have a Wii Fit board you want to trade in? Do you have a full Rock Band instrument set, or even just a microphone? Bring them in and see what they're worth!
            </p>
            <br/>
            <p>
              Disclaimer: All of the items shown in the carousel aren't necessarily still at the arcade, but all of these items are examples of ones that have come into the arcade via trade-in.
            </p>
          </div>

          {/* Carousel - 70% */}
          <div className="lg:w-[70%]">
            <Carousel images={tradeinImages} />
          </div>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 mt-16">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Contact Us About Trade-Ins</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                First Name *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
                required
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                Last Name *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
                required
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="tradeinDetails" className="block text-sm font-medium text-gray-300 mb-2">
              Party Details *
            </label>
            <textarea
              id="tradeinDetails"
              name="tradeinDetails"
              value={formData.tradeinDetails}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              placeholder="Please provide details about the games, handhelds, or consoles you are looking for, or the games, handhelds, or consoles you would like to trade (name, name of console or handheld, damage, special requests, etc.)"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-purple-600 hover:bg-pink-700 text-white rounded-md transition-colors"
            >
              Submit Trade-In Request
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

