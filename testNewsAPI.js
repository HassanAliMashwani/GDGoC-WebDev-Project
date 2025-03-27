const API_KEY = "5e3cc05a8e9f419ca3467137792cb3fc"; // Replace with your actual API key
const BASE_URL = "https://newsapi.org/v2";

const testFetchNews = async () => {
  try {
    const response = await fetch(`${BASE_URL}/top-headlines?country=us&category=general&apiKey=${API_KEY}`);
    const data = await response.json();
    console.log("Fetched News Articles:", data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

testFetchNews();
