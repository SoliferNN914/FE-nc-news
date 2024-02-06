import './style.css'
import { Link } from 'react-router-dom';

export default function Articles(props){
    const {articles} = props
    // console.log(articles);

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