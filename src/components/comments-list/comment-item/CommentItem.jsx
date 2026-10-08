export default function CommentItem({
    text,
    author,
}) {
    return (
        <li className="comment">
            <p>{author}: {text}</p>
        </li>
    );
}