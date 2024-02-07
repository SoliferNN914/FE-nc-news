import { useEffect, useState } from "react";
import { patchVotes, getArticleById } from './utils/newsApi';

export default function Vote({ votes: initialVotes, id }) {
    const [votes, setVotes] = useState(initialVotes);
    const [visualVotes, setVisualVotes] = useState(initialVotes);
    const [hasVoted, setHasVoted] = useState(false);

    useEffect(() => {
        getArticleById(id)
            .then((response) => {
                setVisualVotes(response.votes);
            })
            .catch((err) => {
                console.error('Error:', err);
            });
    }, [votes, id]);

    const handleVote = async (voteChange) => {
        if (!hasVoted) { 
            try {
                const updatedArticle = await patchVotes(id, voteChange);
                setVotes(updatedArticle.votes);
                setHasVoted(true); 
            } catch (error) {
                console.error('Error voting:', error);
            }
        }
    };

    return (
        <div>
            <h1>Votes: {visualVotes}</h1>
            <button onClick={() => handleVote(1)} disabled={hasVoted}>👍</button>
            <button onClick={() => handleVote(-1)} disabled={hasVoted}>👎</button>
            {hasVoted && <p>You have already voted.</p>}
        </div>
    );
}
