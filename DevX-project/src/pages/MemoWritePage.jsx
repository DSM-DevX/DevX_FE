import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { MemoWrite } from "../components/Memo/MemoWrite";
import { HeaderAfter } from "../components/Header/HeaderAfter";
import { CompletedBtn } from "../components/Button/CompletedBtn";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";

export const MemoWritePage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const [memo, setMemo] = useState([]);
  const data = localStorage.getItem("value")
    ? `${localStorage.getItem("value")} ${value}` //로컬스토리지에서 들어있는 데이터값 가져오기
    : value;

  const valueMemo = [];

  const completeClick = () => {
    localStorage.setItem("value", data); //데이터값을 저장함

    setValue(""); // value값 초기화해줌
    navigate("/MemoCheckPage");
  };

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
            <MemoWrite
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
          </MemoWriteContents>
          <CompletedDiv>
            <CompletedBtn onClick={completeClick} />
          </CompletedDiv>
        </MemoWriteAll>
      </MemoWritePageAll>
    </motion.div>
  );
};

const MemoWritePageAll = styled.div`
  width: calc(100vw - 8px);
  display: flex;
  flex-direction: column;
  justify-content: start;
  gap: 32px;
  height: 100vh;
  overflow-x: hidden;
  background-color: #fcfcfc;
`;

const MemoWriteContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
`;

const MemoWriteAll = styled.form`
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
