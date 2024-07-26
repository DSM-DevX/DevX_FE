import styled from "styled-components";

function StartBtn() {
  return (
    <BtnAll>
      <BtnContent>시작하기</BtnContent>
    </BtnAll>
  );
}

const BtnContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 23px;
  font-weight: 400;
`;

const BtnAll = styled.div`
  width: 323px;
  padding: 22px 0px 22px 0px;
  border-radius: 40px;
  border: none;
  background: #9038ff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export default StartBtn;
