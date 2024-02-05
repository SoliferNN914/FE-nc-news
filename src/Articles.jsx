import './style.css'

export default function Articles(props){
    const {articles} = props
    console.log(articles);

    return(
        <>
        <section className="articleSection">
            {articles.map((article)=>{
                return(
                    <div>
                        <ul>
                        <li className='articleCard'>
                        <p><b>{article.title}</b></p>
                        <p>Topic: {article.topic}</p>
                        <img src={article.article_img_url} />
                        </li>
                        </ul>
                    </div>
                        
                )
            })}
        </section>
        </>
    )
}