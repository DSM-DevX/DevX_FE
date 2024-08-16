import styled from "styled-components";
import MemoWrite from "../components/Memo/MemoWrite";
import HeaderAfter from "../components/Header/HeaderAfter";
import { CompletedBtn } from "../components/Button/CompletedBtn";
import { motion } from "framer-motion";

function MemoWritePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <MemoWritePageAll>
        <HeaderAfter />
        <MemoWriteAll>
          <MemoWriteContents>
            <MemoWriteTitle>메모 작성하기</MemoWriteTitle>
            <MemoWrite />
          </MemoWriteContents>
          <CompletedDiv>
            <CompletedBtn />
          </CompletedDiv>
        </MemoWriteAll>
      </MemoWritePageAll>
    </motion.div>
  );
}

const MemoWritePageAll = styled.div`
  width: calc(100vw - 8px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 32px;
  height: 100vh;
  overflow-x: hidden;
`;

const MemoWriteContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const MemoWriteAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 78px;
`;

const MemoWriteTitle = styled.h3`
  width: 100%;
  display: flex;
  justify-content: start;
  color: #9038ff;
  font-weight: 700;
  font-size: 20px;
`;

const CompletedDiv = styled.div`
  margin-bottom: 78px;
`;

export default MemoWritePage;
