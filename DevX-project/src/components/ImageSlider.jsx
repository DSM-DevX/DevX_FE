import React from "react";
import styled from "styled-components";
import SlidePage1 from "../assets/imageslide1.svg";
import SlidePage2 from "../assets/imageslide2.svg";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const ImageSlider = () => {
  const navigate = useNavigate();

  const SecondImgClick = () => {
    navigate("/WhatIsDevXPage");
  };

  const FirstImgClick = () => {
    navigate("/GuideDevXPage");
  };

  //슬라이드 인덱스 상태 처리를 해준다
  const [currentIndex, setCurrentIndex] = useState(0);

  //슬라이드 전환 간격을 조정해줄 것이다.
  const slideIntervalRef = useRef(null);

  //슬라이드 이미지 배열이다.
  const imgArr = [];
  const numberOfSlides = 100; // 필요한 슬라이드 수

  for (let index = 0; index < numberOfSlides; index++) {
    if (index % 2 === 0) {
      imgArr[index] = SlidePage1; // 짝수 인덱스일 경우
    } else {
      imgArr[index] = SlidePage2; // 홀수 인덱스일 경우
    }
  }

  //슬라이드의 개수를 파악한다.
  const slideLength = imgArr.length;

  //슬라이드를 다음 페이지로 넘어가게 하는 함수이다.
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slideLength);
  };

  //컴포넌트 마운트 시 슬라이드 자동 전환을 설정한다.
  useEffect(() => {
    slideIntervalRef.current = setInterval(nextSlide, 4000);
    //컴포넌트 언마운트 시 인터벌 클리어
    return () => clearInterval(slideIntervalRef.current);
  }, []);

  return (
    <ImageSlideAll>
      <SlideImgAll style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {" "}
        {/*현재 인덱스에 따라 위치 이동을 시킨다.*/}
        {/* <SlidePage src={imgArr[slideLength - 1]} /> */}
        {imgArr.map((slide, index, src) =>
          src === SlidePage2 ? (
            <SlidePage
              src={slide}
              alt="slide 이미지"
              key={index - 1}
              onClick={index % 2 === 0 ? FirstImgClick : SecondImgClick}
            />
          ) : (
            <SlidePage
              src={slide}
              alt="slide 이미지"
              key={index - 1}
              onClick={index % 2 === 0 ? FirstImgClick : SecondImgClick}
            />
          )
        )}
        {/* 첫번째 슬라이드를 마지막에 추가한다. */}
        {/* <SlidePage src={imgArr[0]} /> */}
      </SlideImgAll>
      {/* <SlideDotContainer>
        {imgArr.map(
          (
            _,
            index
            //_는 배열의 각 요소를 의미한다. , 하지만 실제로 그 값을 사용하지 않기 때문에 _을 사용한다.
          ) => (
            <SlideDot
              key={index}
              active={index === currentIndex}
              onClick={() => setCurrentIndex(index)}
            />
          )
        )}
      </SlideDotContainer> */}
    </ImageSlideAll>
  );
};

const SlidePage = styled.img`
  cursor: pointer;
  width: 100%;
  flex-shrink: 0; //슬라이드가 축소되지 않도록 하기 위함이다.
`;

const SlideImgAll = styled.div`
  display: flex;
  transition: transform 1s ease-in-out;
`;

const ImageSlideAll = styled.div`
  width: 100vw;
  overflow: hidden;
`;

// const SlideDot = styled.div`
//   width: 10px;
//   height: 10px;
//   border-radius: 50%;
//   background-color: ${({ active }) => (active ? "black" : "lightgray")};
//   margin: 0.5px;
//   cursor: pointer;
// `;

// const SlideDotContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   margin-top: 10px;
//   gap: 10px;
// `;
