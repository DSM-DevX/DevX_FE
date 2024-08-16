import { useState } from "react";
import styled from "styled-components";


export const MemoWrite = () => {
  return <MemoWriteAll placeholder="간단한 메모를 남겨보세요" />;
};

const MemoWriteAll = styled.textarea`
  padding: 52px 63px 52px 63px;
  color: #000000;
  font-size: 20px;
  border: 0.5px solid #000000;
  border-radius: 6px;
  outline: none;
  width: 1655px;
  height: 586px;

  &::placeholder {
    color: #acacac;
    font-size: 17px;
  }
`;

