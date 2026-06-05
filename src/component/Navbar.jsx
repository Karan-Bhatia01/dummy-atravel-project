import React, { useEffect, useState } from "react";
import { CiMenuFries } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = [
    { title: "Home" },
    { title: "About" },
    {
      title: "Packages",
      items: ["Hill Stations", "Beach Getaways", "International Tours"],
    },
    {
      title: "Favorite",
      items: ["Honeymoon", "Family Trips", "Adventure"],
    },
  ];

  const isSignupPage = location.pathname === "/signup";

  return (
    <>
      <nav
        className={`w-full flex items-center p-5 text-base font-bold fixed top-0 left-0 z-50 transition-all duration-300 
        ${scrolled ? "bg-black/80 backdrop-blur-md shadow-lg" : "bg-transparent"}
        ${isSignupPage ? "text-black" : "text-white"}`}
      >
        {/* Logo */}
        <div className="w-[20%]">
          <h3 className="text-xl">Atravelq</h3>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex flex-1 justify-center gap-8">
          {menu.map((section, index) => (
            <div key={index} className="relative group cursor-pointer">
              
              {/* Title */}
              <div className="flex items-center">
                {section.title}
                {section.items && (
                  <RiArrowDropDownLine className="text-2xl" />
                )}
              </div>

              {/* Dropdown (only if items exist) */}
              {section.items && (
                <div className="absolute left-0 top-full mt-2 hidden group-hover:block bg-white text-black shadow-lg rounded-md p-3 w-52">
                  {section.items.map((item, i) => (
                    <p key={i} className="p-2 hover:bg-gray-100">
                      {item}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}

          <CiMenuFries className="text-2xl cursor-pointer" />
        </div>

        {/* Contact */}
        <div className="flex items-center gap-2 ml-auto">
          <FaWhatsapp />
          <p className="hidden sm:block">+91 9876543456</p>

          <button
            className="border px-4 py-2 rounded-4xl transition hover:scale-105"
            onClick={() => navigate("/signup")}
          >
            Signup
          </button>

          <CiMenuFries className="text-2xl cursor-pointer md:hidden" />
        </div>
      </nav>
    </>
  );
};

export default Navbar;