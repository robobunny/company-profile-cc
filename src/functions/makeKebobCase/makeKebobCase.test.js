const { default: makeKebobCase } = require("./makeKebobCase");

test("makes a multi-word phrase into kebab case", () => {
  const kebabString = makeKebobCase("A New String");
  expect(kebabString).toBe("a-new-string");
});
