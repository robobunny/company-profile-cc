/**
 * Options
 * @typedef {Object} Options
 * @property {boolean} force - whether non-digit chars at the beginning or end of a string should be ignored
 * @property {string} separator - the character(s) used as a thousands separator, defaults to ","
 * @property {string} decimalChar - the character(s) that indicate the decimal, defaults to "."
 *
 */

/**
 * Tries to add thousands separators to a number or a number string.
 *
 * @param {string, number} input - number or string to be separated
 * @param {Options} options
 * @return {string} - e.g. "$1,234,567.00USD"
 *
 * @example
 *
 *     addThousandsSeparators('-$1000000,00EUR', {force: true, spearator: ".", decimalChar: "," }) // returns "-$1.000.000,00EUR"
 */

const addThousandsSeparators = (
  input,
  { force = false, decimalChar = ".", separator = "," } = {}
) => {
  let { negativeSymbol, inputString } = generateStringFromInput(input, force);
  let prefix = "";
  let postfix = "";
  if (force) {
    prefix = getPrefix(inputString);
    postfix = getPostfix(inputString);
  }
  let floatString = removePrefixAndPostfix(inputString, prefix, postfix);
  let decimal = getDecimal(floatString, decimalChar);
  let numberString = removeDecimal(floatString, decimal);
  const length = numberString.length;
  for (let i = length - 3; i > 0; i -= 3) {
    numberString = numberString.slice(0, i) + separator + numberString.slice(i);
  }
  return negativeSymbol + prefix + numberString + decimal + postfix;
};

export default addThousandsSeparators;

const generateStringFromInput = (input, force) => {
  const isANonEmptyString = (nonEmptyString) =>
    typeof nonEmptyString === "string" && nonEmptyString !== "";

  if (typeof input === "number") {
    let { negativeSymbol, string: inputString } = makeNumberString(input);
    return { negativeSymbol, inputString };
  } else if (isANonEmptyString(input)) {
    let { negativeSymbol, inputString } = processStringInput(input, force);
    return { negativeSymbol, inputString };
  } else {
    throw new Error(
      "It seems like you're calling addThousandsSeparators with an argument other than a number.\nDid you try setting `force` to true? Like so: n\t`addThousandsSeparators(strangeNumberHere, {force:true})`"
    );
  }
};

const processStringInput = (input, force) => {
  if (force) {
    let negativeSymbol = "";
    let inputString = input;
    return { negativeSymbol, inputString };
  } else if (!isNaN(parseFloat(input))) {
    let { negativeSymbol, string: inputString } = makeNumberString(
      parseFloat(input)
    );
    return { negativeSymbol, inputString };
  } else {
    throw new Error(
      "It seems like you're calling addThousandsSeparators with an argument other than a number.\nDid you try setting `force` to true? Like so:\n\t`addThousandsSeparators(strangeNumberHere, {force:true})`"
    );
  }
};

const makeNumberString = (number) => {
  let negativeSymbol;
  let string;

  if (number < 0) {
    negativeSymbol = "-";
    string = number.toString().slice(1);
  } else {
    negativeSymbol = "";
    string = number.toString();
  }

  return {
    negativeSymbol,
    string,
  };
};

const getPrefix = (inputString) => {
  const prefixRegExp = new RegExp(/^[^\d]+/);
  let prefix = prefixRegExp.exec(inputString);
  if (prefix !== null) {
    prefix = prefix[0];
  } else {
    prefix = "";
  }
  return prefix;
};

const getPostfix = (inputString) => {
  const postfixRegExp = new RegExp(/[^\d]+$/);
  let postfix = postfixRegExp.exec(inputString);
  if (postfix !== null) {
    postfix = postfix[0];
  } else {
    postfix = "";
  }
  return postfix;
};

const getDecimal = (floatString, decimalChar) => {
  const decRegExpStr = "\\" + decimalChar + "[\\d]+$";
  const decimalRegExp = new RegExp(decRegExpStr);
  let decimal = decimalRegExp.exec(floatString);
  if (decimal) {
    decimal = decimal[0];
  } else {
    decimal = "";
  }
  return decimal;
};

const removePrefixAndPostfix = (inputString, prefix, postfix) => {
  let floatString = inputString;
  if (prefix.length > 0) {
    floatString = floatString.slice(prefix.length);
  }
  if (postfix.length > 0) {
    floatString = floatString.slice(0, postfix.length * -1);
  }
  return floatString;
};

const removeDecimal = (floatString, decimal) => {
  if (decimal.length > 0) {
    const intString = floatString.slice(0, decimal.length * -1);
    return intString;
  }
  return floatString;
};
