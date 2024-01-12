const API_KEY = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search';

export const search = async (term, location, sortBy) => {
  const apiUrl = `${baseUrl}?term=${term}&location=${location}&sort_by=${sortBy}`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
      }
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      const businesses = jsonResponse;
      return businesses;
    }
  }

  catch (error) {
    console.log("error", error);
  }
  
}