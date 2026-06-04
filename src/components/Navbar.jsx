import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Performance", path: "/performance" },
    { name: "The Tech", path: "/the-tech" },
    { name: "Results", path: "/results" },
    { name: "Support", path: "/support" },
  ];

  return (
    <nav className="w-full sticky top-0 z-50 border-b border-gray-100 px-6 py-4 flex items-center justify-between font-sans transition-all duration-300 bg-white/90 backdrop-blur-md">
      {/* Brand Logo */}
      <div className="flex items-center">
        <span className="text-3xl font-black tracking-tighter text-black uppercase select-none">
          Kratos
        </span>
      </div>

      {/* Navigation Links */}
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

      {/* Call to Action Button */}
      <div>
        <button className="bg-[#FF5500] cursor-pointer text-white text-xs font-bold tracking-widest uppercase px-6 py-3 rounded-md">
          Shop Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
