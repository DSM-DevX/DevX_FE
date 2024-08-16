import styled from "styled-components";
import { HeaderBefore } from "../components/Header/HeaderBefore";
import MainLogo from "../assets/MainLogo.svg";

export const WhatIsDevXPage = () => {
  return (
    <WhatIsDevXContainer>
      <HeaderBefore />
      <ContentsAll>
        <SubContainer1>
          <DescriptionWindow>간단한 메모 작성하기</DescriptionWindow>
          <DescriptionWindow>포트폴리오 보관하기</DescriptionWindow>
        </SubContainer1>
        <DevXMainImg src={MainLogo} />
        <SubContainer2>
          <DescriptionWindow>개발일지 작성하기</DescriptionWindow>
          <DescriptionWindow>개발일지 관리하기</DescriptionWindow>
        </SubContainer2>
      </ContentsAll>
    </WhatIsDevXContainer>
  );
};

const SubContainer1 = styled.div`
  display: flex;
  gap: 460px;
  & > :nth-child(1) {
    margin-bottom: 146px;
  }
  & > :nth-child(2) {
    margin-top: 146px;
  }
`;

const SubContainer2 = styled.div`
  display: flex;
  gap: 450px;
  & > :nth-child(1) {
    margin-bottom: 139px;
  }
  & > :nth-child(2) {
    margin-top: 139px;
  }
`;

const WhatIsDevXContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 100vw;
  height: 100%;
`;

const ContentsAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin: 62px 0;
`;

const DevXMainImg = styled.img`
  width: 227px;
  height: 119px;
`;

const DescriptionWindow = styled.div`
  width: 260px;
  height: 260px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 27px;
  font-weight: 500;
  border-radius: 130px;
  box-shadow: 0 4px 4px 0 rgb(0, 0, 0, 0.25);
`;
