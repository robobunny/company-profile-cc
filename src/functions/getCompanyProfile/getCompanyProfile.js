import callFmpApi from "../callFmpApi/callFmpApi";
import CompanyProfileObject from "../../classes/CompanyProfileObject";

const getCompanyProfile = async (stockSymbol) => {
  try {
    const data = await callFmpApi(stockSymbol);
    const companyProfile = new CompanyProfileObject(data);
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
