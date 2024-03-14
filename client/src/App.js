// App.js
/*
import React from 'react';
import { BrowserRouter as Switch, Route, Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import NewPostPage from './components/NewPostForm';
import Posts from './components/Post'; // Assuming 'Posts' is the component for displaying all posts
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/posts">
            <Posts />
          </Route>
          <Route path="/new">
            <NewPostPage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
*/
// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Homepage from './components/Homepage';

const App = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={Homepage} />
      </div>
    </Router>
  );
};

export default App;
