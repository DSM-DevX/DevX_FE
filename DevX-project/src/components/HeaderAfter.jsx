import Logo from "../assets/DevXLogo.svg";
import styled from "styled-components";

function HeaderAfter() {
  return (
    <HeaderAll>
      <LogoImg src={Logo} alt="로고 이미지" />
      <TitleAll>
        <DevelopmentLogTitle>개발 일지</DevelopmentLogTitle>
        <MemoTitle>메모</MemoTitle>
      </TitleAll>
    </HeaderAll>
  );
}

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
`;

const DevelopmentLogTitle = styled.div`
  font-size: 13px;
  font-weight: 400;
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
