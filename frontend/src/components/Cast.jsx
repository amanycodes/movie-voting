import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';
import React from 'react';

const CastGrid = styled(Grid)`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
  justify-content: flex-start;

  @media (max-width: 768px) {
    justify-content: center;
    gap: 1rem;
  }
`;

const CastCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1rem;
  min-width: 180px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    min-width: 150px;
  }
`;

const CastName = styled(Typography)`
  color: white;
  font-family: 'League Spartan';
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
`;

const CharacterName = styled(Typography)`
  color: rgba(255, 255, 255, 0.7);
  font-family: 'League Spartan';
  font-size: 0.9rem;
  font-style: italic;
`;

const Cast = ({ castArray }) => {
  const handleCastClick = (castName) => {
    const wikiUrl = `https://en.wikipedia.org/wiki/${encodeURIComponent(castName)}`;
    window.open(wikiUrl, '_blank');
  };

  return (
    <CastGrid container>
      {castArray.slice(0, 6).map((cast, index) => (
        <CastCard key={index} onClick={() => handleCastClick(cast.name)}>
          <CastName>{cast.name}</CastName>
          <CharacterName>as {cast.character}</CharacterName>
        </CastCard>
      ))}
    </CastGrid>
  );
};

export default Cast;