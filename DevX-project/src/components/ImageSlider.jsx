import styled from "styled-components";
import SlidePage1 from "../assets/imageslide1.svg";
import SlidePage2 from "../assets/imageslide2.svg";
import { useState, useEffect } from "react";

function ImageSlider() {
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTranslateX((prevTranslateX) => (prevTranslateX === 0 ? -1920 : 0));
    }, 4000); // 5초마다 슬라이드 변경을 반복한다.(prev == 0: 원래 값일 때 -1920을 하여 다음 페이지로 넘어가게 하고, 아니라면 0으로 바꿔서 처음으로 돌아오게 한다.)
    return () => clearInterval(interval); // 계속 반복하는 것이 필요 없을 때(언마운트 시) 메모리 누수를 방지하기 위해서 처리한다.
  }, []);

  return (
    <ImageSlideAll>
      <SlideImgAll translateX={translateX}>
        {/*translateX={translateX}는 translateX에 위에서 받아온 값인 translateX의 값을 넣는 것이다. */}
        <SlidePage src={SlidePage1} alt="이미지 슬라이드 첫 페이지" />
        <SlidePage src={SlidePage2} alt="이미지 슬라이드 두 번째 페이지" />
      </SlideImgAll>
    </ImageSlideAll>
  );
}

const SlidePage = styled.img`
  cursor: pointer;
`;

const SlideImgAll = styled.div`
  display: flex;
  transform: ${({ translateX }) => `translate(${translateX}px, 0)`};
  transition: transform 2s ease-in-out;
`;

const ImageSlideAll = styled.div`
  width: 100vw;
  overflow: hidden;
`;

export default ImageSlider;
