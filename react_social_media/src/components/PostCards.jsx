import { useContext } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list";

const PostCards = () => {
  const { postCard } = useContext(PostListContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {postCard.map((post) => (
          <div className="col-md-6" key={post.id}>
            <Post post={post} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostCards;
