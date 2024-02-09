import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "./utils/newsApi";

export default function Navbar({ topicQuery }) {
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getTopics()
      .then((response) => {
        setAllTopics(response);
      })
      .catch((err) => {
        console.error("Error:", err);
      });
  }, []);

  return (
    <>
      <nav>
        {allTopics.map((topic) => (
          <Link key={topic.slug} to={`/articles?topic=${topic.slug}`}>
            <button className="button" onClick={() => topicQuery(topic.slug)}>
              {topic.slug}
            </button>
          </Link>
        ))}
      </nav>
    </>
  );
}
