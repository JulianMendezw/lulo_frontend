import React from 'react';
import img1 from './../public/images/Slideshow/Adidas.jpg';
import img2 from './../public/images/Slideshow/banner-nike.jpg';
import img3 from './../public/images/Slideshow/manrunner.jpg';
import './Slideshow.module.css';
import Image from 'next/image';
import LeftArrow from './../public/images/Slideshow/leftarrow.png';
import RightArrow from './../public/images/Slideshow/rightarrow.png';
import Styled from 'styled-components';

const Slideshow = () => {
  return (
    <MainContainer>
      <SlideshowContainer>
        <Slide>
          <a href="#">
            <Image src={img1} alt="" />
          </a>
        </Slide>
        <Slide>
          <a href="#">
            <Image src={img2} alt="" />
          </a>
        </Slide>
        <Slide>
          <a href="#">
            <Image src={img3} alt="" />
          </a>
        </Slide>
      </SlideshowContainer>

      <div>
        <button>
          <Image src={LeftArrow} alt="" width="10" height="10" />
        </button>
        <button>
          <Image src={RightArrow} alt="" width="10" height="10" />
        </button>
      </div>
    </MainContainer>
  );
};
const MainContainer = Styled.div`
	margin: 40px auto;
	overflow: hidden;
`;

const SlideshowContainer = Styled.div`
	display: flex;
	flex-wrap: nowrap;
`;

const Slide = Styled.div`
	min-width: 100%;
	overflow: hidden;
	transition: .3s ease all;

	max-height: 400px;


	img{
		width: 100%;
	}
`;

export default Slideshow;
