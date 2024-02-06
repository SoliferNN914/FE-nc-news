import Header from "./Header"
import ArticlesList from "./ArticlesList"
import SingleArticle from "./SingleArticle"
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route path="/articles/:id" element = {<SingleArticle />} />
        <Route path="/" element = {<ArticlesList/>}/>
    </Routes>
    </>
  )
}

export default App
