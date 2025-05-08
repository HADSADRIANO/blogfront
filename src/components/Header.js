// Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  background-color: #282c34;
  padding: 16px;
  display: flex;
  gap: 16px;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
`;

const Header = () => {
  return (
    <Nav>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/admin">Admin</StyledLink>
      <StyledLink to="/create">Criar Post</StyledLink>
    </Nav>
  );
};

export default Header;
