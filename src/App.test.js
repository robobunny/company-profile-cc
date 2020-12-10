import { render } from "@testing-library/react";
import App from "./App";
import { siteData } from "./siteData";

describe("App", () => {
  it("renders correctly", () => {
    const { getByText } = render(<App />);
    const heading = getByText("The App has rendered");
    expect(heading).toBeInTheDocument();
  });
});
