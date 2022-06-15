import React from "react";

const CreatePost = ({array}) => {
  
    const [name, setName] = useState('input');
    const [post, setPost] = useState('input');
    
    function handlesumit(event) {
        event.preventDefault();
        let newFeedPost = {
            name: name,
            post: post
        };
        console.log(newFeedPost);
        array.CreatePostProperty(newFeedPost)
    }
  
    return (
    <form onSubmit={handlesumit} className="form-grid">
      <div>
        <label style={{'margin-left': '1em'}}>Name</label>
        <input type='name' className="form-control" style={{'margin-left': '1em'}} value={name} onChange={(event) => setName} />
        <label style={{'margin-left': '1em'}}>Post</label>
        <input type="post" className="form-control" style={{'margin-left': '1em'}}/>
        <button type="Create" className="btn btn-primary" style={{'margin-left': '1em'}} value={post} onChange={(event) => setPost}>
          Create
        </button>
      </div>
    </form>
  );
};

export default CreatePost;
