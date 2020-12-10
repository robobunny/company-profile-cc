import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";
import { siteData } from "../../siteData";

describe("Footer", () => {
  it("Should render site author", () => {
    const { getByText } = render(<Footer />);
    const author = getByText(new RegExp(`${siteData.author}`));
    expect(author).toBeInTheDocument();
  });
});
