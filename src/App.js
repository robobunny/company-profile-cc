import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import style from "./App.module.css";
import StockSymbolInput from "./components/StockSymbolInput/StockSymbolInput";

const App = () => {
  return (
    <div className={style.appRoot}>
      <p hidden={true}>The App has rendered</p>
      <Header />
      <div className={style.mainContent}>
        <StockSymbolInput />
      </div>
      <Footer />
    </div>
  );
};

export default App;
