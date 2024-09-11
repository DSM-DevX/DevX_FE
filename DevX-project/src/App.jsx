import React from "react";

import { Router } from "./Router";
import { GlobalStyles } from "./GlobalStyles";

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Router />
    </>
  );
};
