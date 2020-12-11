const callFmpApi = async (stockSymbol) => {
  const apiKey = process.env.REACT_APP_FMP_API_KEY;
  const apiUrl = `https://financialmodelingprep.com/api/v3/profile/${stockSymbol}?apikey=${apiKey}`;
  const fetchOptions = {
    method: "GET",
    mode: "cors",
    redirect: "follow",
  };
  const response = await fetch(apiUrl, fetchOptions);
  if (!response.ok) {
    throw new Error(
      "There was a problem requesting the data, please try again later."
    );
  } else {
    try {
      const data = await response.json();
      return data;
    } catch (error) {
      if (error.message === "Unexpected end of JSON input") {
        throw new Error(
          "No information was found for that symbol. Please try another."
        );
      } else {
        throw new Error(
          "There was a problem requesting the data, please try again later."
        );
      }
    }
  }
};

export default callFmpApi;
