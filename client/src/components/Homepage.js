// src/components/Homepage.js
import React, { useEffect, useState } from 'react';
import Post from './Post';

const Homepage = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fetch posts from the backend when the component mounts
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  return (
    <div>
      <h1>Blog Homepage</h1>
      {posts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Homepage;
