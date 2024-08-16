import styled from "styled-components";

export const MemoWindow = () => {
  return (
    <All>
      <MemoAll>
        <MemoContents></MemoContents>
      </MemoAll>
    </All>
  );
};

const MemoContents = styled.div`
  font-size: 17px;
  font-weight: 400;
`;

const MemoAll = styled.div`
  width: 1418px;
  display: flex;
  padding: 49px 135px 49px 65px;
  align-items: center;
  border-radius: 6px;
  border: 0.5px solid #000;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(83, 83, 83, 0.25);
`;

const All = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;
