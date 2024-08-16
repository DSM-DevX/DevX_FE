import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DevelopmentStartPage } from "./pages/DevelopmentStartPage";
import { MemoStartPage } from "./pages/MemoStartPage";
import { MainPage } from "./pages/MainPage";
import { MemoWritePage } from "./pages/MemoWritePage";
import { AnimatePresence } from "framer-motion";
import { DevelopmentWritePage } from "./pages/DevelopmentWritePage";
import { WhatIsDevXPage } from "./pages/WhatIsDevXPage";
import { GuideDevXPage } from "./pages/GuideDevXPage";
import React from 'react';


export const Router = () => {
  return (
    <AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/DevelopmentStartPage"
            element={<DevelopmentStartPage />}
          />
          <Route path="/MemoStartPage" element={<MemoStartPage />} />
          <Route path="/MemoWritePage" element={<MemoWritePage />} />
          <Route
            path="/DevelopmentWritePage"
            element={<DevelopmentWritePage />}
          />
          <Route path="/WhatIsDevXPage" element={<WhatIsDevXPage />} />
          <Route path="/GuideDevXPage" element={<GuideDevXPage />} />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
};
