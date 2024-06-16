import React, { useContext, useRef } from 'react';
import { PostList } from '../store/ContextApi';

function CreatePost() {
  
  const { postList, setPostList } = useContext(PostList);
  
  
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleOnSubmit = (event) => {
    event.preventDefault();

    const newPost = {
      postid: Date.now(),
      postTitle: postTitleElement.current.value,
      postBody: postBodyElement.current.value,
      reactions: reactionsElement.current.value,
      tags: tagsElement.current.value.split(' '),
    };

    setPostList([...postList, newPost]);

    // Clear the form inputs
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";
  };

 

  return (
    <form style={{ width: '40%', margin: '5% 20%' }} onSubmit={handleOnSubmit}>
      
      <div className="mb-3">
        <label htmlFor="postTitle" className="form-label">Post Title</label>
        <input type="text" className="form-control" id="postTitle" name="postTitle" placeholder="Add Post Title Here: " ref={postTitleElement} />
      </div>
      <div className="mb-3">
        <label htmlFor="postBody" className="form-label">Post Body</label>
        <input type="text" className="form-control" id="postBody" name="postBody" placeholder="How Are You Feeling Today? " ref={postBodyElement} />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Reactions</label>
        <input type="text" className="form-control" id="reactions" name="reactions" placeholder="Add Reactions Here: " ref={reactionsElement} />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" className="form-control" id="tags" name="tags" placeholder="Add Tags Here: " ref={tagsElement} />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  );
}

export default CreatePost;
