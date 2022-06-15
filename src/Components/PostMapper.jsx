import React from "react";

const PostMapper = ({ array }) => {
  return (
    <div>
      {array.map((item) => (
        <div>
          <h4>{item.name}</h4>
          <body>{item.postText}</body>

          <button>{item.isDisliked}</button>
          <button>{item.isLiked}</button>
        </div>
      ))}
    </div>
  );
};

export default PostMapper;
