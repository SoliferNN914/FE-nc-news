import { useState } from "react";
import { useEffect } from "react";
import { getComments } from "./utils/newsApi";
import { useParams } from "react-router-dom";
import moment from "moment";
import Expandable from "./Expandable";

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
    <section >
        {comments.map((comment) => {
          return (
            <div className="commentsCard">
              <p>{comment.body}</p>
              <p>{comment.author}</p>
              <p>
                {moment(comment.created_at).format("dddd, MMM DD at HH:mm a")}
              </p>
            </div>
          );
        })}
      </section>
    </Expandable>

    </>
  );
}
