import React from "react";
import { render } from "@testing-library/react";
import MainInfo from "./MainInfo";
import { fakeCompanyProfile } from "../../../classes/fakeApiDataForTests";

describe("MainInfo component", () => {
  test("Displays all the keys", () => {
    const { mainInfo } = fakeCompanyProfile;
    const { getByText, getByLabelText, getByAltText } = render(
      <MainInfo data={mainInfo} />
    );
    expect(getByText(mainInfo.companyName.value)).toBeInTheDocument();
    expect(getByText(mainInfo.symbol.label)).toBeInTheDocument();
    expect(getByLabelText(mainInfo.symbol.label)).toBeInTheDocument();
    expect(getByText(mainInfo.price.label)).toBeInTheDocument();
    expect(getByLabelText(mainInfo.price.label)).toBeInTheDocument();
    expect(getByText(mainInfo.changes.label)).toBeInTheDocument();
    expect(getByLabelText(mainInfo.changes.label)).toBeInTheDocument();
    expect(getByText(mainInfo.website.label)).toBeInTheDocument();
    expect(getByLabelText(mainInfo.website.label)).toBeInTheDocument();
    expect(
      getByAltText(new RegExp(`${mainInfo.companyName.value}`, "i"))
    ).toBeInTheDocument();
  });
});
