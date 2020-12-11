import React from "react";

const DataUndefined = ({ data }) => {
  return (
    <div>
      <h2>Error</h2>
      <p>{data.message}</p>
    </div>
  );
};

export default DataUndefined;
