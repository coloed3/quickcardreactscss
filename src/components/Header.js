=import React from "react";
import Card from "./Card";

const Header = () => {
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-title">
          <h1>Card heading</h1>
          <div className="header-subtitle">
            <p>adding cards to the heading can be hard</p>
          </div>
        </div>
      </div>
      <Card />
    </div>
  );
};

export default Header;
