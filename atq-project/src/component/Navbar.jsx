import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Packages", "Favorite"];

  return (
    <nav className="w-full flex justify-center mt-4 px-4">
      <div className="w-full bg-gray-100 border border-gray-200 rounded-2xl px-6 py-3 flex items-center justify-between">

        {/*  Left: Logo */}
        <div className="flex items-center gap-3 w-[30%]">
          <div className="bg-black text-white w-9 h-9 flex items-center justify-center rounded-lg font-bold">
            A
          </div>
          <span className="font-semibold text-lg">Atravelq</span>
        </div>

        {/*  Center: Links */}
        <div className="hidden md:flex justify-center gap-8 w-[40%]">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-700 hover:text-black font-medium transition"
            >
              {link}
            </a>
          ))}
        </div>

        {/*  Right: Buttons */}
        <div className="hidden md:flex items-center justify-end gap-3 w-[30%]">
          <button className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-200 transition">
            Log in
          </button>
          <button className="px-4 py-2 rounded-lg bg-black text-white hover:bg-gray-800 transition">
            Get started
          </button>
        </div>

        {/*  Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <CiMenuKebab className="text-2xl"/>
          </button>
        </div>
      </div>

      {/*  Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 w-[90%] bg-white border rounded-xl shadow-md p-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a key={link} href="#" className="text-gray-700">
                {link}
              </a>
            ))}
            <button className="border p-2 rounded-lg">Log in</button>
            <button className="bg-black text-white p-2 rounded-lg">
              Get started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}