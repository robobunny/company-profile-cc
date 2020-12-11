import React from "react";
import makeKebobCase from "../../../functions/makeKebobCase/makeKebobCase";
import styles from "./dataDisplay.module.css";

const DataDisplay = ({ data, sectionTitle }) => {
  const MakeDataItem = ({ item }) => {
    const kebabLabel = makeKebobCase(item.label);
    return (
      <div className={styles.infoBox}>
        <h3 id={kebabLabel}>{item.label}</h3>
        <p aria-labelledby={kebabLabel}>{item.value}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>{sectionTitle}</h2>
      <div className={styles.displayInfo}>
        {data.map((item, index) => (
          <MakeDataItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default DataDisplay;
