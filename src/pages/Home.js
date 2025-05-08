// pages/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostCard from '../components/PostCard';
import SearchBar from '../components/SearchBar';
import styled from 'styled-components';

const Container = styled.div`
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const PostList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
`;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchPosts = async () => {
    const response = await axios.get('http://localhost:5000/api/posts');
    setPosts(response.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container>
      <Title>Página Inicial</Title>
      <SearchBar setSearchQuery={setSearchQuery} />
      <PostList>
        {filteredPosts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </PostList>
    </Container>
  );
};

export default Home;
