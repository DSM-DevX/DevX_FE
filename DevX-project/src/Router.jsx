import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevelopmentStartPage from "./pages/DevelopmentStartPage";
import MemoStartPage from "./pages/MemoStartPage";
import MainPage from "./pages/MainPage";
import MemoWritePage from "./pages/MemoWritePage";
import { AnimatePresence } from "framer-motion";

function Router() {
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
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default Router;
