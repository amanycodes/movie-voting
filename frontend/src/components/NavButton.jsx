import { useContext } from 'react';
import { MovieContext } from '../globalContext/context/MovieContext';
import styled from 'styled-components';

const StyledButton = styled.button`
  color: white;
  font-family: 'League Spartan';
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.1em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  margin: 0 0.25rem;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 8px 12px;
  }
`;

const SignInButtonStyle = styled(StyledButton)`
  &:hover {
    background-color: rgba(128, 0, 128, 0.3);
  }
`;

const NavButton = ({ value, isSignIn }) => {
  const { dispatch } = useContext(MovieContext);

  const handleClick = () => {
    dispatch({ type: 'CHANGE_HOVER', payload: null });
  };

  const Button = isSignIn ? SignInButtonStyle : StyledButton;

  return (
    <Button onClick={handleClick}>
      {value}
    </Button>
  );
};

export default NavButton;
