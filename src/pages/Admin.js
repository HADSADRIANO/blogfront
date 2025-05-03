// pages/Admin.js
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Admin = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:5000/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm('Tem certeza que deseja excluir esta postagem?')) {
      await axios.delete(`http://localhost:5000/posts/${id}`);
      fetchPosts(); // Atualiza a lista
    }
  };

  return (
    <div>
      <h1>Painel Administrativo</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <strong>{post.title}</strong> — {post.author}
            <div>
              <Link to={`/edit/${post.id}`}>Editar</Link>
              <button onClick={() => handleDelete(post.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
