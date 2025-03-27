import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchNews } from "../services/newsService";

const Article = () => {
  const { articleUrl } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const getNews = async () => {
      const news = await fetchNews();
      setArticle(news[articleUrl]);
    };
    getNews();
  }, [articleUrl]);

  if (!article) return <p>Loading article...</p>;

  return (
    <div>
      <h1>{article.title}</h1>
      <img src={article.urlToImage} className="img-fluid" alt={article.title} />
      <p>{article.content}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
        Read Full Article
      </a>
    </div>
  );
};

export default Article;
