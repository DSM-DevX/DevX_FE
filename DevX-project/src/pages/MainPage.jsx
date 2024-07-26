import styled from "styled-components";
import HeaderBefore from "../components/HeaderBefore";
import ImageSlider from "../components/ImageSlider";
import MainLogo from "../assets/MainLogo.svg";
import StartBtn from "../components/StartBtn";

function MainPage() {
  return (
    <MainAll>
      <HeaderBefore />
      <ImageSlider />
      <BtnTitleAll>
        <MainTitleAll>
          <LogoTitle src={MainLogo} alt="메인화면 로고 이미지" />
          <SubTitle>
            편리하고 깔끔한 개발일지 관리, 지금 바로 시작해보세요!
          </SubTitle>
        </MainTitleAll>
        <MainStartBtn>
          <StartBtn />
        </MainStartBtn>
      </BtnTitleAll>
    </MainAll>
  );
}

const MainStartBtn = styled.div`
  margin-left: 147px;
`;

const BtnTitleAll = styled.div`
  display: flex;
  flex-direction: column;
  gap: 63px;
`;

const MainTitleAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  margin: 104px 0 0 147px;
  gap: 36px;
`;

const SubTitle = styled.div`
  font-size: 35px;
  font-weight: 600;
`;

const LogoTitle = styled.img``;

const MainAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100vh;
`;

export default MainPage;
