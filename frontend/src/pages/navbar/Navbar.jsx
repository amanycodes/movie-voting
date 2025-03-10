import { useState, React, useContext, useEffect } from "react";
import NavButton from "../../components/NavButton";
import MenuItem from '../../components/MenuItem';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MovieContext } from "../../globalContext/context/MovieContext";
import { authContext } from "../../globalContext/context/AuthContext";
import styled from 'styled-components';
import AccountMenu from "../../components/loggedInTile";

const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    justify-content: center;
  }
`;

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: ${props => props.showfield ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border-radius: 25px;
  transition: all 0.3s ease;
  width: ${props => props.showfield ? '300px' : '40px'};
  height: 40px;

  @media (max-width: 768px) {
    width: ${props => props.showfield ? '100%' : '40px'};
  }
`;

const SearchInput = styled.input`
  background: transparent;
  border: none;
  color: white;
  padding: 8px 40px 8px 16px;
  width: 100%;
  opacity: ${props => props.showfield ? 1 : 0};
  transition: opacity 0.3s ease;
  font-family: 'League Spartan';

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
  border-radius: 50%;
  background: ${props => props.showfield ? 'transparent' : 'rgba(255, 255, 255, 0.1)'};
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }

  svg {
    color: white;
    font-size: 20px;
  }
`;

const SearchResults = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  width: 300px;
  max-height: 400px;
  overflow-y: auto;
  background: white;
  border-radius: 8px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.1);
  margin-top: 8px;
  z-index: 1400;

  @media (max-width: 768px) {
    width: 100%;
    right: 0;
    left: 0;
  }

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

const SearchResultItem = styled.div`
  padding: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 12px;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(128, 0, 128, 0.1);
  }

  img {
    width: 40px;
    height: 60px;
    border-radius: 4px;
    object-fit: cover;
  }

  .title {
    font-family: 'League Spartan';
    color: #333;
    font-size: 1rem;
  }

  .type {
    font-family: 'League Spartan';
    color: #666;
    font-size: 0.8rem;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1rem 5rem;
  position: relative;

  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
    gap: 1rem;
  }
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const NavWrapper = styled.nav`
  width: 100%;
  background: transparent;
  padding: 0.5rem 0;
  display: flex;
  justify-content: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const SignInButton = styled(NavButton)`
  &:hover {
    background-color: rgba(128,0,128,0.5);
  }
`;

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { movieObject, dispatch } = useContext(MovieContext);
    const [showField, setShowField] = useState(false);
    const [input, setInput] = useState('');
    const [searchResults, setSearchResults] = useState([]);
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

    useEffect(() => {
        handleCloseSearch();
    }, [location.pathname]);

    const handleSearch = () => {
        if (input.trim()) {
            dispatch({ type: 'CHANGE_SEARCH', payload: input.replace(/\s/g, '+') });
            dispatch({ type: 'CHANGE_HOVER', payload: null });
            
            if (location.pathname === '/') {
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

    const handleSearchClick = () => {
        setShowField(!showField);
        if (!showField) {
            setTimeout(() => document.querySelector('#search-input')?.focus(), 100);
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
    };

    const handleResultClick = (result) => {
        dispatch({ type: 'CHANGE_HOVER', payload: result.id });
        dispatch({ type: 'CHANGE_SEARCH', payload: '' });
        
        if (location.pathname !== '/') {
            navigate('/');
        }
        
        handleCloseSearch();
    };

    return (
        <NavWrapper>
            <NavContainer>
                <NavSection>
                    <Link to='/' style={{textDecoration: 'none'}}>
                        <NavButton value="DASHBOARD"/>
                    </Link>
                    <Link to='/leaderboard' style={{textDecoration: 'none'}}>
                        <NavButton value="LEADERBOARD"/>
                    </Link>
                    <MenuItem 
                        value="MOVIES" 
                        options={["Now Playing", "Popular", "Top Rated", "Upcoming"]}
                    />
                    <MenuItem 
                        value="TV SHOWS" 
                        options={["On The Air", "Popular", "Top Rated", "Airing Today"]}
                    />
                </NavSection>
                <NavSection>
                    <SearchContainer>
                        <SearchWrapper showfield={showField}>
                            <SearchInput
                                id="search-input"
                                type="text"
                                placeholder="Search movies, TV shows..."
                                showfield={showField}
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                            />
                            <IconWrapper 
                                showfield={showField}
                                onClick={handleSearchClick}
                            >
                                {showField ? <CloseIcon /> : <SearchIcon />}
                            </IconWrapper>
                        </SearchWrapper>

                        {showField && searchResults.length > 0 && (
                            <SearchResults>
                                {searchResults.map((result) => (
                                    <SearchResultItem
                                        key={result.id}
                                        onClick={() => handleResultClick(result)}
                                    >
                                        <img
                                            src={`https://image.tmdb.org/t/p/w92${result.poster_path || result.profile_path}`}
                                            alt={result.title || result.name}
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/92x138?text=No+Image';
                                            }}
                                        />
                                        <div>
                                            <div className="title">{result.title || result.name}</div>
                                            <div className="type">
                                                {result.media_type === 'movie' ? 'Movie' : 
                                                 result.media_type === 'tv' ? 'TV Show' : 'Person'}
                                            </div>
                                        </div>
                                    </SearchResultItem>
                                ))}
                            </SearchResults>
                        )}
                    </SearchContainer>
                    {!userInfo ? (
                        <Link to='/login' style={{textDecoration: 'none'}}>
                            <NavButton value="SIGN IN" isSignIn={true} />
                        </Link>
                    ) : (
                        <AccountMenu />
                    )}
                </NavSection>
            </NavContainer>
        </NavWrapper>
    );
};

export default Navbar;