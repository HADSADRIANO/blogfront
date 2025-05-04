import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const SearchBar = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      placeholder="Buscar post..."
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  );
};

export default SearchBar;
