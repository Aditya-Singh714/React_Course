import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postCard: [],
  addPost: () => {},
  addInitialPosts: () => {},
  removePost: () => {},
});

const postCardReducer = (currPostCard, action) => {
  let newPostCard = currPostCard;
  if (action.type === "REMOVE_POST") {
    newPostCard = currPostCard.filter(
      (post) => post.id !== action.payload.postId
    );
  } else if (action.type === "ADD_POST") {
    newPostCard = [action.payload, ...currPostCard];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostCard = action.payload.posts;
  }
  return newPostCard;
};

const PostListProvider = ({ children }) => {
  const addPost = (
    postId,
    postTitle,
    postContent,
    postImage,
    postTags,
    reactions
  ) => {
    dispatchPostCard({
      type: "ADD_POST",
      payload: {
        id: postId,
        title: postTitle,
        content: postContent,
        image: postImage,
        tags: postTags,
        reactions: reactions,
      },
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostCard({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const removePost = (postId) => {
    dispatchPostCard({
      type: "REMOVE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postCard, dispatchPostCard] = useReducer(postCardReducer, []);

  return (
    <PostListContext.Provider
      value={{ postCard, addPost, removePost, addInitialPosts }}
    >
      {children}
    </PostListContext.Provider>
  );
};

export default PostListProvider;
