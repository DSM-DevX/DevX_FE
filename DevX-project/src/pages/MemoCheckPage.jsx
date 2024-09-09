import React, { useState } from "react";
import styled from "styled-components";
import { HeaderAfter } from "../components/Header/HeaderAfter";
import { MemoWindow } from "../components/Memo/MemoWindow";
import { MemoWritePage } from "./MemoWritePage";
import { AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/Button";

export const MemoCheckPage = ({ value }) => {
  const location = useLocation();
  const { memo = [] } = location.state || {}; //전달된 상태를 받아온다
  const [getMemo, setGetMemo] = useState([]);

  //로컬에 저장된 값을 받아온다
  useEffect(() => {
    const localValue = localStorage.getItem("value");

    if (localValue) {
      setGetMemo(JSON.parse(localValue));
    }
  }, []);

  //새로운 메모가 있다면 로컬 스토리지에 저장할 것
  useEffect(() => {
    if (memo.length > 0) {
      const updateMemo = [...getMemo, ...memo];
      localStorage.setItem("value", JSON.stringify(updateMemo));
      setGetMemo(updateMemo);
    }
  }, [memo]);

  const navigate = useNavigate();

  const memoAddClick = () => {
    navigate("/MemoWritePage");
  };

  return (
    <CheckContainer>
      <HeaderAfter />
      <BtnContainer>
        <Button value={"메모 추가하기"} onClick={memoAddClick} />
      </BtnContainer>
      <ListAll>
        {memo.length > 0 ? (
          memo.map((memo) => (
            <li key={memo.id}>
              <MemoWindow value={memo} />
            </li>
          ))
        ) : (
          <ErrorMsg>메모가 없습니다</ErrorMsg>
        )}
      </ListAll>
    </CheckContainer>
  );
};

const BtnContainer = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin: 40px 300px 0 0;
`;
const ErrorMsg = styled.div`
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;
const ListAll = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 63px;
  height: 100%;
  margin-top: 40px;
`;
const CheckContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
`;
