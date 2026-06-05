import { FaXTwitter, FaYoutube, FaInstagram } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { Link } from "react-router-dom";
const NAV_LINKS = [
  { label: "Technical Specs", href: "#specs" },
  { label: "Warranty", href: "#warranty" },
];

const COMPANY_LINKS = [
  // { label: "About", href: "#about" },
  // { label: "Contact", href: "#contact" },
  // { label: "Careers", href: "#careers" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
    { label: 'Privacy', href: '/privacy-policy' },
];

const LEGAL_LINKS = [
  { label: "Privacy", href: "#privacy" },
  { label: "Terms", href: "#terms" },
];

const SOCIALS = [
  { icon: FaXTwitter, href: "#twitter", label: "X / Twitter" },
  { icon: FaInstagram, href: "#instagram", label: "Instagram" },
  { icon: FaYoutube, href: "#youtube", label: "YouTube" },
  { icon: TbWorld, href: "#website", label: "Website" },
];

const linkClass =
  "text-sm font-medium text-gray-400 hover:text-[#FF5500] transition-colors duration-200";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      className="w-full bg-[#030712] text-white font-sans border-t border-gray-900"
    >
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-12 flex flex-col md:flex-row justify-between gap-12">
        {/* Brand */}
        <div className="flex flex-col gap-3 shrink-0">
          <img
            src="/logo.png"
            alt="Kratos Performance Systems logo"
            className="h-10 w-auto bg-white p-2 rounded-sm"
          />
          <p className="text-xs text-gray-500 mt-3 max-w-[200px] leading-relaxed">
            Built for athletes who don't compromise.
          </p>
        </div>

        {/* Link columns + socials */}
        <div className="flex flex-wrap gap-12 md:gap-16 md:justify-end">
          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black tracking-widest text-gray-600 uppercase mb-1">
              Navigation
            </h4>
            {NAV_LINKS.map(({ label, href }) => (
              <a key={href} href={href} className={linkClass}>
                {label}
              </a>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black tracking-widest text-gray-600 uppercase mb-1">
              Company
            </h4>
            {COMPANY_LINKS.map(({ label, href }) =>
              href.startsWith("/") ? (
                <Link key={href} to={href} className={linkClass}>
                  {label}
                </Link>
              ) : (
                <a key={href} href={href} className={linkClass}>
                  {label}
                </a>
              ),
            )}
          </div>

          {/* Socials */}
          <div className="flex flex-col gap-3">
            <h4 className="text-xs font-black tracking-widest text-gray-600 uppercase mb-1">
              Follow Us
            </h4>
            <div className="flex items-center gap-4 mt-1">
              {SOCIALS.map(({ icon: Icon, href, label }) => (
                <a
                  key={href}
                  href={href}
                  aria-label={label}
                  className="text-gray-400 hover:text-[#FF5500] transition-colors duration-200"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-900/60 w-full" />

      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <p className="text-[10px] font-mono tracking-widest text-gray-600 uppercase">
          © 2026 Kratos Performance Systems. Engineered for precision.
        </p>
        <div className="flex gap-6">
          {LEGAL_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              className="text-[10px] font-mono tracking-widest text-gray-600 uppercase hover:text-gray-300 transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
