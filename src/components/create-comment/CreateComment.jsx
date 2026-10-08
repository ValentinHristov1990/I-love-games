import request from "../../utils/request";

export default function CreateComment({
    user,
    gameId,
}) {

    const addCommentAction = async (formData) => {
        const newComment = {
            text: formData.get("text"),
            author: user?.email,
            game_id: gameId,
        }
        try {
            await request("/comments", "POST", newComment);

        } catch (error) {
            alert(error.message);
        }
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" action={addCommentAction}>
                <textarea name="text" placeholder="Comment......"></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    );
}