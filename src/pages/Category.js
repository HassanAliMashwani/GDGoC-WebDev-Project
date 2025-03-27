import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "../services/newsService";

const Category = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews(categoryName);
      setArticles(news);
    };
    getNews();
  }, [categoryName]);

  return (
    <div className="container mt-4">
      {/* 🟢 Styled Category Heading */}
      <h1 className={`category-heading ${categoryName.toLowerCase()}`}>
        <span className="category-text">Category: </span>  
        <span className="category-name">{categoryName}</span> 
      </h1>

      {articles.length > 0 ? (
        <div className="row">
          {articles.map((article, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="card mb-3 shadow-sm">
                {article.urlToImage && (
                  <img 
                    src={article.urlToImage} 
                    className="card-img-top category-image" 
                    alt={article.title} 
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
      ) : (
        <p className="text-center">Loading news...</p>
      )}
    </div>
  );
};

export default Category;
