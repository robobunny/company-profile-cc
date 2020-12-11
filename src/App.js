import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import style from "./App.module.css";
import CompanyProfileWidget from "./components/CompanyProfileWidget/CompanyProfileWidget";

const App = () => {
  return (
    <div className={style.appRoot}>
      <p hidden={true}>The App has rendered</p>
      <Header />
      <div className={style.mainContent}>
        <CompanyProfileWidget />
      </div>
      <Footer />
    </div>
  );
};

export default App;
