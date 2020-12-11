import React from "react";
import { siteData } from "../../siteData";
import style from "./header.module.css";

const Header = () => {
  const { title, description } = siteData;

  return (
    <header className={style.header}>
      <h1>{title}</h1>
      <p>{description}</p>
    </header>
  );
};

export default Header;
