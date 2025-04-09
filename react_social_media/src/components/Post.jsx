import "./Post.css";
import { FcLike, FcDislike } from "react-icons/fc";
import { AiFillDelete } from "react-icons/ai";
import { useContext } from "react";
import { PostListContext } from "../store/post-list";

const Post = ({ post }) => {
  const { removePost } = useContext(PostListContext);

  return (
    <div className="card post-card shadow-sm mb-4">
      <img
        src={`https://source.unsplash.com/600x200/?blog,technology`}
        className="card-img-top"
        alt="Post thumbnail"
      />

      <div className="card-body position-relative">
        <h4 className="card-title d-flex justify-content-between align-items-center">
          {post.title}
          <span
            className="delete-btn"
            onClick={() => removePost(post.id)}
            title="Delete post"
          >
            <AiFillDelete size={20} />
          </span>
        </h4>
        <p className="card-text">{post.content}</p>

        <div className="mb-3">
          {post.tags.map((tag) => (
            <span key={tag} className="badge bg-primary me-2 hashtag">
              #{tag}
            </span>
          ))}
        </div>

        <div
          className="btn-group reactions"
          role="group"
          aria-label="Reaction buttons"
        >
          <button
            type="button"
            className="btn btn-outline-success d-flex align-items-center gap-1"
          >
            {post.reactions.likes}
            <FcLike />
          </button>
          <button
            type="button"
            className="btn btn-outline-danger d-flex align-items-center gap-1"
          >
            {post.reactions.dislikes}
            <FcDislike />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Post;
