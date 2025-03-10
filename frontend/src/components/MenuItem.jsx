import { useContext, useState } from 'react';
import { MovieContext } from '../globalContext/context/MovieContext';
import styled from 'styled-components';

const NavItem = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 0.25rem;
`;

const NavButton = styled.button`
  color: white;
  font-family: 'League Spartan';
  font-weight: 400;
  font-size: 1rem;
  letter-spacing: 0.1em;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px 16px;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(128,0,128,0.3);
  }
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  left: 50%;
  transform: translateX(-50%) translateY(${props => props.show ? '0' : '-10px'});
  min-width: 200px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
  opacity: ${props => props.show ? 1 : 0};
  visibility: ${props => props.show ? 'visible' : 'hidden'};
  transition: all 0.2s ease-in-out;
  z-index: 1000;
  padding: 0.5rem 0;

  @media (max-width: 768px) {
    width: 90vw;
    min-width: unset;
    max-width: 300px;
  }
`;

const DropdownItem = styled.div`
  color: black;
  padding: 12px 16px;
  font-family: "League Spartan";
  font-weight: 400;
  font-size: 1.05rem;
  cursor: pointer;
  transition: all 0.2s ease-out;
  text-align: center;

  &:hover {
    background-color: rgba(128,0,128,0.1);
    text-decoration: underline;
    text-decoration-color: purple;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`;

const MenuItem = ({ value, options }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { dispatch } = useContext(MovieContext);

  const handleOptionClick = (option) => {
    // Reset page to 1 when changing genre
    dispatch({ type: 'CHANGE_PAGE', payload: 1 });
    // Clear any search
    dispatch({ type: 'CHANGE_SEARCH', payload: '' });
    // Set show type based on menu item
    dispatch({ type: 'CHANGE_SHOWTYPE', payload: value === 'MOVIES' ? 'movie' : 'tv' });
    // Update genre
    dispatch({ type: 'CHANGE_GENRE', payload: option.toLowerCase().replace(/ /g, '_') });
    setShowDropdown(false);
  };

  return (
    <NavItem 
      onMouseEnter={() => setShowDropdown(true)}
      onMouseLeave={() => setShowDropdown(false)}
    >
      <NavButton>{value}</NavButton>
      <DropdownMenu show={showDropdown}>
        {options.map((option, index) => (
          <DropdownItem 
            key={index}
            onClick={() => handleOptionClick(option)}
          >
            {option}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </NavItem>
  );
};

export default MenuItem;