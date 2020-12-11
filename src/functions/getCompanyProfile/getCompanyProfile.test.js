import getCompanyProfile from "./getCompanyProfile";
import callFmpApi from "../callFmpApi/callFmpApi";
import {
  fakeCompanyProfile,
  fakeApiData,
  fakeBareBonesApiData,
} from "../../classes/fakeApiDataForTests";
import CompanyProfileObject from "../../classes/CompanyProfileObject";

jest.mock("../callFmpApi/callFmpApi", () => jest.fn());

describe("getCompanyProfile", () => {
  test("gets the company profile", async () => {
    callFmpApi.mockResolvedValue(fakeApiData);
    const companyProfile = await getCompanyProfile("AAPL");
    expect(companyProfile).toEqual(fakeCompanyProfile);
  });

  test("returns an error status object when the response data isn't the right shape", async () => {
    callFmpApi.mockResolvedValue({ foo: "bar", baz: "luhrmann" });
    const companyProfile = await getCompanyProfile("AAPL");
    expect(companyProfile.success).toBe(false);
  });

  test("doesn't cause an error as long as the main info is there", async () => {
    callFmpApi.mockResolvedValue(fakeBareBonesApiData);
    const companyProfile = await getCompanyProfile("AAPL");
    expect(companyProfile).toEqual(expect.any(CompanyProfileObject));
  });
});
