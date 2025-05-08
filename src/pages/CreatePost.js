// pages/CreatePost.js
import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.8rem;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:disabled {
    background-color: #ccc;
  }
`;

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [author, setAuthor] = useState('');
  const [image, setImage] = useState('');
  const [calendario, setCalendario] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = { title, description, image, calendario, author };
    await axios.post('http://localhost:5000/api/posts/', newPost);
    alert('Post criado com sucesso!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Título"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        type="text"
        placeholder="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Autor"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
       <Input
        type="text"
        placeholder="Imagem"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
        <Input
        type="date"
        placeholder="Data de Cadastro"
        value={calendario}
        onChange={(e) => setCalendario(e.target.value)}
      />
      <Button type="submit">Criar Post</Button>
    </Form>
  );
};

export default CreatePost;
