import React, { useRef, useEffect } from 'react';
import img1 from './../../public/assets/images/Slideshow/Adidas.jpg';
import img2 from './../../public/assets/images/Slideshow/banner-nike.jpg';
import img3 from './../../public/assets/images/Slideshow/manrunner.jpg';
import style from './Slideshow.module.scss';
import Image from 'next/image';
import LeftArrow from './../../public/assets/images/Slideshow/leftarrow.png';
import RightArrow from './../../public/assets/images/Slideshow/rightarrow.png';

const Slideshow = () => {
  const slideshow = useRef(null);
  const intervalSlideshow = useRef(null);

  const previousPic = () => {
    if (slideshow.current.children.length > 0) {
      const indexLastElement = slideshow.current.children.length - 1;
      const lastElement = slideshow.current.children[indexLastElement];
      slideshow.current.insertBefore(lastElement, slideshow.current.firstChild);

      slideshow.current.style.transition = 'none';

      const slideshowSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideshowSize}px)`;

      setTimeout(() => {
        slideshow.current.style.transition = '300ms ease-out all';

        slideshow.current.style.transform = `translateX(0)`;
      }, 30);
    }
  };

  const nextPic = () => {
    if (slideshow.current.children.length > 0) {
      const firstElement = slideshow.current.children[0];
      slideshow.current.style.transition = `300ms ease-out all`;

      const slideshowSize = slideshow.current.children[0].offsetWidth;
      slideshow.current.style.transform = `translateX(-${slideshowSize}px)`;

      const transition = () => {
        slideshow.current.style.transition = 'none';
        slideshow.current.style.transform = `translateX(0)`;

        slideshow.current.appendChild(firstElement);
        slideshow.current.removeEventListener('transitionend', transition);
      };
      slideshow.current.addEventListener('transitionend', transition);
    }
  };

  useEffect(() => {
    intervalSlideshow.current = setInterval(() => {
      nextPic();
    }, 5000);

    slideshow.current.addEventListener('mouseenter', () => {
      clearInterval(intervalSlideshow.current);
    });
    slideshow.current.addEventListener('mouseleave', () => {
      intervalSlideshow.current = setInterval(() => {
        nextPic();
      }, 5000);
    });
  }, []);

  return (
    <div className={style.mainContainer}>
      <div className={style.SlideshowContainer} ref={slideshow}>
        <div className={style.slide}>
          <a href="#">
            <Image src={img1} alt="" layout="fill" objectFit="cover" />
          </a>
        </div>

        <div className={style.slide}>
          <a href="#">
            <Image src={img2} alt="" />
          </a>
        </div>

        <div className={style.slide}>
          <a href="#">
            <Image src={img3} alt="" />
          </a>
        </div>
      </div>

      <div className={style.controls}>
        <div className={style.button} onClick={previousPic}>
          <Image src={LeftArrow} alt="" />
        </div>
        <div className={style.button2} onClick={nextPic}>
          <Image src={RightArrow} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Slideshow;
