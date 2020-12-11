import { render } from "@testing-library/react";
import App from "./App";
import { siteData } from "./siteData";

describe("App", () => {
  test("renders correctly", () => {
    const { getByText } = render(<App />);
    const heading = getByText("The App has rendered");
    expect(heading).toBeInTheDocument();
  });
});
