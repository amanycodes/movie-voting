import React from 'react'
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: ${props => props.fullscreen ? '100vh' : '200px'};
  
  .MuiCircularProgress-root {
    color: #9c27b0;
  }
`;

const LoaderContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const LoaderText = styled.p`
  color: white;
  font-family: 'League Spartan';
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.8;
`;

const Loader = ({ fullscreen, size = 40, text }) => {
  return (
    <LoaderWrapper fullscreen={fullscreen}>
      <LoaderContent>
        <CircularProgress size={size} />
        {text && <LoaderText>{text}</LoaderText>}
      </LoaderContent>
    </LoaderWrapper>
  );
};

export default Loader;