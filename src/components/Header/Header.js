import React from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { siteData } from "../../siteData";
import style from "./header.module.css";

const Header = () => {
  const { title, description } = siteData;

  return (
    <header className={style.header}>
      <h1>{title}</h1>
      <p>{description}</p>
      <ThemeSelector />
    </header>
  );
};

export default Header;
