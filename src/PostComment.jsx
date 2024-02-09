import { useState, useContext } from "react";
import { UserContext } from './contexts/UserContext.jsx'
import { postComment } from "./utils/newsApi.js";


export default function PostComment({ id, onSuccess }) {
    const { userName } = useContext(UserContext);
    const [body, setBody] = useState("");
    const [success, setSuccess] = useState(false)
    const [isPosting, setIsPosting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsPosting(true);
        try {
            const postedComment = await postComment(id, { username: userName, body });
            setSuccess(true)
            setBody("")
            onSuccess()
        } catch (error) {
            console.error('Error posting comment:', error);
        } finally {
            setIsPosting(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="commentsCard">
                <p>Currently logged in user {userName}</p>
                <label htmlFor="Des">Comment</label>
                <textarea disabled={isPosting} required id="Des" value={body} onChange={(e) => { setBody(e.target.value) }} />
                <button disabled={isPosting} type="submit">Post</button>
                {success && <p>Comment posted successfully!</p>}
            </form>
        </>
    )
}