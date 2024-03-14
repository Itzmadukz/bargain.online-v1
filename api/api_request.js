import { getJson } from "serpapi";



// Walmart HTTP request
export const wmData = async (query) => {
    try {
      const response = await getJson({
        api_key: "90e28590f54081d77fe7791875f314266693fdd4a2087690eee4ba5552a0c922",
        engine: "walmart",
        query: query
      });
  
      const searchData = response.organic_results || [];

      console.log(searchData)
  
      return searchData;
    } catch (error) {
      console.error("Error fetching Walmart data:", error);
      throw error; 
    }
};


// Target HTTP request
export const getData = async (search_term) => {
    try {
        const params = {
            api_key: "7CA441521C124D01AB9BDB949EFA82C3",
            type: "search",
            search_term: search_term,
        };
  
        // make the http GET request to RedCircle API
        const response = await fetch('https://api.redcircleapi.com/request', { params });
    
        // Expected data structure is an array under 'search_results'
        const responseData = await response.data.search_results.position.offers.primary.json() || [];
    
        console.log(responseData);
    
        return responseData;
    } catch (error) {
        console.error("Error fetching data:", error);
        throw error; 
    }
};

  
  
