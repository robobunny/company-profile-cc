import React from "react";
import { siteData } from "../../siteData";

const Header = () => {
  const { title, description } = siteData;

  return (
    <header>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
