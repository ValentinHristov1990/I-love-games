import { commentApi } from "../../api";

export default function CreateComment({
    user,
    accessToken,
    gameId,
    onCreate,
}) {

    const addCommentAction = async (formData) => {
        const newComment = {
            text: formData.get("text"),
            author: user?.email,
            game_id: gameId,
            user_id: user?.id
        }
        try {
            await commentApi.create(newComment, accessToken);
            onCreate();
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