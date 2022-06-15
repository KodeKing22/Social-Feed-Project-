import React, { useState } from "react";
import PostMapper from "./Components/PostMapper";
import Post from "./Components/Post";
import CreatePost from "./Components/CreatePost";
import NavBar from "./Components/NavBar";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Jonathan",
      postText: "This is the post of posts",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Kyle",
      postText: "This is the post of posts",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Joel",
      postText: "This is a poor post",
      isLiked: false,
      isDisliked: false,
    },
    {
      name: "Marshall",
      postText: "This is the best post",
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
