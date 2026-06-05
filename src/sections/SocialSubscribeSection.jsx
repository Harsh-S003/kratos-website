import React, { useState } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter, FaYoutube } from 'react-icons/fa6';
import { toast } from 'sonner';

const SocialSubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter registration logic here
    toast.success(`Subscribed: ${email}`);
  };

  return (
    <section className="w-full bg-white py-16 font-poppins border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* --- Social Icons Section --- */}
        <div className="text-center mb-12 flex flex-col items-center w-full">
          <h2 className="text-[#1e293b] text-2xl font-extrabold uppercase tracking-wider">
            Social
          </h2>
          {/* Sharp Solid Accent Line */}
          <div className="h-[2px] w-12 bg-[#FF5500] mt-3 mb-6" />
          
          {/* Social Platforms Row */}
          <div className="flex items-center justify-center gap-5">
            <a 
              href="#facebook" 
              className="p-3 bg-[#1877F2] text-white hover:opacity-90 transition-opacity duration-150 border border-slate-950 flex items-center justify-center w-10 h-10"
              aria-label="Facebook"
            >
              <FaFacebookF className="w-4 h-4" />
            </a>
            <a 
              href="#instagram" 
              className="p-3 bg-[#E4405F] text-white hover:opacity-90 transition-opacity duration-150 border border-slate-950 flex items-center justify-center w-10 h-10"
              aria-label="Instagram"
            >
              <FaInstagram className="w-4 h-4" />
            </a>
            <a 
              href="#linkedin" 
              className="p-3 bg-[#0077B5] text-white hover:opacity-90 transition-opacity duration-150 border border-slate-950 flex items-center justify-center w-10 h-10"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn className="w-4 h-4" />
            </a>
            <a 
              href="#twitter-x" 
              className="p-3 bg-black text-white hover:opacity-90 transition-opacity duration-150 border border-slate-950 flex items-center justify-center w-10 h-10"
              aria-label="X (Twitter)"
            >
              <FaXTwitter className="w-4 h-4" />
            </a>
            <a 
              href="#youtube" 
              className="p-3 bg-[#FF0000] text-white hover:opacity-90 transition-opacity duration-150 border border-slate-950 flex items-center justify-center w-10 h-10"
              aria-label="YouTube"
            >
              <FaYoutube className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* --- Newsletter Subscription Section --- */}
        <div className="text-center w-full max-w-2xl pt-4 flex flex-col items-center">
          <h3 className="text-[#1e293b] text-3xl font-black tracking-tight mb-3">
            Subscribe
          </h3>
          <p className="text-[#475569] text-xs sm:text-sm font-medium mb-6">
            Get 10% off your first purchase when you sign up for our newsletter!
          </p>

          {/* High-Contrast Rectangular Form */}
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-stretch w-full gap-3 sm:gap-0">
            <input
              type="email"
              required
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-grow bg-white border-2 border-slate-950 px-4 py-3.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:bg-slate-50 transition-colors"
            />
            <button
              type="submit"
              className="bg-[#18191b] hover:bg-black text-white text-xs font-bold uppercase tracking-widest px-8 py-4 border-2 border-slate-950 sm:border-l-0 transition-colors duration-150 text-center whitespace-nowrap cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default SocialSubscribeSection;