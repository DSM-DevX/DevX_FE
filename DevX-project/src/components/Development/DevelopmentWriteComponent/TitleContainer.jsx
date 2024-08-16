import React from 'react';
import styled from "styled-components";

export const TitleContainer = () => {
  return (
    <>
      <TitleAll>
        <TitleLabel>제목</TitleLabel>
        <TitleInput type="text" placeholder="제목을 입력하세요" />
      </TitleAll>
    </>
  );
};

const TitleAll = styled.div`
  background-color: #ffffff;
  width: 1714px;
  height: 64px;
  display: flex;
  gap: 45px;
  align-items: center;
  border: 1px #000000 solid;
  border-radius: 6px 6px 0 0;
`;

const TitleLabel = styled.label`
  margin-left: 40px;
  font-size: 17px;
`;

const TitleInput = styled.input`
  background-color: #ffffff;
  width: 1599px;
  height: 64px;
  border: none;
  font-size: 17px;

  &::placeholder {
    color: #acacac;
    font-size: 17px;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
