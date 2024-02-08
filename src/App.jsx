import Header from "./Header"
import ArticlesList from "./ArticlesList"
import SingleArticle from "./SingleArticle"
import { Route, Routes } from 'react-router-dom'
import ArticlesByTopic from "./ArticlesByTopic"



function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/articles/:id" element = {<SingleArticle />} />
        <Route path="/" element = {<ArticlesList/>}/>
        <Route path="/articles" element={<ArticlesByTopic />} />

    </Routes>
    </>
  )
}

export default App