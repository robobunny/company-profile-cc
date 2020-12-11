import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import StockSymbolInput from "./StockSymbolInput";
import getCompanyProfile from "../../functions/getCompanyProfile/getCompanyProfile";

jest.mock("../../functions/getCompanyProfile/getCompanyProfile");

describe("Stock Symbol Input component", () => {
  test("renders the input and button", () => {
    const { getByLabelText, getByText } = render(<StockSymbolInput />);
    const inputSS = getByLabelText("Enter a stock symbol:");
    const submitButton = getByText("Search");
    expect(inputSS).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test("submits with correct info on button click", () => {
    const { getByLabelText, getByText } = render(<StockSymbolInput />);
    const inputSS = getByLabelText("Enter a stock symbol:");
    const submitButton = getByText("Search");
    userEvent.type(inputSS, "AAPL");
    userEvent.click(submitButton);
    expect(getCompanyProfile).toHaveBeenCalledWith("AAPL");
  });

  test("submits with correct info on press enter", () => {
    const { getByLabelText } = render(<StockSymbolInput />);
    const inputSS = getByLabelText("Enter a stock symbol:");
    userEvent.type(inputSS, "AAPL{enter}");
    expect(getCompanyProfile).toHaveBeenCalledWith("AAPL");
  });
});
