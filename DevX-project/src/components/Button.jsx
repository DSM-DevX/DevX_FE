import React from "react";
import styled from "styled-components";

export const Button = ({ onClick, value }) => {
  return <BtnContent onClick={onClick}>{value}</BtnContent>;
};

const BtnContent = styled.div`
  border-radius: 40px;
  border: none;
  background: #9038ff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  height: 60px;
  width: 323px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 18px;
  font-weight: 400;
  &:active {
    outline: none;
  }
`;
