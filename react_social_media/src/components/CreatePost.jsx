import React, { useContext, useRef } from "react";
import "./CreatePost.css";
import { PostListContext } from "../store/post-list";

const CreatePost = () => {
  const postTitleRef = useRef();
  const postContentRef = useRef();
  const postImageRef = useRef();
  const postTagsRef = useRef();

  const { addPost } = useContext(PostListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const postTitle = postTitleRef.current.value;
    const postContent = postContentRef.current.value;
    const postImage = postImageRef.current.value;
    const postTags = postTagsRef.current.value
      .split(",")
      .map((tag) => tag.trim());
    const postId = Math.floor(Math.random() * 10000); // Simple random ID generation

    if (!postTitle || !postContent || !postImage) {
      alert("Please fill in all fields.");
      return;
    }

    postTitleRef.current.value = "";
    postContentRef.current.value = "";
    postImageRef.current.value = "";
    postTagsRef.current.value = "";

    addPost(postId, postTitle, postContent, postImage, postTags, {
      likes: 0,
      dislikes: 0,
    });
  };

  return (
    <div className="create-post-container container mt-5">
      <h2 className="mb-4 text-center text-primary">Create a New Post</h2>
      <form
        className="create-post-form shadow p-4 rounded bg-white"
        onSubmit={handleSubmit}
      >
        <div className="mb-3">
          <label htmlFor="postTitle" className="form-label">
            Post Title
          </label>
          <input
            type="text"
            ref={postTitleRef}
            className="form-control"
            id="postTitle"
            placeholder="Enter your post title"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postImage" className="form-label">
            Image URL
          </label>
          <input
            ref={postImageRef}
            type="text"
            className="form-control"
            id="postImage"
            placeholder="Enter image URL (e.g. https://...)"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="postContent" className="form-label">
            Content
          </label>
          <textarea
            className="form-control"
            ref={postContentRef}
            id="postContent"
            rows="4"
            placeholder="Write something interesting..."
          ></textarea>
        </div>

        <div className="mb-3">
          <label htmlFor="postTags" className="form-label">
            Tags (comma-separated)
          </label>
          <input
            type="text"
            ref={postTagsRef}
            className="form-control"
            id="postTags"
            placeholder="e.g., tech, coding, blog"
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
