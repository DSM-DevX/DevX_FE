import { BrowserRouter, Route, Routes } from "react-router-dom";
import DevelopmentStartPage from "./pages/DevelopmentStartPage";
import MemoStartPage from "./pages/MemoStartPage";
import MainPage from "./pages/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route
          path="/DevelopmentStartPage"
          element={<DevelopmentStartPage />}
        />
        <Route path="/MemoStartPage" element={<MemoStartPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
