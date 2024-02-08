import { useState, useContext } from "react";
import { UserContext } from './contexts/UserContext.jsx'
import { postComment } from "./utils/newsApi.js";


export default function PostComment({ id }) {
    const { userName } = useContext(UserContext);
    const [body, setBody] = useState("");
    const [success, setSuccess] = useState(false)

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const postedComment = await postComment(id, { username: userName, body });
            console.log("Comment posted:", postedComment);
            setSuccess(true)

        } catch (error) {
            console.error('Error posting comment:', error);
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="commentsCard">
                <p>Currently logged in user {userName}</p>
                <label htmlFor="Des">Comment</label>
                <input required id="Des" value={body} onChange={(e) => { setBody(e.target.value) }} />
                <button type="submit">Post</button>
                {success && <p>Comment posted successfully!</p>}
            </form>
        </>
    )
}