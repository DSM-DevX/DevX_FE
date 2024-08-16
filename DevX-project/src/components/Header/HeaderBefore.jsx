import React from 'react';
import Logo from "../../assets/DevXLogo.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const HeaderBefore = () => {
  const navigate = useNavigate();
  const LogoClick = () => {
    navigate("/");
  };

  return (
    <HeaderAll>
      <LogoImg src={Logo} alt="로고 이미지" onClick={LogoClick} />
    </HeaderAll>
  );
};

const LogoImg = styled.img`
  margin-left: 71px;
  cursor: pointer;
`;

const HeaderAll = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100vw;
  padding: 20px 0px 20px 0px;
  align-items: center;
  background: #fff;
  box-shadow: 0px 0px 8px 0px #e3e3e3;
`;
