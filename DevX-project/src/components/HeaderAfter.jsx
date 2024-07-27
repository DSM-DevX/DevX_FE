import Logo from "../assets/DevXLogo.svg";
import styled from "styled-components";
import { useState } from "react";

function HeaderAfter() {
  const [LogClick, setLogClick] = useState("DevelopmentLogTitle");
  const [MemoClick, setMemoClick] = useState("MemoTitle");

  const DevelopmentLogClicked = () => {
    setLogClick("ClickDevelopmentLogTitle");
    setMemoClick("MemoTitle");
  };

  const MemoClicked = () => {
    setMemoClick("ClickMemoTitle");
    setLogClick("DevelopmentLogTitle");
  };

  return (
    <HeaderAll>
      <LogoImg src={Logo} alt="로고 이미지" />
      <TitleAll>
        <DevelopmentLogTitle
          onClick={DevelopmentLogClicked}
          className={LogClick}
        >
          개발 일지
        </DevelopmentLogTitle>
        <MemoTitle onClick={MemoClicked} className={MemoClick}>
          메모
        </MemoTitle>
      </TitleAll>
    </HeaderAll>
  );
}

const ClickMemoTitle = styled.div`
  font-size: 13px;
  color: #9038ff;
  font-weight: 700;
`;

const ClickDevelopmentLogTitle = styled.div`
  cursor: pointer;
  font-size: 13px;
  color: #9038ff;
  font-weight: 700;
`;

const LogoImg = styled.img`
  margin-left: 71px;
`;

const TitleAll = styled.div`
  display: flex;
  gap: 96px;
  justify-content: end;
  align-items: center;
  margin-right: 71px;
`;

const MemoTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
  cursor: pointer;
  &.ClickMemoTitle {
    color: #9038ff;
    font-weight: 700;
  }
  &:hover {
    color: #9038ff;
    font-weight: 700;
  }
`;

const DevelopmentLogTitle = styled.div`
  cursor: pointer;
  font-size: 13px;
  font-weight: 400;
  &.ClickDevelopmentLogTitle {
    color: #9038ff;
    font-weight: 700;
  }
  &:hover {
    color: #9038ff;
    font-weight: 700;
  }
`;

const HeaderAll = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 20px 0px 20px 0px;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 8px 0px #e3e3e3;
`;

export default HeaderAfter;
