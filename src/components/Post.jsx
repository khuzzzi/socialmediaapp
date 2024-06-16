import React, { useContext } from 'react';
import { PostList } from '../store/ContextApi';
import { MdOutlineDeleteOutline } from "react-icons/md";

function Post() {
  const { postList, setPostList } = useContext(PostList);

  // postId argument will iterate over all the elements present in the postList array 
  // so it is setting up the postList with the postId that is not equal to the postId on which the user Clicked..
  const deletePosts = (postId) => {
    setPostList(postList.filter(post => post.postid !== postId));
  };

  if (postList.length === 0) {
    return <h1 style={{ margin: "20px 20px" }}>Posts Will be updated Here : </h1>;
  }

  return (
    <div>
      {postList.map((post) => (
        <div className="card" style={{ width: "18rem", margin: "40px" }} key={post.postid}>
          <MdOutlineDeleteOutline
            style={{ fontSize: "30px", margin: "10px 250px" }}
            onClick={() => deletePosts(post.postid)}
          />
          <div className="card-body">
            <h5 className="card-title">{post.postTitle}</h5>
            <p className="card-text">{post.postBody}</p>
            <span className="badge text-bg-dark">Reactions: {post.reactions}</span>
            <br />
            <span className="badge text-bg-primary">Tags: {post.tags.join(', ')}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Post;
