# 📰 Live News Website  

## 📌 Overview  
This is a **Live News Website** that fetches and displays the latest news dynamically. The website includes a trending news ticker, category-based news filtering, and a responsive layout. Built with **React.js**, it ensures smooth navigation and a great user experience.

## 🚀 Features  
✔ **Trending News Section** – Displays live headlines in a moving ticker.  
✔ **Latest News Grid** – Fetches and displays news articles dynamically.  
✔ **Category Filtering** – Users can browse news by categories like **Technology, Sports, Business, Health, and Entertainment**.  
✔ **Load More Functionality** – Loads additional articles dynamically.  
✔ **Responsive Design** – Works smoothly on desktop, tablet, and mobile.  

## 🛠️ Technologies Used  
- **React.js** – Frontend framework  
- **React Router** – For navigation  
- **Bootstrap** – For styling  
- **News API** – Fetching live news  

## 🏗️ Installation & Setup  
1️⃣ **Clone the repository**  
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
2️⃣ Navigate to the project folder
cd news-website
3️⃣ Install dependencies
npm install
4️⃣ Start the development server
npm start
The website will be available at http://localhost:3000/.
📰 Fetching News from API
This project uses an external API to fetch live news. Make sure you have an API key from NewsAPI.

Add your API key in src/services/api.js like this:

const API_KEY = "YOUR_NEWS_API_KEY";
const BASE_URL = "https://newsapi.org/v2/top-headlines";

export const fetchNews = async () => {
  const response = await fetch(`${BASE_URL}?country=us&apiKey=${API_KEY}`);
  const data = await response.json();
  return data.articles;
};

🌍 Deployment
To deploy your project on GitHub Pages, run:

npm run build
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
Then, set up GitHub Pages in your repository settings.

💡 Contributing
Want to improve this project? Feel free to:
✅ Fork the repo
✅ Create a new branch (feature-branch)
✅ Submit a Pull Request

📄 License
This project is open-source and available under the Hassan Ali mashwani's License.

