import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import NavigationArrow from './NavigationArrow';
import { init } from '@emailjs/browser';

const Parties: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partyDetails: ''
  });

  const [errors, setErrors] = useState<Record<keyof typeof formData, string>>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    partyDetails: ''
  });

  useEffect(() => {
    try {
      init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
    } catch (error) {
      console.error('Failed to initialize EmailJS');
    }
  }, []);

  const validateForm = () => {
    let isValid = true;
    const newErrors: Record<keyof typeof formData, string> = {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      partyDetails: ''
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

    // Add partyDetails validation
    if (!formData.partyDetails.trim()) {
      newErrors.partyDetails = 'Party details are required';
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
          reply_to: formData.email,
          phone: formData.phone,
          message: formData.partyDetails
        };

        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          templateParams,
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        alert('Thank you for your party request! We will contact you soon.');
        
        // Clear form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          partyDetails: ''
        });
      } catch (error) {
        console.error('Failed to send email');
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

  // Fix type error in inputClassName function
  const inputClassName = (fieldName: keyof typeof formData) => `
    w-full px-4 py-2 rounded-md bg-slate-800 border 
    ${errors[fieldName] ? 'border-red-500' : 'border-slate-700'} 
    text-white focus:outline-none focus:border-pink-500
  `;

  return (
    <div className="min-h-screen bg-[#0A1929]">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <NavigationArrow />
        <div className="text-center mb-16">
           <img src="https://i.imgur.com/JSwNL0C.png" alt="Event Chicken" className="mx-auto mb-4" />
           <h2 className="text-4xl font-bold mb-4 text-center">Have your party at 6R's!</h2>
        </div>

        <div className="flex flex-col md:flex-row items-start gap-8 mb-16">
          <div className="md:w-1/2 text-gray-300 space-y-6">
            <p>
              There has been a lot of continued interest in our party space rental, so here is a rundown of what we have to offer here at 6R's!
            </p>
            
            <p>
              Our rates start at <span className="text-white font-semibold">$250 for 2hrs and up to 20 players</span>. That includes the same access as a normal day at the arcade (all games on freeplay, console games, as well as prize games, and $2 worth of tokens for each of the 20 players).
            </p>

            <p>
              The timeslots for that price are <span className="text-white font-semibold">10-12 Saturday and 11-1 on Sunday</span>, or if you do not mind having the party during public hours and sharing the space with our wonderful customers, then anytime on those days can also be booked for that starting rate. If you would like to have your party during normal operating hours and close the arcade to just your event, it is an additional <span className="text-white font-semibold">$100 ($350 total)</span>.
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
          <div className="md:w-1/2 flex flex-col justify-center items-center">
            <img src="https://imgur.com/Ngy3R8W.png" alt="Event Chicken" className="max-w-full mb-32" />
            <a 
              href="#party-form" 
              className="px-6 py-3 bg-purple-600 hover:bg-pink-700 text-white rounded-md transition-colors"
            >
              Book Your Party Now!
            </a>
          </div>
        </div>

        <h2 id="party-form" className="text-3xl font-bold text-white mb-8 text-center">Book Your Party!</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className={inputClassName('firstName')}
                required
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-500">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className={inputClassName('lastName')}
                required
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-500">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={inputClassName('email')}
              required
            />
            {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="123-456-7890"
              className={inputClassName('phone')}
              required
            />
            {errors.phone && <p className="mt-1 text-sm text-red-500">{errors.phone}</p>}
          </div>

          <div>
            <label htmlFor="partyDetails" className="block text-sm font-medium text-gray-300 mb-2">
              Party Details <span className="text-red-500">*</span>
            </label>
            <textarea
              id="partyDetails"
              name="partyDetails"
              value={formData.partyDetails}
              onChange={handleChange}
              rows={4}
              className="w-full px-4 py-2 rounded-md bg-slate-800 border border-slate-700 text-white focus:outline-none focus:border-pink-500"
              placeholder="Please provide details about your party (date, time, number of guests, special requests, etc.)"
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
    </div>
  );
};

export default Parties;