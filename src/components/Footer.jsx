import { Globe, MessageSquare, Video } from 'lucide-react';

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="w-full bg-[#030712] text-white font-sans border-t border-gray-900"
    >
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-10">
        
        {/* Left Side: Brand Identity */}
        <div className="flex flex-col gap-1">
          <span className="text-4xl font-black tracking-tighter text-white uppercase select-none">
            Kratos
          </span>
          <span className="text-xs font-bold tracking-widest text-[#FF5500] uppercase">
            Performance Systems
          </span>
        </div>

        {/* Right Side: Links and Socials */}
        <div className="flex flex-col sm:flex-row gap-12 sm:gap-16 md:self-end">
          
          {/* Navigation Links Column */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-1">
              Navigation
            </h4>
            <a href="#specs" className="text-sm font-medium text-gray-300 hover:text-[#FF5500] transition-colors duration-200">
              Technical Specs
            </a>
            <a href="#warranty" className="text-sm font-medium text-gray-300 hover:text-[#FF5500] transition-colors duration-200">
              Warranty
            </a>
          </div>

          {/* Follow Us Column */}
          <div className="flex flex-col items-start md:items-end gap-3">
            <h4 className="text-xs font-black tracking-widest text-gray-400 uppercase mb-1">
              Follow Us
            </h4>
            <div className="flex items-center gap-4">
              <a href="#globe" className="text-gray-300 hover:text-[#FF5500] transition-colors duration-200" aria-label="Website">
                <Globe size={20} strokeWidth={2} />
              </a>
              <a href="#chat" className="text-gray-300 hover:text-[#FF5500] transition-colors duration-200" aria-label="Community">
                <MessageSquare size={20} strokeWidth={2} />
              </a>
              <a href="#video" className="text-gray-300 hover:text-[#FF5500] transition-colors duration-200" aria-label="Videos">
                <Video size={20} strokeWidth={2} />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Thin Divider Line */}
      <div className="border-t border-gray-900/60 w-full" />

      {/* Bottom Sub-Footer: Copyright */}
      <div className="max-w-7xl mx-auto px-6 py-6 text-left">
        <p className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">
          © 2026 Kratos Performance Systems. Engineered for precision.
        </p>
      </div>
    </footer>
  );
};

export default Footer;