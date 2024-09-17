import React, { useEffect } from "react";
import styled from "styled-components";
import { TitleContainer } from "./DevelopmentWriteComponent/TitleContainer";
import { DateContainer } from "./DevelopmentWriteComponent/DateContainer";
import { ProjectOverview } from "./DevelopmentWriteComponent/ProjectOverview";
import { ProgressContainer } from "./DevelopmentWriteComponent/ProgressContainer";
import { IssuesContainer } from "./DevelopmentWriteComponent/IssuesContainer";
import { ResultContainer } from "./DevelopmentWriteComponent/ResultContainer";
import { DevelopmentMemo } from "./DevelopmentWriteComponent/DevelopmentMemo";
import { useState } from "react";

export const DevelopmentWrite = ({
  setTitleValue,
  titleValue,
  setDateValue,
  dateValue,
  setOverViewValue,
  overViewValue,
  setProgressValue,
  progressValue,
  setIssuesValue,
  issuesValue,
  setResultValue,
  resultValue,
  setMemoValue,
  memoValue,
}) => {
  useEffect(() => {
    const storedData = localStorage.getItem("value");
    if (storedData) {
      const data = storedData.split(" ");
      setTitleValue(data[0] || "");
      setDateValue(data[1] || "");
      setOverViewValue(data[2] || "");
      setProgressValue(data[3] || "");
      setIssuesValue(data[4] || "");
      setResultValue(data[5] || "");
      setMemoValue(data[6] || ""); //로컬스토리지에서 들어있는 데이터값 가져오기
    }
  }, [
    setTitleValue,
    setDateValue,
    setOverViewValue,
    setProgressValue,
    setIssuesValue,
    setResultValue,
    setMemoValue,
  ]);

  return (
    <WriteContainer>
      <TitleContainer
        value={titleValue}
        onChange={(e) => setTitleValue(e.target.value)}
      />
      <DateContainer
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />
      <ProjectOverview
        value={overViewValue}
        onChange={(e) => setOverViewValue(e.target.value)}
      />
      <ProgressContainer
        value={progressValue}
        onChange={(e) => setProgressValue(e.target.value)}
      />
      <IssuesContainer
        value={issuesValue}
        onChange={(e) => setIssuesValue(e.target.value)}
      />
      <ResultContainer
        value={resultValue}
        onChange={(e) => setResultValue(e.target.value)}
      />
      <DevelopmentMemo
        value={memoValue}
        onChange={(e) => setMemoValue(e.target.value)}
      />
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
