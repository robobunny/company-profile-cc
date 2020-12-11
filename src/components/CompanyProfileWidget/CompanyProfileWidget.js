import React, { useState } from "react";
import CompanyInfoDashboard from "../CompanyInfoDashboard/CompanyInfoDashboard";
import StockSymbolInput from "../StockSymbolInput/StockSymbolInput";

const CompanyProfileWidget = () => {
  const [displayData, setDisplayData] = useState(undefined);

  return (
    <div id="company-profile-widget">
      <StockSymbolInput setDisplayData={setDisplayData} />
      <CompanyInfoDashboard displayData={displayData} />
    </div>
  );
};

export default CompanyProfileWidget;
