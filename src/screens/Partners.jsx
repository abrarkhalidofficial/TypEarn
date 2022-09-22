import React from "react";
import partners from "../assets/partners.png";
import partnerslogo from "../assets/partnerslogo.png";

export function Partners() {
  return (
    <section id="partners" className="partners">
      <div className="partners__heading">PARTNERS</div>
      <div className="partners__content">
        <img
          src={partnerslogo}
          alt="partnerslogo"
          className="partners__content__left"
        />
        <img
          src={partners}
          alt="partners"
          className="partners__content__right"
        />
      </div>
    </section>
  );
}
