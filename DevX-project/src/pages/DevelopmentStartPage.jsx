import styled from "styled-components";
import HeaderAfter from "../components/HeaderAfter";
import DevelopmentWriteBtn from "../components/DevelopmentWriteBtn";
import DevelopmentCheckBtn from "../components/DevelopmentCheckBtn";

function DevelopmentStartPage() {
  return (
    <StartPageAll>
      <HeaderAfter />
      <BtnAll>
        <DevelopmentWriteBtn />
        <DevelopmentCheckBtn />
      </BtnAll>
    </StartPageAll>
  );
}

const StartPageAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100vh;
`;

const BtnAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 123px;
  width: 100%;
  height: 100%;
`;

export default DevelopmentStartPage;
