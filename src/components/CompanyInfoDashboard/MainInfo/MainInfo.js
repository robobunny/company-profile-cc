import React from "react";

const MainInfo = (props) => {
  const { companyName, symbol, price, changes, website, imageUrl } = props.data;

  return (
    <div id="dashboard-main-info">
      <p id="companyName">{companyName.label}</p>
      <h2 aria-labelledby="companyName">{companyName.value}</h2>
      <img src={imageUrl.value} alt={`Company logo for ${companyName.value}`} />
      <h3 id="symbol">{symbol.label}</h3>
      <p aria-labelledby="symbol">{symbol.value}</p>
      <h3 id="price">{price.label}</h3>
      <p aria-labelledby="price">{price.value}</p>
      <h3 id="changes">{changes.label}</h3>
      <p aria-labelledby="changes">{changes.value}</p>
      <h3 id="website">{website.label}</h3>
      <a aria-labelledby="website" href={website.value}>
        {website.value}
      </a>
    </div>
  );
};

export default MainInfo;
