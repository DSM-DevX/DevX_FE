import React from "react";
import styled from "styled-components";
import MemoWriteImg from "../../assets/MemoWriteImg.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const MemoWriteBtn = () => {
  const navigate = useNavigate();

  const MemoWriteClick = () => {
    navigate("/MemoWritePage");
  };

  return (
    <CheckBtnWindowAll>
      <img src={MemoWriteImg} alt="일지 작성 이미지" />
      <CheckBtnText>메모를 정리해보세요</CheckBtnText>
      <Button value={"메모 작성하기"} onClick={MemoWriteClick} />
    </CheckBtnWindowAll>
  );
};

const CheckBtnText = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 23px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CheckBtnWindowAll = styled.div`
  border-radius: 6px;
  border: 0.5px solid #888;
  background: #fff;
  padding: 55px 60px 46px 60px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 33px;
`;
