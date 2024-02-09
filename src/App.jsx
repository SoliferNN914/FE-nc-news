import Header from "./Header"
import ArticlesList from "./ArticlesList"
import SingleArticle from "./SingleArticle"
import { Route, Routes, useSearchParams } from 'react-router-dom'
import ArticlesByTopic from "./ArticlesByTopic"
import PageDoesNotExist from "./PageDoesNotExist"


function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/articles/:id" element = {<SingleArticle />} />
        <Route path="/" element = {<ArticlesList/>}/>
        <Route path="/articles" element={<ArticlesByTopic />} />
        <Route path="*" element={<PageDoesNotExist />}/>
    </Routes>
    </>
  )
}

export default App