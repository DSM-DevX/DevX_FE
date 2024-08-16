<<<<<<< Updated upstream
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevelopmentStartPage from "./pages/DevelopmentStartPage";
import MemoStartPage from "./pages/MemoStartPage";
import MainPage from "./pages/MainPage";
import MemoWritePage from "./pages/MemoWritePage";
import { AnimatePresence } from "framer-motion";
import { DevelopmentWritePage } from "./pages/DevelopmentWritePage";

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
          <Route
            path="/DevelopmentWritePage"
            element={<DevelopmentWritePage />}
          />
        </Routes>
      </BrowserRouter>
    </AnimatePresence>
  );
}

export default Router;
=======
import MemoStartPage from "./pages/MemoStartPage";
import DevelopmentStartPage from "./pages/DevelopmentStartPage";
import MainPage from "./pages/MainPage";

export const Router = () => {
  return (
  <Router>
    <Route
  </Router>
  );
};
>>>>>>> Stashed changes
