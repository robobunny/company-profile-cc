import React from "react";
import getCompanyProfile from "../../functions/getCompanyProfile/getCompanyProfile";

const StockSymbolInput = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const stockSymbol = event.target.elements[`stock-symbol-input`].value;
    getCompanyProfile(stockSymbol);
  };

  return (
    <form id="stock-symbol-form" onSubmit={handleSubmit}>
      <label htmlFor="stock-symbol-input">
        Enter a stock symbol:
        <input
          type="text"
          id="stock-symbol-input"
          name="stock-symbol"
          placeholder="example: AAPL"
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default StockSymbolInput;
