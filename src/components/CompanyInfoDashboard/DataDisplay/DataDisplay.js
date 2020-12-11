import React from "react";
import makeKebobCase from "../../../functions/makeKebobCase/makeKebobCase";

const DataDisplay = ({ data, sectionTitle }) => {
  const MakeDataItem = ({ item }) => {
    const kebabLabel = makeKebobCase(item.label);
    return (
      <div>
        <h3 id={kebabLabel}>{item.label}</h3>
        <p aria-labelledby={kebabLabel}>{item.value}</p>
      </div>
    );
  };

  return (
    <div>
      <h2>{sectionTitle}</h2>
      {data.map((item, index) => (
        <MakeDataItem item={item} key={index} />
      ))}
    </div>
  );
};

export default DataDisplay;
