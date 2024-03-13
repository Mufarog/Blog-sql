// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import PostPage from './components/Post';
import NewPostPage from './components/NewPostForm';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/post/:id">
            <PostPage />
          </Route>
          <Route path="/new">
            <NewPostPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

