import { Container } from "@mui/material";
import TileItem from "./TileItem";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const StyledSlider = styled(Slider)`
  .slick-track {
    display: flex;
    gap: 16px;
    padding: 20px 0;
  }
  
  .slick-prev, .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;
    &:before {
      font-size: 40px;
      color: purple;
      opacity: 0.5;
    }
    &:hover:before {
      opacity: 1;
    }
  }
  
  .slick-prev {
    left: -50px;
  }
  
  .slick-next {
    right: -50px;
  }
`;

const Tiles = ({ moviesArray, setPageInfo }) => {
  useEffect(() => {
    // Preload images for smooth carousel
    moviesArray?.forEach(movie => {
      const img = new Image();
      img.src = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    });
  }, [moviesArray]);

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 0,
    lazyLoad: 'ondemand',
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    afterChange: (current) => {
      // Load more movies when reaching end of carousel
      if (current + settings.slidesToShow >= moviesArray?.length - 1) {
        setPageInfo?.();
      }
    }
  };

  if (!moviesArray?.length) return null;

  return (
    <Container 
      maxWidth="xl" 
      sx={{
        py: 2,
        px: { xs: 2, md: 6 },
        position: 'relative'
      }}
    >
      <StyledSlider {...settings}>
        {moviesArray.map((movie) => (
          <TileItem
            key={movie.id}
            img={movie.poster_path}
            path={movie.id}
          />
        ))}
      </StyledSlider>
    </Container>
  );
};

export default Tiles;
