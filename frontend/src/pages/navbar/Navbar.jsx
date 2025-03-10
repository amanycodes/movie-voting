import { useState, React, useContext, useEffect } from "react";
import Button from "../../components/R_button";
import MenuItem from '../../components/MenuItem';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton, Input, InputAdornment, Paper, Typography, Popper, ClickAwayListener } from "@mui/material";
import T_Button from "../../components/T_button";
import AccountMenu from "../../components/loggedInTile";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MovieContext } from "../../globalContext/context/MovieContext";
import { authContext } from "../../globalContext/context/AuthContext";
import styled from 'styled-components';

const SearchPopper = styled(Popper)`
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  z-index: 1400;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #1e1e1e;
  }

  &::-webkit-scrollbar-thumb {
    background: #555;
    border-radius: 4px;
  }
`;

const SearchResult = styled(Paper)`
  padding: 12px;
  cursor: pointer;
  transition: background-color 0.2s;
  display: flex;
  align-items: center;
  gap: 12px;

  &:hover {
    background-color: rgba(128, 0, 128, 0.1);
  }

  img {
    width: 40px;
    height: 60px;
    border-radius: 4px;
    object-fit: cover;
  }
`;

const StyledInput = styled(Input)`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 4px 12px;
  transition: all 0.3s ease;
  width: ${props => props.showfield ? '300px' : '40px'};

  &:hover, &:focus {
    background: rgba(255, 255, 255, 0.15);
  }
`;

const Navbar = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { movieObject, dispatch } = useContext(MovieContext);
    const [showField, setShowField] = useState(false);
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [anchorEl, setAnchorEl] = useState(null);
    const [loading, setLoading] = useState(false);
    const { userInfo } = useContext(authContext);
    const movieDropArray = ['Now Playing', 'Popular', 'Top Rated', 'Upcoming'];
    const showArray = ['Popular', 'On the Air', 'Airing Today', 'Top Rated'];

    const searchMovies = async (query) => {
        if (!query) {
            setSearchResults([]);
            return;
        }
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.themoviedb.org/3/search/multi?api_key=09801cd0f41d3548096eac7d4a25b6a1&query=${encodeURIComponent(query)}`
            );
            const data = await response.json();
            setSearchResults(data.results?.slice(0, 5) || []);
        } catch (error) {
            console.error('Search error:', error);
            setSearchResults([]);
        }
        setLoading(false);
    };

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            searchMovies(input);
        }, 300);

        return () => clearTimeout(debounceTimer);
    }, [input]);

    // Reset search when navigating to a different page
    useEffect(() => {
        handleCloseSearch();
    }, [location.pathname]);

    const handleSearch = () => {
        if (input.trim()) {
            dispatch({ type: 'CHANGE_SEARCH', payload: input.replace(/\s/g, '+') });
            dispatch({ type: 'CHANGE_HOVER', payload: null });
            
            // Force a refresh if already on home page
            if (location.pathname === '/') {
                // Reset and then set again to force re-fetch
                dispatch({ type: 'CHANGE_SEARCH', payload: '' });
                setTimeout(() => {
                    dispatch({ type: 'CHANGE_SEARCH', payload: input.replace(/\s/g, '+') });
                }, 10);
            } else {
                navigate('/');
            }
            
            handleCloseSearch();
        }
    };

    const handleSearchClick = (event) => {
        if (!showField) {
            setShowField(true);
            setAnchorEl(event.currentTarget);
        } else if (input) {
            handleSearch();
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    const handleCloseSearch = () => {
        setShowField(false);
        setInput('');
        setSearchResults([]);
        setAnchorEl(null);
    };

    const handleResultClick = (result) => {
        dispatch({ type: 'CHANGE_HOVER', payload: result.id });
        
        // Clear search and navigate
        dispatch({ type: 'CHANGE_SEARCH', payload: '' });
        
        if (location.pathname !== '/') {
            navigate('/');
        }
        
        handleCloseSearch();
    };

    return (
        <Container 
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                minWidth: '90vw',
                paddingTop: 1,
                position: 'relative',
            }}
        > 
            <Box sx={{  
                display: 'flex',
                p: 0,
                margin: 1,
            }}> 
                <Link to='/' style={{textDecoration: 'none'}}><T_Button path='/' size={15} value="DASHBOARD"/></Link> 
                <Link to='/' style={{textDecoration: 'none'}}><MenuItem value="MOVIES" dropArray={movieDropArray} show='movie'/></Link>
                <Link to='/' style={{textDecoration: 'none'}}><MenuItem value="TV SHOWS" dropArray={showArray} show='tv'/></Link>
                <Link to='/leaderboard' style={{textDecoration: 'none'}}><T_Button path='/leaderboard' size={15} value="LEADERBOARD"/></Link>
            </Box>

            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1
            }}>
                <ClickAwayListener onClickAway={handleCloseSearch}>
                    <Box>
                        <StyledInput
                            showfield={showField ? 1 : 0}
                            placeholder={showField ? "Search movies, TV shows..." : ""}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            disableUnderline={true}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={handleSearchClick}
                                        sx={{
                                            color: 'white',
                                            '&:hover': { color: 'purple' }
                                        }}
                                    >
                                        {showField && input ? <CloseIcon /> : <SearchIcon />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            sx={{
                                color: 'white',
                                fontSize: 14,
                            }}
                        />
                        <SearchPopper
                            open={showField && searchResults.length > 0}
                            anchorEl={anchorEl}
                            placement="bottom-end"
                        >
                            <Paper sx={{ bgcolor: '#1a1a1a', color: 'white' }}>
                                {searchResults.map((result) => (
                                    <SearchResult
                                        key={result.id}
                                        onClick={() => handleResultClick(result)}
                                        elevation={0}
                                        sx={{ bgcolor: 'transparent' }}
                                    >
                                        {result.poster_path && (
                                            <img
                                                src={`https://image.tmdb.org/t/p/w92${result.poster_path}`}
                                                alt={result.title || result.name}
                                            />
                                        )}
                                        <Box>
                                            <Typography variant="subtitle1" sx={{ color: 'white' }}>
                                                {result.title || result.name}
                                            </Typography>
                                            <Typography variant="caption" sx={{ color: '#999' }}>
                                                {result.media_type === 'tv' ? 'TV Show' : 'Movie'} • {
                                                    result.release_date?.split('-')[0] || 
                                                    result.first_air_date?.split('-')[0]
                                                }
                                            </Typography>
                                        </Box>
                                    </SearchResult>
                                ))}
                            </Paper>
                        </SearchPopper>
                    </Box>
                </ClickAwayListener>
                {!userInfo ? 
                    <Link to='/login' style={{textDecoration: 'none'}}>
                        <Button size={14} value="Sign In" setState={props.setState}/>
                    </Link> 
                    : <AccountMenu />
                }
            </Box>
        </Container>
    );
};

export default Navbar;