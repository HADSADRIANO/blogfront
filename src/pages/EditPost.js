// pages/EditPost.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState({
    title: '',
    content: '',
    author: ''
  });

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/posts/${id}`);
        setPost(response.data);
      } catch (error) {
        console.error('Erro ao buscar post:', error);
      }
    };
    fetchPost();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prevPost) => ({
      ...prevPost,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/posts/${id}`, post);
      navigate('/admin'); // redireciona para a página administrativa após salvar
    } catch (error) {
      console.error('Erro ao atualizar post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={post.title}
        onChange={handleChange}
        required
      />
      <textarea
        name="content"
        placeholder="Conteúdo"
        value={post.content}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="author"
        placeholder="Autor"
        value={post.author}
        onChange={handleChange}
        required
      />
      <button type="submit">Salvar Alterações</button>
    </form>
  );
};

export default EditPost;
