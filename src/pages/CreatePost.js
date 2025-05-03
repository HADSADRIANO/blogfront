// pages/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, content, author };
    await axios.post('http://localhost:5000/posts', newPost);
    // Redirecionar ou mostrar mensagem de sucesso
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Conteúdo"
        value={content}
        onChange={e => setContent(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={e => setAuthor(e.target.value)}
      />
      <button type="submit">Criar Post</button>
    </form>
  );
};

export default CreatePost;
