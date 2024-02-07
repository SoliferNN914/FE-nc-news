import { useState, useContext } from "react";
import { useEffect } from "react";
import { getComments } from "./utils/newsApi";
import { useParams } from "react-router-dom";
import moment from "moment";
import Expandable from "./Expandable";
import PostComment from "./PostComment";
import { deleteComment } from "./utils/newsApi";
import { UserContext } from "./contexts/UserContext.jsx";

export default function CommentCard() {
  const { userName } = useContext(UserContext);
  const { id } = useParams();
  const [comments, setComments] = useState([]);

  const handleDelete = (id) => {
    deleteComment(id)
      .then((res) => {
        setComments((prevComments) =>
          prevComments.filter((comment) => comment.comment_id !== id)
        );
        alert("Comment will be deleted! Press ok to proceed");
      })
      .catch((err) => {});
  };

  useEffect(() => {
    getComments(id)
      .then((response) => {
        setComments(response);
      })
      .catch(
        (err) => {
          console.error("Error:", err);
        },
        [id]
      );
  });
  return (
    <>
      <h2>Comments</h2>
      <Expandable>
        <PostComment id={id} />
        <section>
          {comments.map((comment) => {
            return (
              <div className="commentsCard" key={comment.comment_id}>
                <p>{comment.body}</p>
                <p>Author: {comment.author}</p>
                <p>
                  Created on:{" "}{moment(comment.created_at).format("dddd, MMM DD at HH:mm a")}
                </p>
                {comment.author !== userName && (<button disabled>Delete</button>)}
                {comment.author === userName && (
                  <button onClick={() => handleDelete(comment.comment_id)}>Delete</button>
                )}
              </div>
            );
          })}
        </section>
      </Expandable>
    </>
  );
}
