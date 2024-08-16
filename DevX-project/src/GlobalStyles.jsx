import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  border: 0px;
  margin: 0px;
  padding: 0px;
  &::-webkit-scrollbar {
      background: transparent;
      width: 8px;
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 100px;
      background-color: #ccc;
      border: 0;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
}



`;
