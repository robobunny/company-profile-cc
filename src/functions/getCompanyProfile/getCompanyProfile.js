import callFmpApi from "../callFmpApi/callFmpApi";
import CompanyProfileObject from "../../classes/CompanyProfileObject";

const getCompanyProfile = async (stockSymbol) => {
  try {
    const data = await callFmpApi(stockSymbol);
    let companyProfile;
    // some browsers keep the json object in an array
    if (data[0]) {
      companyProfile = new CompanyProfileObject(data[0]);
    } else if (data.companyName) {
      // others and Node.js get rid of the array if there's only one item
      companyProfile = new CompanyProfileObject(data);
    } else {
      throw new Error("There was a problem with the data. Please try again.");
    }
    const { mainInfo } = companyProfile;
    for (let key in mainInfo) {
      if (mainInfo[key].value === undefined) {
        throw new Error("There was a problem with the data. Please try again.");
      }
    }
    return companyProfile;
  } catch (error) {
    return {
      success: false,
      message: error.message,
    };
  }
};

export default getCompanyProfile;
