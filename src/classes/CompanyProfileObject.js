import addThousandsSeparators from "../functions/addThousandsSeparator/addThousandsSeparators";

const addDollarSign = (numString) => {
  if (typeof numString === "number") {
    numString = numString.toString();
  }
  if (numString[0] === "-") {
    return "- $ " + numString.slice(1);
  } else {
    return "$ " + numString;
  }
};

const makePhoneNumber = (numString) => {
  return (
    "+" +
    numString.slice(0, -10) +
    " " +
    numString.slice(-10, -7) +
    "-" +
    numString.slice(-7, -4) +
    "-" +
    numString.slice(-4)
  );
};

export default class CompanyProfileObject {
  constructor(data) {
    this.success = true;
    this.mainInfo = {
      companyName: {
        label: "Company Name",
        value: data.companyName,
      },
      symbol: {
        label: "Stock Symbol",
        value: data.symbol,
      },
      price: {
        label: "Current stock price",
        value: data.price,
      },
      changes: {
        label: "Change",
        value: data.changes,
      },
      website: { label: "Website", value: data.website },
      imageUrl: { label: "Image URL", value: data.image },
    };
    this.stockData = [
      {
        label: "Market Capitalization",
        value: addDollarSign(addThousandsSeparators(data.mktCap)),
      },
      {
        label: "Average Volume",
        value: addThousandsSeparators(data.volAvg),
      },
      {
        label: "52 Week Range",
        value: !!data.range ? data.range : undefined,
      },
      {
        label: "Beta volatility",
        value: !!data.beta ? data.beta : undefined,
      },
      {
        label: "Last Dividend",
        value: !!data.lastDiv
          ? addDollarSign(addThousandsSeparators(data.lastDiv))
          : undefined,
      },
      {
        label: "Discounted Cash Flow (DCF)",
        value: !!data.dcf ? data.dcf : undefined,
      },
      {
        label: "Discounted Cash Flow diff",
        value: !!data.dcfDiff ? data.dcfDiff : undefined,
      },
    ];
    this.exchangeData = [
      {
        label: "Exchange Short Name",
        value: !!data.exchangeShortName ? data.exchangeShortName : undefined,
      },
      {
        label: "Exchange",
        value: !!data.exchange ? data.exchange : undefined,
      },
      {
        label: "Currency",
        value: !!data.currency ? data.currency : undefined,
      },
      {
        label: "International Securities Identification Number (ISIN)",
        value: !!data.isin ? data.isin : undefined,
      },

      {
        label: "Central Index Key (CIK)",
        value: !!data.cik ? data.cik : undefined,
      },
      {
        label:
          "Committee on Uniform Securities Identification Procedures number (CUSIP)",
        value: !!data.cusip ? data.cusip : undefined,
      },
    ];
    this.moreInfo = [
      {
        label: "Description",
        value: !!data.description ? data.description : undefined,
      },
      {
        label: "CEO",
        value: !!data.ceo ? data.ceo : undefined,
      },
      {
        label: "Industry",
        value: !!data.industry ? data.industry : undefined,
      },
      {
        label: "Sector",
        value: !!data.sector ? data.sector : undefined,
      },
      {
        label: "IPO Date",
        value: !!data.ipoDate ? data.ipoDate : undefined,
      },
      {
        label: "Full-time Employees",
        value: !!data.fullTimeEmployees
          ? addThousandsSeparators(data.fullTimeEmployees)
          : undefined,
      },
      {
        label: "Phone number",
        value: !!data.phone ? makePhoneNumber(data.phone) : undefined,
      },
      {
        label: "Address",
        value: !!data.address ? data.address : undefined,
      },
      {
        label: "City",
        value: !!data.city ? data.city : undefined,
      },
      {
        label: "State",
        value: !!data.state ? data.state : undefined,
      },
      { label: "ZIP", value: data.zip },
      {
        label: "Country",
        value: !!data.country ? data.country : undefined,
      },
    ];
  }
}
