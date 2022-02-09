import React from "react";
import logo from "../image/logo.png";

const Logo = () => {
  return (
    <div>
      <div className="logo-div">
        <img className="logo" src={logo} alt="logo" />
      </div>
    </div>
  );
};

export default Logo;
