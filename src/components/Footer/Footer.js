import React from "react";
import { siteData } from "../../siteData";
import style from "./footer.module.css";

const Footer = () => {
  const { author } = siteData;

  return (
    <footer className={style.footer}>
      <p>This web app was built by {author}</p>
    </footer>
  );
};

export default Footer;
