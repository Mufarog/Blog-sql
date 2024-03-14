// server.js

const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Endpoint to retrieve all blog posts
app.get('/api/posts', async (req, res) => {
  try {
    // Read the contents of the posts.json file
    const data = await fs.readFile('posts.json', 'utf-8');
    const posts = JSON.parse(data); // Parse the JSON data to get an array of posts
    res.json(posts); // Send the posts array as a JSON response
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to add a new blog post
app.post('/api/posts', async (req, res) => {
  try {
    // Extract the new post data from the request body
    const newPost = req.body;
    
    // Read the existing posts from the posts.json file
    const data = await fs.readFile('posts.json', 'utf-8');
    const posts = JSON.parse(data); // Parse the JSON data to get an array of posts
    
    // Assign a unique ID to the new post
    newPost.id = Date.now();
    
    // Add the new post to the array of posts
    posts.push(newPost);
    
    // Write the updated posts array back to the posts.json file
    await fs.writeFile('posts.json', JSON.stringify(posts, null, 2));
    
    // Send the new post as a JSON response
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to delete a blog post by ID
app.delete('/api/posts/:id', async (req, res) => {
  try {
    // Extract the post ID from the request parameters
    const postId = parseInt(req.params.id);
    
    // Read the existing posts from the posts.json file
    const data = await fs.readFile('posts.json', 'utf-8');
    let posts = JSON.parse(data); // Parse the JSON data to get an array of posts
    
    // Filter out the post with the specified ID
    posts = posts.filter(post => post.id !== postId);
    
    // Write the updated posts array back to the posts.json file
    await fs.writeFile('posts.json', JSON.stringify(posts, null, 2));
    
    // Send a success message as a JSON response
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
