//Complete the necessary code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass the data from App.js down as props then map through the data
const PostsPage = (props) => {
  console.log("postspage", props)
  console.log("props using post", props.post)
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */
      props.post.map((item) => (
        <Post 
        key={item.imageUrl}
        post={item}
        />
      ))
      }
    </div>
  );
};

export default PostsPage;

