import Card from '@mui/material/Card';
import { CardContent } from "@mui/material";
import { Box } from '@mui/system';
import { useContext } from 'react';
import { MovieContext } from '../globalContext/context/MovieContext';
import styled from 'styled-components';

const StyledCard = styled(Card)`
  position: relative;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  height: 300px;
  width: 200px !important;
  margin: 0 auto;
  
  &:hover {
    transform: scale(1.05);
    z-index: 1;
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }

  .poster-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 4px;
  }
`;

const TileItem = ({ img, path }) => {
    const { dispatch } = useContext(MovieContext);

    const handleHover = () => {
        dispatch({ type: 'CHANGE_HOVER', payload: path });
        localStorage.setItem('id', JSON.stringify(path));
    };

    return (
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
            </CardContent>
        </StyledCard>
    );
};

export default TileItem;