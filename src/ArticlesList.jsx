import Articles from "./Articles";
import { useSearchParams } from 'react-router-dom'
import Navbar from "./TopicsNavBar";

export default function ArticlesList(){

    const [topics, setTopics] = useSearchParams()

    function topicQuery(topic) {
      const newTopic = new URLSearchParams(topics);
      newTopic.set("topic", topic);
      setTopics(newTopic);
    }
  


    return(
        <>
        <h1>All Articles</h1>
        <h2>Pick a topic</h2>
        <Navbar topicQuery={topicQuery}/>
        <Articles/>
        </>

    );
}

