import React from 'react';
import styled from "styled-components";
import { HeaderBefore } from "../components/Header/HeaderBefore";
import Title from "../assets/GuideDevXTitle.svg";
import MainPageImg from "../assets/MainPage.svg";
import DevelopmentStartImg from "../assets/DevelopmentStartPage.svg";
import DevelopmentWriteImg from "../assets/DevelopmentWritePage.svg";
import DevelopmentCheckImg from "../assets/DevelopmentCheckPage.svg";
import DevelopmentCheckInImg from "../assets/DevelopmentCheckIn.svg";
import MemoStartImg from "../assets/MemoStartPage.svg";
import MemoWriteImg from "../assets/MemoWritePage.svg";
import MemoCheckImg from "../assets/MemoCheckPage.svg";
import { motion } from "framer-motion";

export const GuideDevXPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <GuideDevXContainer>
        <HeaderBefore />
        <GuideContents>
          <GuideDevXTitle src={Title} />
          <GuideImgContainer>
            <PageImg src={MainPageImg} alt="메인페이지 이미지" />
            <PageImg src={DevelopmentStartImg} alt="일지 시작 이미지" />
            <PageImg src={DevelopmentWriteImg} alt="일지 작성 이미지" />
            <PageImg src={DevelopmentCheckImg} alt="일지 확인 이미지" />
            <PageImg src={DevelopmentCheckInImg} alt="일지 글 확인 이미지" />
            <PageImg src={MemoStartImg} alt="메모 시작 이미지" />
            <PageImg src={MemoWriteImg} alt="메모 작성 이미지" />
            <PageImg src={MemoCheckImg} alt="메모 확인 이미지" />
          </GuideImgContainer>
        </GuideContents>
      </GuideDevXContainer>
    </motion.div>
  );
};

const GuideDevXContainer = styled.div`
  background-color: #fcfcfc;
  display: flex;
  flex-direction: column;
  gap: 88px;
  align-items: center;
`;

const GuideContents = styled.div`
  width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 50px;
`;

const PageImg = styled.img`
  width: 1200px;
`;

const GuideDevXTitle = styled.img`
  width: 685px;
`;

const GuideImgContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 103px;
  margin-bottom: 234px;
`;
