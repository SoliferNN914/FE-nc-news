import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-qzx0.onrender.com/api/'
})

export default function getArticles(showQuery) {
    return newsApi.get(showQuery).then((response) => {
        console.log(response.data.articles);
        return response.data.articles
    })
}