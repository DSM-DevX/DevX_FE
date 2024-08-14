import styled from "styled-components";
import { DevelopmentWrite } from "./../components/Development/DevelopmentWrite";
import { motion } from "framer-motion";
import HeaderAfter from "../components/Header/HeaderAfter";
import { CompletedBtn } from "../components/Button/CompletedBtn";

export const DevelopmentWritePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <WritePageContainer>
        <HeaderAfter />
        <WritePageContents>
          <WriteTitle>일지 작성하기</WriteTitle>
          <WritingContents>
            <DevelopmentWrite />
            <CompletedBtn />
          </WritingContents>
        </WritePageContents>
      </WritePageContainer>
    </motion.div>
  );
};

const WritePageContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 1718px;
  justify-content: center;
  align-items: center;
  gap: 37px;
`;

const WritingContents = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
  gap: 64px;
  margin-bottom: 77px;
`;

const WritePageContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 37px;
`;

const WriteTitle = styled.h3`
  width: 100%;
  display: flex;
  justify-content: start;
  color: #9038ff;
  font-weight: 700;
  font-size: 20px;
`;
