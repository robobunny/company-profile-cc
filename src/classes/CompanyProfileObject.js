export default class CompanyProfileObject {
  constructor(data) {
    this.success = true;
    this.mainInfo = {
      companyName: {
        label: "Company Name",
        value: data.companyName || undefined,
      },
      symbol: {
        label: "Stock Symbol",
        value: data.symbol || undefined,
      },
      price: {
        label: "Current stock price",
        value: data.price || undefined,
      },
      changes: {
        label: "Change",
        value: data.changes || undefined,
      },
      website: { label: "Website", value: data.website || undefined },
      imageUrl: { label: "Image URL", value: data.image || undefined },
    };
    this.stockData = [
      {
        label: "Market Capitalization",
        value: data.mktCap,
      },
      {
        label: "Average Volume",
        value: data.volAvg,
      },
      {
        label: "52 Week Range",
        value: data.range,
      },
      {
        label: "Beta volatility",
        value: data.beta,
      },
      {
        label: "Last Dividend",
        value: data.lastDiv,
      },
      {
        label: "Discounted Cash Flow (DCF)",
        value: data.dcf,
      },
      {
        label: "Discounted Cash Flow diff",
        value: data.dcfDiff,
      },
    ];
    this.exchangeData = [
      {
        label: "Exchange Short Name",
        value: data.exchangeShortName,
      },
      {
        label: "Exchange",
        value: data.exchange,
      },
      {
        label: "Currency",
        value: data.currency,
      },
      {
        label: "International Securities Identification Number (ISIN)",
        value: data.isin,
      },

      {
        label: "Central Index Key (CIK)",
        value: data.cik,
      },
      {
        label:
          "Committee on Uniform Securities Identification Procedures number (CUSIP)",
        value: data.cusip,
      },
    ];
    this.moreInfo = [
      {
        label: "Description",
        value: data.description,
      },
      {
        label: "CEO",
        value: data.ceo,
      },
      {
        label: "Industry",
        value: data.industry,
      },
      {
        label: "Sector",
        value: data.sector,
      },
      {
        label: "IPO Date",
        value: data.ipoDate,
      },
      {
        label: "Full-time Employees",
        value: data.fullTimeEmployees,
      },
      {
        label: "Phone number",
        value: data.phone,
      },
      {
        label: "Address",
        value: data.address,
      },
      {
        label: "City",
        value: data.city,
      },
      {
        label: "State",
        value: data.state,
      },
      { label: "ZIP", value: data.zip },
      {
        label: "Country",
        value: data.country,
      },
    ];
  }
}
