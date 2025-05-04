// pages/Admin.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:5000/posts');
    setPosts(response.data);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir este post?')) {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      fetchPosts();
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {post.title} <button onClick={() => handleDelete(post.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
