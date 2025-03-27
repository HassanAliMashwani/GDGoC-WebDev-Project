import React, { useEffect, useState } from "react";
import { fetchNews } from "../services/api";
import { Link } from "react-router-dom";

const categories = ["Technology", "Sports", "Business", "Health", "Entertainment"];

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [trending, setTrending] = useState([]);
  const [visibleArticles, setVisibleArticles] = useState(6); // Show 6 articles initially

  useEffect(() => {
    const getNews = async () => {
      const newsData = await fetchNews();
      setArticles(newsData);
      setTrending(newsData.slice(0, 5)); // First 5 articles for trending news
    };

    getNews();
  }, []);

  const loadMore = () => {
    setVisibleArticles((prev) => prev + 6); // Load 6 more articles
  };

  return (
    <div className="container mt-4">
      {/* 🔥 Trending News Section */}
      <div className="trending-container">
        <h3>🔥 Trending Now</h3>
        <marquee className="trending-text">
          {trending.map((news, index) => (
            <span key={index} className="trending-item">
              {news.title} &nbsp; | &nbsp;
            </span>
          ))}
        </marquee>
      </div>

      <div className="row">
        {/* 📌 Sidebar with Categories */}
        <div className="col-md-3">
          <div className="category-sidebar">
            <h4>Categories</h4>
            <ul>
              {categories.map((cat, index) => (
                <li key={index}>
                  <Link to={`/category/${cat.toLowerCase()}`} className="category-link">
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 📰 Latest News Section */}
        <div className="col-md-9">
          <div 
            className="news-container" 
            style={{
              backgroundColor: "rgba(255, 193, 7, 0.1)", // Light Yellow Background
              padding: "10px 15px",
              borderRadius: "8px",
              display: "inline-block",
            }}
          >
            <h2 
              className="category-title" 
              style={{
                color: "#FFC107", // Yellow-Orange Text Color
                fontWeight: "bold",
                fontSize: "1.8rem",
                marginBottom: "10px",
              }}
            >
              📰 Latest News
            </h2>
          </div>

          <div className="row">
            {articles.slice(0, visibleArticles).map((article, index) => (
              <div key={index} className="col-md-4 mb-3">
                <div 
                  className="card news-card" 
                  style={{
                    border: "1px solid #ddd",
                    borderRadius: "10px",
                    overflow: "hidden",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "transform 0.3s ease-in-out",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = "translateY(-5px)"}
                  onMouseLeave={(e) => e.currentTarget.style.transform = "translateY(0)"}
                >
                  {article.urlToImage && (
                    <img 
                      src={article.urlToImage} 
                      className="card-img-top" 
                      alt={article.title} 
                      style={{ width: "100%", height: "200px", objectFit: "cover" }}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <a 
                      href={article.url} 
                      className="btn btn-primary" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 📌 Load More Button */}
          <div className="text-center mt-3">
            <button className="btn btn-warning" onClick={loadMore}>
              Load More News
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
