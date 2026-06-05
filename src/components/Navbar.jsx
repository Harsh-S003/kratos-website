import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", path: "/" },
    // { name: "Performance", path: "/performance" },
    // { name: "The Tech", path: "/the-tech" },
    // { name: "Results", path: "/results" },
    // { name: "Support", path: "/support" },
    // {name: "Order Forms", path: "/order-forms"}
    {name: "Technical Data", path: "/technical-data"},
    {name: "Marketing", path: "/marketing"},
    {name: "Non-CF Insole" , path: "/non-cf-insole"},
  ];

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between font-sans transition-all duration-300 bg-white/90 backdrop-blur-md">
      {/* Brand Logo */}
      <div className="flex items-center">
        <NavLink to="/" className="inline-flex items-center">
          <img src="/logo.png" alt="Kratos" className="h-8 w-auto" />
        </NavLink>
      </div>

      {/* Navigation Links - Desktop */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `text-sm font-medium tracking-wide transition-all duration-200 pb-1 border-b-2 uppercase ${
                isActive
                  ? "text-[#FF5500] border-[#FF5500]"
                  : "text-gray-500 border-transparent hover:text-black"
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </div>

      {/* Call to Action Button - Desktop */}
      <div className="hidden md:block">
        <NavLink
          to="/order-forms"
          className="bg-[#FF5500] inline-block cursor-pointer text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md"
        >
          Order Forms
        </NavLink>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden flex flex-col space-y-1.5 focus:outline-none"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? "opacity-0" : ""}`}></span>
        <span className={`block w-6 h-0.5 bg-black transition-all ${mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 md:hidden">
          <div className="flex flex-col space-y-0">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide transition-all duration-200 px-6 py-3 uppercase border-l-4 ${
                    isActive
                      ? "text-[#FF5500] border-[#FF5500] bg-orange-50"
                      : "text-gray-500 border-transparent hover:text-black hover:bg-gray-50"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <div className="px-6 py-3 border-t border-gray-100">
              <button className="w-full bg-[#FF5500] cursor-pointer text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
