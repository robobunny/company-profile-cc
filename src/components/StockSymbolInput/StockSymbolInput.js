import React from "react";
import getCompanyProfile from "../../functions/getCompanyProfile/getCompanyProfile";
import styles from "./stockSymbolInput.module.css";

const StockSymbolInput = ({ setDisplayData }) => {
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const stockSymbol = event.target.elements[`stock-symbol-input`].value;
    getCompanyProfile(stockSymbol).then((data) => setDisplayData(data));
  };

  const handleFormReset = (event) => {
    const stockSymbolInput = event.target.elements[`stock-symbol-input`];
    stockSymbolInput.value = "";
    setDisplayData(undefined);
  };

  return (
    <form
      className={styles.form}
      id="stock-symbol-form"
      onSubmit={handleFormSubmit}
      onReset={handleFormReset}
    >
      <label className={styles.label} htmlFor="stock-symbol-input" id="label">
        Enter a stock symbol:
      </label>
      <input
        aria-labelledby="label"
        className={styles.input}
        type="text"
        id="stock-symbol-input"
        name="stock-symbol"
        placeholder="example: AAPL"
      />
      <div>
        <button className="primary" type="submit">
          Search
        </button>
        <button className="secondary" type="reset">
          Clear
        </button>
      </div>
    </form>
  );
};

export default StockSymbolInput;
