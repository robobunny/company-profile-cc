import addThousandsSeparators from "./addThousandsSeparators";

describe("addThousandsSeparators", () => {
  test("adds commas to a long number", () => {
    const commaNumber = addThousandsSeparators(1234567);
    const commaNumberNegative = addThousandsSeparators(-1234567);
    expect(commaNumberNegative).toBe("-1,234,567");
    expect(commaNumber).toBe("1,234,567");
  });

  test("doesn't add commas to a short number", () => {
    const commaNumber = addThousandsSeparators(123);
    expect(commaNumber).toBe("123");
  });

  test("works with decimals", () => {
    const commaNumber = addThousandsSeparators(1234567.0123);
    const shortCommaNumber = addThousandsSeparators(123.456789);
    expect(shortCommaNumber).toBe("123.456789");
    expect(commaNumber).toBe("1,234,567.0123");
  });

  test("doesn't add commas to a short number with decimal", () => {});

  test("adds commas to a long number string", () => {
    const commaNumber = addThousandsSeparators("1234567");
    expect(commaNumber).toBe("1,234,567");
  });

  test("adds commas to a long number string with decimal", () => {
    const commaNumber = addThousandsSeparators("1234567.0123");
    expect(commaNumber).toBe("1,234,567.0123");
  });

  test("throws error when non-number string is passed without force", () => {
    expect(() => addThousandsSeparators("-$1234567.73 USD")).toThrow(
      "It seems like"
    );
  });

  test("adds commas correctly with prefix and postfix when force is set", () => {
    const commaNumber = addThousandsSeparators("-$1234567.73 USD", {
      force: true,
    });
    const commaNumberPrefix = addThousandsSeparators("Price: $1234567.73", {
      force: true,
    });
    const commaNumberPostfix = addThousandsSeparators("1234567.73 USD", {
      force: true,
    });
    expect(commaNumberPostfix).toBe("1,234,567.73 USD");
    expect(commaNumberPrefix).toBe("Price: $1,234,567.73");
    expect(commaNumber).toBe("-$1,234,567.73 USD");
  });

  test("handles non-default thousands and decimal chars", () => {
    const euroNumber = addThousandsSeparators("(1234567,73 EUR)", {
      force: true,
      decimalChar: ",",
      separator: ".",
    });
    const prefixEuroNumber = addThousandsSeparators("Price: 1234567,99", {
      force: true,
      decimalChar: ",",
      separator: ".",
    });
    const postfixEuroNumber = addThousandsSeparators("1234567,99 EUR", {
      force: true,
      decimalChar: ",",
      separator: ".",
    });
    expect(euroNumber).toBe("(1.234.567,73 EUR)");
    expect(prefixEuroNumber).toBe("Price: 1.234.567,99");
    expect(postfixEuroNumber).toBe("1.234.567,99 EUR");
  });
});
