import React from "react";
import { render } from "@testing-library/react";
import DataDisplay from "./DataDisplay";
import { fakeCompanyProfile } from "../../../classes/fakeApiDataForTests";

describe("DataDisplay component", () => {
  test("Displays all the keys", () => {
    const { moreInfo } = fakeCompanyProfile;
    const { getByText, getByLabelText } = render(
      <DataDisplay data={moreInfo} />
    );
    for (let item of moreInfo) {
      expect(getByLabelText(item.label)).toBeInTheDocument();
      expect(getByText(item.label)).toBeInTheDocument();
    }
  });
});
