import React, { useState } from 'react';

const CreatePost = ({array}) => {

    const[name, setName] = useState('');
    const[post, setPost] = useState('');

    function handleSubmit(event){
      event.preventDefault();
      let newPost ={
        name: name,
        post: post
      };
      console.log(newPost)
      array.addNewPostProperty(newPost)
    }

    return (
      <form onSubmit={handleSubmit} className="form-grid">
      <div>
        <label style={{'margin-left': '1em'}}>Name</label>
        <input type='text' value={name} onChange={(event) => setName(event.target.value)} className="form-control" style={{'margin-left': '1em'}}/>
        <label style={{'margin-left': '1em'}}>Post</label>
        <input type="text" value={post} onChange={(event) => setPost(event.target.value)}className="form-control" style={{'margin-left': '1em'}}/>
        <button type="submit" className="btn btn-primary" style={{'margin-left': '1em'}}>
          Create
        </button>
      </div>
    </form>
  );
  }

export default CreatePost;
