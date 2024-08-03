import styled from "styled-components";
import HeaderBefore from "../components/Header/HeaderBefore";
import ImageSlider from "../components/ImageSlider";
import MainLogo from "../assets/MainLogo.svg";
import { useNavigate } from "react-router-dom";

function MainPage() {
  const navigate = useNavigate();
  const StartBtnClick = () => {
    navigate("/DevelopmentStartPage");
  };
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
          <BtnAll onClick={StartBtnClick}>
            <BtnContent>시작하기</BtnContent>
          </BtnAll>
        </MainStartBtn>
      </BtnTitleAll>
    </MainAll>
  );
}

const BtnContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 23px;
  font-weight: 400;
`;

const BtnAll = styled.div`
  width: 323px;
  padding: 22px 0px 22px 0px;
  border-radius: 40px;
  border: none;
  background: #9038ff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

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
