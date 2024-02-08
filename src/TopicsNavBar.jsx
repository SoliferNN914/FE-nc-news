import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ topics, setSelectedTopic }) {
  const handleTopicSelection = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <nav>
      {topics.map((topic) => (
        <Link key={topic} to={`/articles?topic=${topic}`}>
          <button onClick={() => handleTopicSelection(topic)}>{topic}</button>
        </Link>
      ))}
    </nav>
  );
}
