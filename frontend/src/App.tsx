import { Routes, Route } from "react-router-dom";
import Home from "./pages/ResultPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResultPage from "./pages/ResultPage";
import Valuation from "./pages/ValuationPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/valuation" element={<Valuation />} />
    </Routes>
  );
}