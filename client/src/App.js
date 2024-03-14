// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import NewPostPage from './components/NewPostForm';
import Posts from './components/Posts'; // Assuming 'Posts' is the component for displaying all posts
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Homepage/>} />
          <Route path='/posts' element={<Posts/>} />
          <Route path='/new' element={<NewPostPage/>} />
          <Route path='/login' element={<LoginPage/>} />
          
        </Routes>

      
      </div>
    </Router>
   
  );
}; 

export default App;