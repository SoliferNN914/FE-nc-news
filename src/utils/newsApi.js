import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-qzx0.onrender.com/api/'
})

export default function getArticles () {
    return newsApi.get('articles').then((response) => {

        return response.data.articles
    })
}

export const getArticleById = (id) => {
    return newsApi.get(`articles/${id}`).then((res) => {
        console.log(res.data.article);
      return res.data.article[0];
    });
  };