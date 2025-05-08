import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 20px;
  color: #333;
`;

const Author = styled.p`
  color: #666;
`;

const Description = styled.p`
  color: #888;
`;

const PostCard = ({ title, description, author }) => (
  <Card>
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Author>Autor: {author}</Author>
  </Card>
);

export default PostCard;
