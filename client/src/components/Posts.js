// src/components/Posts.js

import React from 'react';

const Posts = ({ posts, onDeletePost }) => {
  const handleDelete = id => {
    onDeletePost(id);
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          {post.image && <img src={post.image} alt="Post" />}
          <button onClick={() => handleDelete(post.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Posts;
