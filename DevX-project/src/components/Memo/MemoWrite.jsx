import styled from "styled-components";

function MemoWrite() {
  return <MemoWriteAll placeholder="간단한 메모를 남겨보세요" />;
}

const MemoWriteAll = styled.textarea`
  padding: 52px 63px 52px 63px;
  color: #acacac;
  font-size: 17px;
  border: 0.5px solid #000000;
  border-radius: 6px;
  outline: none;
  width: 1655px;
  height: 586px;
`;

export default MemoWrite;
