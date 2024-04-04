// App.js

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import NewPostPage from './components/NewPostForm';
import Posts from './components/Posts';
import LoginPage from './components/LoginPage';

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/posts');
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const addPost = newPost => {
    setPosts([...posts, newPost]);
  };

  const deletePost = async postId => {
    try {
      await fetch(`/api/posts/${postId}`, {
        method: 'DELETE',
      });
      setPosts(posts.filter(post => post.id !== postId));
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/posts' element={<Posts posts={posts} onDeletePost={deletePost} />} />
          <Route path='/new' element={<NewPostPage onAddPost={addPost} />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
