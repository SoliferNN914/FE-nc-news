import { useParams } from 'react-router-dom';
import { getArticleById } from './utils/newsApi';
import { useState, useEffect } from "react";
import Expandable from './Expandable';
import CommentCard from './CommentCards';

export default function SingleArticle() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        getArticleById(id)
            .then((response) => {
                setArticle(response);
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }, [id]);

    if (!article) {
        return <p>Loading...</p>
    }

    return (
        <>
        <section className='ArticleContainer'>
        <div className='individualArticle'>
        <h2>Title: {article.title}</h2>
        <img src={article.article_img_url} />
        <Expandable>
        <p>{article.body}</p>
        </Expandable>
        <CommentCard id={id}/>
        </div>
        </section>

        </>
    );
}
