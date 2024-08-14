import styled from "styled-components";

export const ProjectOverview = () => {
  return (
    <>
      <ProjectOverviewAll>
        <ProjectOverviewLabel>프로젝트 개요</ProjectOverviewLabel>
        <ProjectOverviewInput type="text" placeholder="제목을 입력하세요" />
      </ProjectOverviewAll>
    </>
  );
};

const ProjectOverviewAll = styled.div`
  width: 1714px;
  height: 193px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: start;
  border: 1px #000000 solid;
  border-top: 0;
`;

const ProjectOverviewLabel = styled.label`
  margin-top: 28px;
  margin-left: 40px;
  font-size: 17px;
`;

const ProjectOverviewInput = styled.textarea`
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
