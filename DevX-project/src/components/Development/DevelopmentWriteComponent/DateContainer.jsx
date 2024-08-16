import styled from "styled-components";
import React from 'react';

export const DateContainer = () => {
  return (
    <>
      <DateAll>
        <DateLabel>날짜</DateLabel>
        <DateInput type="Date" placeholder="날짜를 입력하세요" />
      </DateAll>
    </>
  );
};

const DateAll = styled.div`
  background-color: #ffffff;
  width: 1714px;
  height: 64px;
  display: flex;
  gap: 45px;
  align-items: center;
  border: 1px #000000 solid;
  border-top: 0;
`;

const DateLabel = styled.label`
  margin-left: 40px;
  font-size: 17px;
`;

const DateInput = styled.input`
  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 30px;
  }

  position: relative;
  width: 1599px;
  height: 64px;
  border: none;
  font-size: 17px;
  background-color: #ffffff;

  &::placeholder {
    color: #acacac;
    font-size: 17px;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
