import React from "react";
import styled from "styled-components";
import MemoCheckImg from "../../assets/MemoCheckImg.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const MemoCheckBtn = () => {
  const navigate = useNavigate();

  const MemoWriteClick = () => {
    navigate("/MemoCheckPage");
  };

  return (
    <CheckBtnWindowAll>
      <img src={MemoCheckImg} alt="일지 확인 이미지" />
      <CheckBtnText>내가 작성한 메모를 확인해보세요</CheckBtnText>
      <Button value={"메모 확인하기"} onClick={MemoWriteClick} />
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
