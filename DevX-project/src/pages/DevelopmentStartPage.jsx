import styled from "styled-components";
import { HeaderAfter } from "../components/Header/HeaderAfter";
import { DevelopmentWriteBtn } from "../components/Button/DevelopmentWriteBtn";
import { DevelopmentCheckBtn } from "../components/Button/DevelopmentCheckBtn";
import { motion } from "framer-motion";

export const DevelopmentStartPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StartPageAll>
        <HeaderAfter />
        <BtnAll>
          <DevelopmentWriteBtn />
          <DevelopmentCheckBtn />
        </BtnAll>
      </StartPageAll>
    </motion.div>
  );
};

const StartPageAll = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  height: 100vh;
  background-color: #fcfcfc;
`;

const BtnAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 123px;
  width: 100%;
  height: 100%;
`;
