import { Container } from "@mui/material";
import TileItem from "./TileItem";
import { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import Loader from "./Loader";

const CarouselWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
  position: relative;
`;

const StyledContainer = styled(Container)`
  padding: 2rem 4rem;
  position: relative;
  margin: 0 auto;
  max-width: 1600px !important;

  @media (max-width: 1024px) {
    padding: 2rem 3rem;
  }

  @media (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-list {
    overflow: visible;
  }

  .slick-track {
    display: flex;
    gap: 16px;
    margin-left: 0;
  }
  
  .slick-prev, .slick-next {
    z-index: 2;
    width: 40px;
    height: 40px;
    &:before {
      font-size: 40px;
      color: #9c27b0;
      opacity: 0.5;
      transition: opacity 0.2s ease;
    }
    &:hover:before {
      opacity: 1;
    }
  }
  
  .slick-prev {
    left: -20px;
    @media (max-width: 1024px) {
      left: -15px;
    }
    @media (max-width: 768px) {
      left: -15px;
    }
  }
  
  .slick-next {
    right: -25px;
    @media (max-width: 1024px) {
      right: -20px;
    }
    @media (max-width: 768px) {
      right: -20px;
    }
  }

  .slick-slide {
    transition: transform 0.3s ease;
    margin: 0 8px;
    &:hover {
      transform: scale(1.02);
    }
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
    speed: 400,
    slidesToShow: 6,
    slidesToScroll: 6,
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

  if (!moviesArray?.length) {
    return <Loader text="Loading Movies" />;
  }

  return (
    <CarouselWrapper>
      <StyledContainer maxWidth="sm">
        <StyledSlider {...settings}>
          {moviesArray.map((movie) => (
            <TileItem
              key={movie.id}
              img={movie.poster_path}
              path={movie.id}
            />
          ))}
        </StyledSlider>
      </StyledContainer>
    </CarouselWrapper>
  );
};

export default Tiles;
