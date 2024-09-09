import React from "react";
import styled from "styled-components";

export const CompletedBtn = ({ onClick }) => {
  return <BtnContent onClick={onClick} type="submit" value="작성완료" />;
};

const BtnContent = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 23px;
  font-weight: 400;
  width: 323px;
  padding: 19px 0px 20px 0px;
  border-radius: 40px;
  border: none;
  background: #9038ff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;
