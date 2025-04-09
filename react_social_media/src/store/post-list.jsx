import { createContext, useReducer } from "react";

export const PostListContext = createContext({
  postCard: [],
  addPost: () => {},
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

  const removePost = (postId) => {
    dispatchPostCard({
      type: "REMOVE_POST",
      payload: {
        postId,
      },
    });
  };

  const [postCard, dispatchPostCard] = useReducer(
    postCardReducer,
    DEFAULT_POST_LIST
  );

  return (
    <PostListContext.Provider value={{ postCard, addPost, removePost }}>
      {children}
    </PostListContext.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: 1,
    title: "Exploring the Mountains",
    content:
      "A detailed guide on hiking through the Rocky Mountains during spring.",
    reactions: {
      likes: 54,
      dislikes: 3,
    },
    userId: "user-120",
    tags: ["travel", "hiking", "nature"],
  },
  {
    id: 2,
    title: "JavaScript Async Explained",
    content:
      "Understanding promises, async/await, and how to handle asynchronous code in JS.",
    reactions: {
      likes: 120,
      dislikes: 7,
    },
    userId: "user-121",
    tags: ["javascript", "webdev", "async"],
  },
  {
    id: 3,
    title: "Top 5 Productivity Apps in 2025",
    content:
      "A rundown of the most efficient and feature-rich productivity tools this year.",
    reactions: {
      likes: 98,
      dislikes: 4,
    },
    userId: "user-122",
    tags: ["productivity", "apps", "review"],
  },
];

export default PostListProvider;
