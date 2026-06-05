import React from "react";

const footerLinks = {
  Packages: ["Hill Stations", "Beach Getaways", "International", "Honeymoon", "Adventure"],
  Company: ["About Us", "Blog", "Careers", "Contact"],
  Favorites: ["Manali", "Goa", "Dubai", "Bali", "Kashmir"],
  Legal: ["Privacy", "Terms", "Cookies"],
};

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 px-8 pt-10 pb-6">

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">

        {/* Brand col */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-7 h-7 bg-gray-900 dark:bg-indigo-500 rounded-md flex items-center justify-center">
              <span className="text-white text-sm font-bold">A</span>
            </div>
            <span className="font-bold text-base text-gray-900 dark:text-gray-50 tracking-tight">
              Atravelq
            </span>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 max-w-xs">
            Welcome to ATravelQ! Your dream destinations, perfectly planned. From hill stations to exotic beaches and international getaways — a package for every traveler and every budget.
          </p>

          <div className="flex gap-2">
            {["Twitter", "Instagram", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                aria-label={social}
                className="w-8 h-8 rounded-md border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-sm"
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        {/* Link cols */}
        {Object.entries(footerLinks).map(([group, links]) => (
          <div key={group}>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
              {group}
            </p>

            <ul className="space-y-2">
              {links.map((link, i) => (
                <li
                  key={i}
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer transition"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
        ))}

      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-100 dark:border-gray-800 pt-5 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-xs text-gray-400 dark:text-gray-500">
          © 2026 ATravelQ. All rights reserved.
        </p>
      </div>

    </footer>
  );
};

export default Footer;