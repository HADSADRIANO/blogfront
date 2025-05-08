// components/PostList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await axios.get('http://localhost:5000/api/posts');
      setPosts(response.data);
    };
    fetchPosts();
  }, []);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Buscar posts..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <ul>
        {filteredPosts.map(post => (
          <li key={post.id}>{post.title} - {post.author}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
