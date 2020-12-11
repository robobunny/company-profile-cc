import React from "react";
import styles from "./mainInfo.module.css";

const MainInfo = (props) => {
  const { companyName, symbol, price, changes, website, imageUrl } = props.data;
  const getChangeSymbol = () => {
    if (changes.value > 0) {
      return "+";
    } else if (changes.value < 0) {
      return "";
    } else {
      return "±";
    }
  };
  const getRedGreenStyles = (value) => {
    if (value > 0) {
      return `${styles.positive}`;
    } else if (value < 0) {
      return `${styles.negative}`;
    } else {
      return "";
    }
  };
  return (
    <div className={styles.mainInfo} id="dashboard-main-info">
      <div className={styles.mainInfoHeader}>
        <img
          className={styles.image}
          src={imageUrl.value}
          alt={`Company logo for ${companyName.value}`}
        />
        <h2 className={styles.companyName}>{companyName.value}</h2>
        <div className={`${styles.infoBox}`}>
          <h3 id="symbol">{symbol.label}</h3>
          <p aria-labelledby="symbol">{symbol.value}</p>
        </div>
      </div>
      <div className={styles.otherMainInfo}>
        <div className={`${styles.infoBox}`}>
          <h3 id="price">{price.label}</h3>
          <p className={styles.big} aria-labelledby="price">
            $ {price.value}
          </p>
        </div>
        <div
          className={`${styles.infoBox} ${getRedGreenStyles(changes.value)}`}
        >
          <h3 className={getRedGreenStyles(changes.value)} id="changes">
            {changes.label}
          </h3>
          <p
            className={`${styles.big} ${getRedGreenStyles(changes.value)}`}
            aria-labelledby="changes"
          >
            {getChangeSymbol()}
            {changes.value}
          </p>
        </div>
        <div className={`${styles.infoBox}`}>
          <h3 id="website">{website.label}</h3>
          <a aria-labelledby="website" href={website.value}>
            {website.value}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
