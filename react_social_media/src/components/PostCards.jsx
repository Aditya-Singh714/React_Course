import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";

const PostCards = () => {
  const { postCard, addInitialPosts } = useContext(PostListContext);

  const [fetcthing, setFetching] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    setFetching(true);
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      console.log("Cleaning up...");
      controller.abort();
    };
  }, []);

  return (
    <div className="container mt-4">
      <div className="row">
        {fetcthing && <LoadingSpinner />}
        {!fetcthing && postCard.length === 0 && <WelcomeMessage />}
        {!fetcthing &&
          postCard.map((post) => (
            <div className="col-md-6" key={post.id}>
              <Post post={post} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default PostCards;
