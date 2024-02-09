import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "./utils/newsApi";
import "./style.css"

export default function ArticlesByTopic() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const topic = searchParams.get("topic");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (topic) {
      getArticles(topic)
        .then((response) => {
          setArticles(response);
          setLoading(false)
        })
        .catch((err) => {
          console.error("Error:", err);
          setLoading(false)
        });
    }
  }, [topic]);

  if(loading){
    return <div>Loading...</div>
}

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
                  <img src={article.article_img_url} alt={article.title} />
                </li>
              </ul>
            </div>
          </Link>
        ))}
      </section>
    </>
  );
}
