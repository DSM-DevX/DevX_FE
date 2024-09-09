import React from "react";
import styled from "styled-components";
import DevelopmentCheckImg from "../../assets/DevelopmentCheckImg.svg";
import { Button } from "../Button";

export const DevelopmentCheckBtn = () => {
  return (
    <CheckBtnWindowAll>
      <img src={DevelopmentCheckImg} alt="일지 확인 이미지" />
      <CheckBtnText>내가 작성한 개발일지를 확인해보세요</CheckBtnText>
      <Button value={"일지 확인하기"} />
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

