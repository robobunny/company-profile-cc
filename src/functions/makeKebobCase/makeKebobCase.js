const makeKebobCase = (string) => {
  return string
    .replace(/\s/g, "-")
    .replace(/([A-Z])/g, (letter) => letter.toLowerCase());
};

export default makeKebobCase;
