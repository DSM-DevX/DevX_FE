import styled from "styled-components";

export const DevelopmentMemo = () => {
  return (
    <>
      <MemoAll>
        <MemoLabel>개발 메모</MemoLabel>
        <MemoInput
          type="text"
          placeholder="프로젝트에 대해 메모할 것이 있다면 작성해주세요"
        />
      </MemoAll>
    </>
  );
};

const MemoAll = styled.div`
  background-color: #ffffff;
  width: 1714px;
  height: 142px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  border: 1px #000000 solid;
  border-radius: 0 0 6px 6px;
  border-top: 0;
`;

const MemoLabel = styled.label`
  margin-top: 28px;
  margin-left: 40px;
  font-size: 17px;
`;

const MemoInput = styled.textarea`
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
