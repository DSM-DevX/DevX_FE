import styled from "styled-components";

export const ResultContainer = () => {
  return (
    <>
      <ResultAll>
        <ResultLabel>결과물</ResultLabel>
        <ResultInput type="text" placeholder="결과물에 대해 작성해주세요" />
      </ResultAll>
    </>
  );
};

const ResultAll = styled.div`
  background-color: #ffffff;
  width: 1714px;
  height: 277px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  border: 1px #000000 solid;
  border-top: 0;
`;

const ResultLabel = styled.label`
  margin-top: 28px;
  margin-left: 40px;
  font-size: 17px;
`;

const ResultInput = styled.textarea`
  background-color: #ffffff;
  width: 1634px;
  height: 195px;
  border: none;
  font-size: 17px;
  margin: 0 40px 28px 40px;
  resize: none;

  &::placeholder {
    color: #acacac;
    font-size: 17px;
  }

  &:focus {
    border: none;
    outline: none;
  }
`;
