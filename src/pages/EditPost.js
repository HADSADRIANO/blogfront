// pages/EditPost.js
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({ title: '', content: '', author: '' });

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(`http://localhost:5000/posts/${id}`);
      setPost(response.data);
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/posts/${id}`, post);
    navigate('/admin');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />
      <textarea
        value={post.content}
        onChange={(e) => setPost({ ...post, content: e.target.value })}
      />
      <input
        type="text"
        value={post.author}
        onChange={(e) => setPost({ ...post, author: e.target.value })}
      />
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditPost;
