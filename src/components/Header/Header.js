import React from "react";
import ThemeSelector from "../ThemeSelector/ThemeSelector";
import { siteData } from "../../siteData";
import styles from "./header.module.css";

const Header = () => {
  const { title, description } = siteData;

  return (
    <header className={styles.header}>
      <div className={styles.headerInfo}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <ThemeSelector />
    </header>
  );
};

export default Header;
