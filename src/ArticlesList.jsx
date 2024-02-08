import { useState, useEffect } from "react";
import getArticles from './utils/newsApi';
import Articles from "./Articles";

import ArticlesByTopic from "./ArticlesByTopic";
import Navbar from "./TopicsNavBar";

export default function ArticlesList(){

    const [articles, setArticles] = useState([]);
    const [selectedTopic, setSelectedTopic] = useState(null);

    useEffect(()=>{
        getArticles()
        .then((response)=>{
            setArticles(response);
        })
        .catch((err)=>{
            console.log('Error:', err);
        });

    }, []);

    const topics = [...new Set(articles.map(article => article.topic))];

    return(
        <>
        <h1>Articles list</h1>
        <h2>Pick a topic</h2>
        <Navbar topics={topics} setSelectedTopic={setSelectedTopic} />
        {selectedTopic ? (
          <ArticlesByTopic topic={selectedTopic} />
        ) : (
          <Articles articles={articles} />
        )}
        </>

    );
}
