import React, { useState } from "react";
import styled from "styled-components";
import { HeaderAfter } from "../components/Header/HeaderAfter";
import { MemoWindow } from "../components/Memo/MemoWindow";
import { MemoWritePage } from "./MemoWritePage";
import { AnimatePresence } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "../components/Button";

export const MemoCheckPage = () => {
  const [getMemo, setGetMemo] = useState(
    localStorage.getItem("value")?.split(" ") || [] //로컬스토리지에 있는 값을 가져와 배열로 만듦 -> 초깃값으로 설정
  );

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
        {getMemo.length > 0 ? (
          getMemo.map((memo) => (
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
