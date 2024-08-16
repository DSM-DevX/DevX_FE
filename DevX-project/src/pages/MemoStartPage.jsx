import styled from "styled-components";
import { HeaderAfter } from "../components/Header/HeaderAfter";
import { MemoCheckBtn } from "../components/Button/MemoCheckBtn";
import { MemoWriteBtn } from "../components/Button/MemoWriteBtn";
import { motion } from "framer-motion";

export const MemoStartPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <StartPageAll>
        <HeaderAfter />
        <BtnAll>
          <MemoWriteBtn />
          <MemoCheckBtn />
        </BtnAll>
      </StartPageAll>
    </motion.div>
=======
import HeaderAfter from "../components/HeaderAfter";
import MemoCheckBtn from "../components/MemoCheckBtn";
import MemoWriteBtn from "../components/MemoWriteBtn";



function MemoStartPage() {
  return (
    <StartPageAll>
      <HeaderAfter />
      <BtnAll>
        <MemoWriteBtn />
        <MemoCheckBtn />
      </BtnAll>
    </StartPageAll>
>>>>>>> Stashed changes
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
