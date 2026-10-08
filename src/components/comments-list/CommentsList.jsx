import { useEffect, useState } from "react";
import request from "../../utils/request";
import CommentItem from "./comment-item/CommentItem";

export default function CommentsList({
    gameId,
    refresh,
}) {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        request(`/comments?game_id=eq.${gameId}&order=created_at.desc`)
            .then(result => setComments(result));
    }, [gameId, refresh]);

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {comments.map(comment => (<CommentItem key={comment.id} {...comment} />))}
            </ul>
            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {/* <!-- <p className="no-comment">No comments.</p> --> */}
        </div>
    );
}