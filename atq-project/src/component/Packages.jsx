import React from "react";
import PackageCard from "./PackageCard";
import "./Packages.css";

const packages = [
  {
    id: 1,
    title: "Goa Beach Tour",
    location: "Goa, India",
    price: "12,999",
    image:
      "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
  },
  {
    id: 2,
    title: "Manali Adventure",
    location: "Himachal Pradesh",
    price: "15,999",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb"
  },
  {
    id: 3,
    title: "Kashmir Paradise",
    location: "Jammu & Kashmir",
    price: "19,999",
    image:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b"
  }
];

const Packages = () => {
  return (
    <section className="packages-section">
      <h2>Popular Packages</h2>

      <div className="packages-container">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.id}
            title={pkg.title}
            location={pkg.location}
            price={pkg.price}
            image={pkg.image}
          />
        ))}
      </div>
    </section>
  );
};

export default Packages;