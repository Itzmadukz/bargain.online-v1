import { getJson } from "serpapi";

const input = process.argv[2]


// Walmart HTTP request
const wmData = async (query) => {
  try {
    const response = await getJson({
      api_key: "90e28590f54081d77fe7791875f314266693fdd4a2087690eee4ba5552a0c922",
      engine: "walmart",
      query: query
    });

    // Extract prices from each item in the organic_results array
    const wmPrices = response.organic_results.map(item => item.price || null);

    console.log(wmPrices);

    return wmPrices;
  } catch (error) {
    console.error("Error fetching Walmart data:", error);
    throw error;
  }
};


// Target HTTP request
const getData = async (search_term) => {
  try {
    const params = {
      api_key: "7CA441521C124D01AB9BDB949EFA82C3",
      type: "search",
      search_term: search_term,
      sort_by: "price_low_to_high"
    };

    // Make the HTTP GET request to RedCircle API
    const response = await axios.get('https://api.redcircleapi.com/request', { params });

    // Extract prices from each item in the search results
    const prices = response.data.search_results.map(item => item.price || null);

    console.log(prices);

    return prices;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

wmData(input)

getData(input)




