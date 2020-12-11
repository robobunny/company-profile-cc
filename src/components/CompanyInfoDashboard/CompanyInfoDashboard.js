import React from "react";
import DataUndefined from "./DataUndefined";
import MainInfo from "./MainInfo/MainInfo";
import DataDisplay from "./DataDisplay/DataDisplay";

const styles = {
  paragraph: {
    color: "var(--text-accent)",
    fontWeight: "bold",
    margin: "1rem",
    textAlign: "center",
  },
};

const CompanyInfoDashboard = ({ displayData }) => {
  if (displayData === undefined) {
    return (
      <div>
        <p style={styles.paragraph}>
          Enter a stock symbol above to search for a company's profile!
        </p>
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
        <h2>Company Profile Information:</h2>
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
