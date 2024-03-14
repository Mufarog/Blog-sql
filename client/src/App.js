import React, { useState, useEffect } from 'react';
import Homepage from './components/Homepage';
import PostPage from './components/Post';
import NewPostPage from './components/NewPostForm';

const App = () => {
  // State to keep track of the current URL path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // Function to update the current path when the URL changes
  const handlePathChange = () => {
    setCurrentPath(window.location.pathname);
  };

  // Add event listener to handle URL changes
  useEffect(() => {
    window.addEventListener('popstate', handlePathChange);
    return () => {
      window.removeEventListener('popstate', handlePathChange);
    };
  }, []);

  // Function to render the appropriate component based on the current URL path
  const renderComponent = () => {
    switch (currentPath) {
      case '/':
        return <Homepage />;
      case '/new':
        return <NewPostPage />;
      default:
        // If the path matches '/post/:id', extract the post ID and render the PostPage component
        if (currentPath.startsWith('/post/')) {
          const postId = currentPath.split('/').pop();
          return <PostPage postId={postId} />;
        } else {
          // Render a 404 page for unknown routes
          return <div>404 Page Not Found</div>;
        }
    }
  };

  return (
    <div>
      {renderComponent()}
    </div>
  );
};

export default App;
