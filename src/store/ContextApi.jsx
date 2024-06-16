import React, { createContext, useState } from 'react';

export const PostList = createContext();

export const PostListProvider = ({ children }) => {
  const [postList, setPostList] = useState([]);
  
  const deletePosts = (postId)=>{
    setPostList(postList.filter(post=>post.postId != postId))
  }

  return (
    <PostList.Provider value={{ postList, setPostList , deletePosts}}>
      {children}
    </PostList.Provider>
  );
};
