import { useState, useEffect } from "react"
import getArticles from './utils/newsApi'
import Articles from "./Articles"


export default function ArticlesList(){

    const [articles, setArticles] = useState([])

    useEffect(()=>{
        getArticles()
        .then((response)=>{
            setArticles(response)
        })
        .catch((err)=>{
            console.log('Error:', err);
        })
    }, [])


    return(
        <>
        <h1>Articles list</h1>
        <Articles  articles={articles}/>
        </>

    )
}

