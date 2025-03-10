import React from 'react'
import { LinearProgress } from '@mui/material';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: #252525;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const LoaderText = styled.h2`
  color: white;
  font-family: 'League Spartan';
  font-size: 1.8rem;
  margin: 0;
  opacity: 0.9;
  letter-spacing: 0.1em;
`;

const StyledLinearProgress = styled(LinearProgress)`
  width: 300px;
  height: 4px !important;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.1) !important;

  .MuiLinearProgress-bar {
    background-color: #9c27b0 !important;
  }

  @media (max-width: 768px) {
    width: 80%;
  }
`;

const LinerLoader = () => {
  return (
    <LoaderWrapper>
      <LoaderText>Loading Movies</LoaderText>
      <StyledLinearProgress />
    </LoaderWrapper>
  );
};

export default LinerLoader;