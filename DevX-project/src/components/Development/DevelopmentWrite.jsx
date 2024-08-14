import styled from "styled-components";
import { TitleContainer } from "./DevelopmentWriteComponent/TitleContainer";
import { DateContainer } from "./DevelopmentWriteComponent/DateContainer";
import { ProjectOverview } from "./DevelopmentWriteComponent/ProjectOverview";
import { ProgressContainer } from "./DevelopmentWriteComponent/ProgressContainer";
import { IssuesContainer } from "./DevelopmentWriteComponent/IssuesContainer";
import { ResultContainer } from "./DevelopmentWriteComponent/ResultContainer";
import { DevelopmentMemo } from "./DevelopmentWriteComponent/DevelopmentMemo";

export const DevelopmentWrite = () => {
  return (
    <WriteContainer>
      <TitleContainer />
      <DateContainer />
      <ProjectOverview />
      <ProgressContainer />
      <IssuesContainer />
      <ResultContainer />
      <DevelopmentMemo />
    </WriteContainer>
  );
};

const WriteContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
