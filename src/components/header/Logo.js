import React from "react";

import BrandLogo from "images/amazon-logo.png";
import { Link } from "react-router-dom";

import "./Logo.scss";

function Logo({ country = "in" }) {
  return (
    <div>
      <img src={BrandLogo} className="logo__img" alt="Amazon" />
      <span>{country}</span>
    </div>
  );
}

export default Logo;
