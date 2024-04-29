import React from 'react';

import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Image,
} from 'pure-react-carousel';
import howItWorks1 from '../assets/images/howItWorks1.jpg';
import howItWorks2 from '../assets/images/howItWorks2.jpg';
import howItWorks3 from '../assets/images/howItWorks3.png';
import 'pure-react-carousel/dist/react-carousel.es.css';
import styled from 'styled-components';
import leftArrow from '../assets/images/leftArrow.png';
import rightArrow from '../assets/images/rightArrow.png';
import { color } from '../theme';

const StyledImage = styled(Image)`
  object-fit: contain;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;
`;

const StyledButtonBack = styled(ButtonBack)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1em;
`;

const StyledButtonNext = styled(ButtonNext)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${color.black};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
`;

const StyledIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const Carousel = () => (
  <CarouselProvider
    visibleSlides={1}
    totalSlides={3}
    naturalSlideWidth={400}
    naturalSlideHeight={400}
  >
    <Slider>
      <Slide tag="a" index={0}>
        <StyledImage src={howItWorks1} />
      </Slide>
      <Slide tag="a" index={1}>
        <StyledImage src={howItWorks2} />
      </Slide>
      <Slide tag="a" index={2}>
        <StyledImage src={howItWorks3} />
      </Slide>
    </Slider>
    <StyledButtonContainer>
      <StyledButtonBack>
        <StyledIcon src={leftArrow} alt="back" />
      </StyledButtonBack>
      <StyledButtonNext>
        <StyledIcon src={rightArrow} alt="back" />
      </StyledButtonNext>
    </StyledButtonContainer>
  </CarouselProvider>
);

export default Carousel;
