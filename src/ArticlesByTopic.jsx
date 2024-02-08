import { getArticlesByTopic } from "./utils/newsApi";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function ArticlesByTopic() {
  const params = new URLSearchParams(window.location.search);
  const topic = params.get("topic");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticlesByTopic(topic)
      .then((response) => {
        setArticles(response);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, [topic]);

  return (
    <>
      <h1>Articles related to {topic}</h1>
      <section className="articleSection">
        {articles.map((article) => (
          <Link to={`/articles/${article.article_id}`} key={article.article_id}>
            <div>
              <ul>
                <li className="articleCard" key={article.id}>
                  <p>
                    <b>{article.title}</b>
                  </p>
                  <p>Topic: {article.topic}</p>
                  <img src={article.article_img_url} />
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
