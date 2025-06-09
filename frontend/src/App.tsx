import { Routes, Route } from "react-router-dom";
import Home from "./pages/ResultPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ResultPage from "./pages/ResultPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/result" element={<ResultPage />} />
    </Routes>
  );
}