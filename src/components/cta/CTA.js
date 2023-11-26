import React from "react";
import { Link } from "react-router-dom";
import "./CTA.css";
const CTA = () => {
  return (
    <div className="cta">
      <h1>Become A World Class Digital Marketer</h1>

      <Link to="/cohort">
        <button>Join our Next Cohort</button>
      </Link>
    </div>
  );
};

export default CTA;
