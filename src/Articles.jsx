import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles } from "./utils/newsApi";

export default function Articles() {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true)

  useEffect(()=>{
    getArticles()
    .then((response)=>{
        setArticles(response);
        setLoading(false)
    })
    .catch((err)=>{
        console.log('Error:', err);
        setLoading(false)
    });

}, []);

if(loading){
    return <div>Loading...</div>
}


return(
    <>
    <section className="articleSection">
        {articles.map((article)=>{
            return(
                <Link to={`articles/${article.article_id}`} key={article.article_id}>
                    <div>
                    <ul>
                    <li className='articleCard' key={article.id}>
                    <p><b>{article.title}</b></p>
                    <p>Topic: {article.topic}</p>
                    <img src={article.article_img_url} />
                    </li>
                    </ul>
                </div>
                </Link>

            )
        })}
    </section>
    </>
)
}