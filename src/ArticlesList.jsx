import { useState, useEffect } from "react"
import getArticles from './utils/newsApi'
import Articles from "./Articles"


export default function ArticlesList(){

    const [articles, setArticles] = useState([])

    // const query = 'articles'

    useEffect(()=>{
        getArticles('articles')
        .then((response)=>{
            // const data = response.json()
            setArticles(response)
            console.log(response);
        })
        .catch((err)=>{
            console.log(err);
        })
    }, [])


    return(
        <>
        <h1>Articles list</h1>
        <Articles  articles={articles}/>
        </>

    )
}

