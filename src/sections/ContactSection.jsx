import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { toast, Toaster } from 'sonner';

const ContactSection = () => {
  
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [subscribeEmail, setSubscribeEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!formData.email.trim()) {
      toast.error('Please enter a valid email address.');
      return;
    }

    toast.success('Your message has been sent successfully!');
    console.log('Form Data Submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  const handleSubscribeSubmit = (e) => {
    e.preventDefault();

    if (!subscribeEmail.trim()) {
      toast.error('Please enter your email to subscribe.');
      return;
    }

    toast.success('You are now subscribed!');
    console.log('Subscribed Email:', subscribeEmail);
    setSubscribeEmail('');
  };

  return (
    <section className="w-full bg-[#F9FAFB] py-16 px-6 font-sans">
      <Toaster position="top-right" toastOptions={{ duration: 4000 }} />
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* ================= LEFT COLUMN: INFO & SUBSCRIBE ================= */}
        <div className="flex flex-col space-y-8">
          
          {/* Header Texts */}
          <div>
            <span className="text-xs font-black tracking-widest text-[#FF5500] uppercase block mb-2">
              Connect With Us
            </span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tighter text-[#0A1128] uppercase leading-tight">
              Communication Is The Key
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed max-w-md">
              Have a question about our business, or want to see if we match your specific needs? We're always happy to meet new customers!
            </p>
          </div>

          {/* Business Details (Hours & Location) */}
          <div className="space-y-4">
            {/* Hours Detail */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#0A1128] text-white p-3 rounded-none flex items-center justify-center w-12 h-12">
                <Clock size={20} />
              </div>
              <div>
                <h4 className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Hours</h4>
                <p className="text-sm text-gray-700 font-medium">Open today: 09:00 am – 05:00 pm</p>
              </div>
            </div>

            {/* Location Detail */}
            <div className="flex items-center space-x-4">
              <div className="bg-[#0A1128] text-white p-3 rounded-none flex items-center justify-center w-12 h-12">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="text-[11px] font-black tracking-widest text-gray-400 uppercase">Location</h4>
                <p className="text-sm text-gray-700 font-medium">Kratos Performance Hub</p>
              </div>
            </div>
          </div>

          {/* Subscribe Banner Box */}
          <div className="bg-[#030712] p-6 sm:p-8 text-white relative overflow-hidden max-w-lg w-full mx-auto lg:mx-0 shadow-md">
            <h3 className="text-2xl font-black tracking-tight uppercase mb-1">
              Subscribe
            </h3>
            <p className="text-xs text-gray-400 tracking-wide mb-6">
              Get 10% off your first purchase!
            </p>
            
            <form onSubmit={handleSubscribeSubmit} className="flex flex-col sm:flex-row gap-3 w-full">
              <input
                type="email"
                placeholder="Email Address"
                value={subscribeEmail}
                onChange={(e) => setSubscribeEmail(e.target.value)}
                required
                className="bg-[#111827] text-sm text-white placeholder-gray-600 px-4 py-3 flex-grow focus:outline-none border border-transparent focus:border-gray-700 transition-all w-full"
              />
              <button
                type="submit"
                className="bg-[#FF5500] hover:bg-[#e04a00] text-white text-xs font-black tracking-widest uppercase px-6 py-3.5 transition-colors duration-200 shrink-0 w-full sm:w-auto"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>

        {/* ================= RIGHT COLUMN: CONTACT FORM ================= */}
        <div className="bg-white p-6 sm:p-8 rounded-md shadow-xl shadow-gray-200/50 border border-gray-100 max-w-xl w-full justify-self-center lg:justify-self-end">
          <form onSubmit={handleFormSubmit} className="space-y-6">
            
            {/* Name Input */}
            <div>
              <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A1128] transition-all"
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                Email *
              </label>
              <input
                type="email"
                placeholder="email@example.com"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A1128] transition-all"
              />
            </div>

            {/* Message Input */}
            <div>
              <label className="block text-[10px] font-black tracking-widest text-gray-500 uppercase mb-2">
                Message
              </label>
              <textarea
                rows={4}
                placeholder="How can we help?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full border border-gray-200 rounded-sm px-4 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#0A1128] resize-none transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#0A1128] hover:bg-[#111a36] text-white font-black tracking-widest text-base uppercase py-4 transition-colors duration-200 rounded-sm shadow-md"
            >
              Send Message
            </button>

            {/* ReCAPTCHA Note Footer */}
            <p className="text-[9px] font-semibold text-center text-gray-400 tracking-wider uppercase mt-4">
              This site is protected by reCAPTCHA and the Google Privacy Policy.
            </p>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;