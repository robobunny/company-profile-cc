import React from "react";
import { render } from "@testing-library/react";
import Header from "./Header";
import { siteData } from "../../siteData";

describe("Header", () => {
  test("Should render site title amd description", () => {
    const { getByRole, getByText } = render(<Header />);
    const title = getByRole("heading", { name: siteData.title });
    const description = getByText(siteData.description);
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
