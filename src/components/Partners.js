import React from "react";
import "./Partners.css";

const Partners = () => {
  const partners = [
    { name: "Mobiloitte Technologies", desc: "Driving technological advancements.", logo: "M" },
    { name: "Disney Enterprises", desc: "Pioneering industry innovations.", logo: "Disney" },
    { name: "LinkedIn", desc: "Building strong professional networks.", logo: "LinkedIn" },
  ];

  return (
    <section className="partners">
      <h2>Collaborative Partners</h2>
      <p>We collaborate with industry-leading partners to drive innovation and excellence.</p>

      <div className="partner-list">
        {partners.map((partner, index) => (
          <div key={index} className="partner-card">
            <h3>{partner.logo}</h3>
            <h4>{partner.name}</h4>
            <p>{partner.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
