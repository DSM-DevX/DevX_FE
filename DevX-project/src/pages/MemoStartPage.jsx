import styled from "styled-components";
import HeaderAfter from "../components/Header/HeaderAfter";
import MemoCheckBtn from "../components/Button/MemoCheckBtn";
import MemoWriteBtn from "../components/Button/MemoWriteBtn";

function MemoStartPage() {
  return (
    <StartPageAll>
      <HeaderAfter />
      <BtnAll>
        <MemoWriteBtn />
        <MemoCheckBtn />
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

export default MemoStartPage;
