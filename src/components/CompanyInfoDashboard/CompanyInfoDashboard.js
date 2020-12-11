import React from "react";
import DataUndefined from "./DataUndefined";
import MainInfo from "./MainInfo/MainInfo";
import DataDisplay from "./DataDisplay/DataDisplay";

const CompanyInfoDashboard = ({ displayData }) => {
  if (displayData === undefined) {
    return (
      <div>
        <p>Enter a stock symbol above to search for a company's profile!</p>
      </div>
    );
  } else if (!displayData.success) {
    return (
      <div>
        <DataUndefined data={displayData} />
      </div>
    );
  } else {
    return (
      <div>
        <MainInfo data={displayData.mainInfo} />
        <DataDisplay
          sectionTitle="Stock Data"
          data={displayData.stockData}
          key={0}
        />
        <DataDisplay
          sectionTitle="More Info"
          data={displayData.moreInfo}
          key={1}
        />
        <DataDisplay
          sectionTitle="Exchange Data"
          data={displayData.exchangeData}
          key={2}
        />
      </div>
    );
  }
};

export default CompanyInfoDashboard;
