import React from "react";
import styled from "styled-components";
import DevelopmentWriteImg from "../../assets/DevelopmentWriteImg.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const DevelopmentWriteBtn = () => {
  const navigate = useNavigate();

  const DevelopmentWriteClick = () => {
    navigate("/DevelopmentWritePage");
  };

  return (
    <CheckBtnWindowAll>
      <img src={DevelopmentWriteImg} alt="일지 작성 이미지" />
      <CheckBtnText>내가 만든 프로젝트를 정리해보세요</CheckBtnText>
      <Button value={"일지 작성하기"} onClick={DevelopmentWriteClick} />
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
