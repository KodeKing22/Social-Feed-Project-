import React, { useState } from "react";
import PostMapper from "./Components/PostMapper";
import Post from "./Components/Post";
import CreatePost from "./Components/CreatePost";
import NavBar from "./Components/NavBar";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Mark French",
      postText: "You don't need to concern yourself with other people because they will destroy you in the end.",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Jordan Potts",
      postText: "There are a lot of ways to live your life but none more fufilling than giving your life for a greater cause.",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Henry Danger",
      postText: "Of all the places I've been and all the things I've seen, I can't tell you what I liked most.",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Eric Lopez",
      postText: "The worse part of what I do is the pay, the best part is the work! I would do it for free.",
      isLiked: false,
      isDisliked: false,
    },
  ]);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <h3 style={{ margin: "1em" }}>
            {" "}
            Social
            <small className="text-muted">Feed</small>
          </h3>
        </div>
        <div>
          <CreatePost />
        </div>
        <div>
          <Post />
        </div>
        <div>
          <PostMapper array={posts}/>
        </div>
        <div>
          <NavBar />
        </div>
      </div>
    </div>
  );
}

export default App;
