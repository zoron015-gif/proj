"use client";

import { useState } from "react";

type Store = [string, string, string, string, string[], boolean?, string?];

const stores: Store[] = [
  ["Sari-Sari / Minimart / Grocery Stores", "Sari-Sari / Minimart / Grocery Stores", "/store/grocery.jpg", "Everyday essentials", ["Product and inventory tracking", "Fast and reliable checkout", "Sales reports and insights", "Simple tools for growing stores"], false, "Sell and manage everyday essentials with simple inventory, checkout, and sales tools."],
  ["Pharmacy", "Pharmacy", "/store/pharma.jpg", "Health and wellness", ["Medicine inventory management", "Prescription and sales tracking", "Expiry date monitoring", "Fast and secure checkout"], false, "Manage medicines, prescriptions, and expiry dates while keeping every transaction organized."],
  ["Hardware & Construction", "Hardware & Construction", "/store/hardware.jpg", "Tools and supplies", ["Tools and materials catalog", "Stock and supplier tracking", "Project-ready quotations", "Reliable checkout and reports"], false, "Keep tools, materials, suppliers, and project quotations organized in one reliable system."],
  ["Motorcycle Automotive & Bike Shops", "Motorcycle Automotive & Bike Shops", "/store/motor.jpg", "Parts and services", ["Parts and service tracking", "Vehicle repair job management", "Customer and warranty records", "Sales and inventory reports"], false, "Track parts, repair jobs, customer records, and services for a smoother automotive business."],
  ["Agrivet", "Agrivet", "/store/agri.jpg", "Farming essentials", ["Feeds and farm supply tracking", "Livestock product management", "Supplier and stock monitoring", "Sales reports for your store"], false, "Manage farm supplies, feeds, livestock products, and suppliers with ease."],
  ["Pet Shop", "Pet Shop", "/store/petshop.jpg", "Everything for pets", ["Pet food and supplies catalog", "Stock and expiry monitoring", "Customer purchase history", "Fast checkout and sales reports"], false, "Organize pet products, monitor stock, and give customers a faster checkout experience."],
  ["Computer Accessories & Gadgets", "Computer Accessories & Gadgets", "/store/computer.jpg", "Tech and accessories", ["Serial number tracking", "Accessories and inventory management", "Warranty and repair records", "Fast checkout and sales reports"], false, "Sell and manage computer accessories, electronics, and gadgets with simple product tracking."],
  ["Rice Grains & Feeds Trading", "Rice Grains & Feeds Trading", "/store/rice.jpg", "Rice, grains and feeds", ["Bulk product and stock tracking", "Supplier and purchase management", "Wholesale order monitoring", "Sales reports and insights"], false, "Track bulk rice, grains, feeds, purchases, and wholesale orders from one place."],
  ["Computer & Laptop", "Computer & Laptop", "/store/computer and laptops.jpg", "Computers and laptops", ["Serial number and warranty tracking", "Computer and laptop inventory", "Repair and service management", "Sales reports and insights"], false, "Manage computers, laptops, repairs, serial numbers, and warranties with confidence."],
];

const storeLogos = [
  "/storelogo/groc.png",
  "/storelogo/pharma.png",
  "/storelogo/hardware.png",
  "/storelogo/motor.png",
  "/storelogo/agrivet.png",
  "/storelogo/petshop.png",
  "/storelogo/gadget.png",
  "/storelogo/rice.png",
  "/storelogo/computer%20and%20laptop.png",
];
const clientLogos = [
  "Outback_Servo.png",
  "Poppers_Pop.png",
  "Verified_Lounge.png",
  "SeaOil.png",
  "Soul_Sierra.png",
  "Black_Smokehaus.png",
  "Steezy_Gadgets_Hub_CDO.png",
  "HestiaPrime_Pharmacy_Minimart.png",
  "TGP.png",
  "Tapawarma.png",
  "Petron.png",
  "The_Perfume_Refilling_Station.png",
  "ArgaCool_Auto_Services.png",
  "Beaut6Derm.png",
  "Bulasa_Mangroves_Beach_Resort_and_Restaurant.png",
];

const storeCardColors = [
  "#f5d8c8",
  "#f1dfe6",
  "#dfeef8",
  "#e7d6f7",
  "#dff5d9",
  "#f7efd0",
  "#d7edf7",
  "#f6e7c7",
  "#d8eae7",
];

export default function Home() {
  const [selected, setSelected] = useState(6);
  const store = stores[selected];

  return (
    <main className="page">
      <section className="chooser" aria-label="Choose your industry">
        <header className="chooser-header">
          <div className="title-wrap">
            <span className="title-line" />
            <div className="title-copy">
              <h1>Choose Your <span>Industry</span></h1>
              <p>Select the type of business you operate</p>
              <span className="title-accent" />
            </div>
            <span className="title-line" />
          </div>
        </header>
        <div className="chooser-body">
          <div className="store-grid">
            {stores.map((item, index) => (
              <button
                key={item[0]}
                className={`store-option ${selected === index ? "selected" : ""}`}
                onClick={() => setSelected(index)}
                style={{ backgroundColor: selected === index ? "#ffffff" : storeCardColors[index % storeCardColors.length] }}
              >
                <div className="store-card-inner">
                  <div className="store-icon-wrap" style={{ backgroundColor: selected === index ? "#f7f9fb" : storeCardColors[index % storeCardColors.length] }}>
                    <img className="store-photo" src={storeLogos[index]} alt="" />
                  </div>
                  <strong>{item[1]}</strong>
                  <span className={`store-card-arrow ${selected === index ? "selected" : ""}`} aria-hidden="true">
                    ›
                  </span>
                </div>
              </button>
            ))}
          </div>
          <aside className="preview">
            <img className="preview-photo" src={store[2]} alt={`${store[0]} storefront`} />
            <h2>{store[0]}</h2>
            <p className={`preview-copy ${store[5] ? "coming-soon-copy" : ""}`}>
              {store[5] ? store[3] : "Complete POS Solution for Your Store"}
            </p>
            <p className="preview-details">{store[6]}</p>
            <h3>Key features</h3>
            <ul>
              {store[4].map((feature) => <li key={feature}>{feature}</li>)}
            </ul>
            <button className="continue" disabled={Boolean(store[5])}>
              {store[5] ? store[3] : "Access Your Store"} <span>{store[5] ? "•" : "→"}</span>
            </button>
            <section className="trusted" aria-label="Trusted by retailers">
              <p>Trusted by retailers</p>
              <div className="logo-marquee">
                <div className="logo-track">
                  {[...clientLogos, ...clientLogos].map((logo, index) => (
                    <img
                      key={`${logo}-${index}`}
                      src={`/client-logos/${logo}`}
                      alt=""
                      aria-hidden="true"
                    />
                  ))}
                </div>
              </div>
            </section>
          </aside>
        </div>
      </section>
    </main>
  );
}
