import styled from "styled-components";

function DevelopmentContents() {
  return (
    <DevelopmentContentsAll>
      <DateDiv>
        <DateContents></DateContents>
      </DateDiv>
      <TitleDiv>
        <TitleContents></TitleContents>
      </TitleDiv>
    </DevelopmentContentsAll>
  );
}

const DevelopmentContentsAll = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
`;

const TitleContents = styled.div`
  font-size: 17px;
  font-weight: 400;
`;

const TitleDiv = styled.div`
  border-width: 0.5px 0 0.5px 0;
  border-style: solid;
  border-color: #000;
  padding: 19px 1291px 19px 40px;
`;

const DateContents = styled.div`
  font-size: 17px;
  font-weight: 400;
`;

const DateDiv = styled.div`
  border-width: 0.5px 0.5px 0.5px 0;
  border-style: solid;
  border-color: #000;
  padding: 19px 60px;
`;

export default DevelopmentContents;
