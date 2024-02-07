import { useState } from "react";
import { useEffect } from "react";
import { getComments } from "./utils/newsApi";
import { useParams } from "react-router-dom";
import moment from "moment";
import Expandable from "./Expandable";
import PostComment from "./PostComment";

export default function CommentCard() {
  const { id } = useParams();

  const [comments, setComments] = useState([]);

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
    <PostComment id={id}/>
    <section >
        {comments.map((comment) => {
          return (
            <div className="commentsCard" key={comment.comment_id}>
              <p>{comment.body}</p>
              <p>Author: {comment.author}</p>
              <p>
                Created on: {moment(comment.created_at).format("dddd, MMM DD at HH:mm a")}
              </p>
            </div>
          );
        })}
      </section>
    </Expandable>

    </>
  );
}
