
const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

const postsFilePath = path.join(__dirname, 'posts.json');

// Endpoint to retrieve all blog posts
app.get('/api/posts', async (req, res) => {
  try {
    const data = await fs.readFile(postsFilePath, 'utf-8');
    const posts = JSON.parse(data);
    res.json(posts);
  } catch (error) {
    console.error('Error retrieving posts:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to add a new blog post
app.post('/api/posts', async (req, res) => {
  try {
    const newPost = req.body;
    const data = await fs.readFile(postsFilePath, 'utf-8');
    const posts = JSON.parse(data);
    newPost.id = Date.now();
    posts.push(newPost);
    await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error adding post:', error);
    res.status(500).json({ error: 'Server error' });
  }
});

// Endpoint to delete a blog post by ID
app.delete('/api/posts/:id', async (req, res) => {
  try {
    const postId = parseInt(req.params.id);
    const data = await fs.readFile(postsFilePath, 'utf-8');
    let posts = JSON.parse(data);
    posts = posts.filter(post => post.id !== postId);
    await fs.writeFile(postsFilePath, JSON.stringify(posts, null, 2));
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
