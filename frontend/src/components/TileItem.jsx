import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import { Box } from '@mui/system';
import { useContext } from 'react';
import { MovieContext } from '../globalContext/context/MovieContext';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
`;

const StyledCard = styled(Card)`
  position: relative;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  height: 300px;
  width: 200px !important;
  margin: 0 auto;
  background: transparent;
  border-radius: 12px;
  overflow: hidden;
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 30px rgba(0, 0, 0, 0.3);

    .poster-overlay {
      opacity: 1;
    }
  }

  .poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .poster-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8) 0%, transparent 100%);
    padding: 20px;
    opacity: 0;
    transition: opacity 0.3s ease;
    display: flex;
    align-items: flex-end;
    height: 50%;
  }
`;

const TileItem = ({ img, path }) => {
    const { dispatch } = useContext(MovieContext);

    const handleHover = () => {
        dispatch({ type: 'CHANGE_HOVER', payload: path });
        localStorage.setItem('id', JSON.stringify(path));
    };

    return (
        <StyledLink to="/movieid">
            <StyledCard 
                onMouseEnter={handleHover}
                elevation={3}
            >
                <CardContent sx={{ 
                    padding: '0 !important',
                    height: '100%',
                    position: 'relative'
                }}>
                    <Box
                        component="img"
                        className="poster-image"
                        src={`https://image.tmdb.org/t/p/w500${img}`}
                        alt="Movie Poster"
                        loading="lazy"
                    />
                    <div className="poster-overlay" />
                </CardContent>
            </StyledCard>
        </StyledLink>
    );
};

export default TileItem;