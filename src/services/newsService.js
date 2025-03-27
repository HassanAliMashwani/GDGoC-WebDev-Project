const API_KEY = "5e3cc05a8e9f419ca3467137792cb3fc"; // 🔥 Replace with your API key
const BASE_URL = "https://newsapi.org/v2";

export const fetchNews = async (category = "general") => {
  try {
    const response = await fetch(
      `${BASE_URL}/top-headlines?country=us&category=${category}&apiKey=${API_KEY}`
    );
    const data = await response.json();
    return data.articles || [];
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};
