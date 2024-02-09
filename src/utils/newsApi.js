import axios from 'axios'

const newsApi = axios.create({
    baseURL: 'https://nc-news-qzx0.onrender.com/api/'
})

export const getArticles = ( topic )=> {
    return newsApi.get(`articles`, {params: { topic }}).then((response) => {
        return response.data.articles
    })
}

export const getArticleById = (id) => {
    return newsApi.get(`articles/${id}`).then((res) => {
      return res.data.article[0];
    });
};

export const getComments = (id) => {
    return newsApi.get(`articles/${id}/comments`).then((res) => {
      return res.data.comments;
    });
};

export const patchVotes = (id, vote) => {
    return newsApi.patch(`articles/${id}`, { inc_votes: vote }).then((res) => {
        return res.data
    });
};

export const postComment = (id, { username, body }) => {
    return newsApi.post(`articles/${id}/comments`, { username, body }).then((res)=>{
        return res.data
    });
};

export const deleteComment = (id) => {
    return newsApi.delete(`comments/${id}`).then((res) => {
      return res.data
    });
};

export const getTopics = () => {
    return newsApi.get("topics").then((res) => {
      return res.data.topics;
    });
}