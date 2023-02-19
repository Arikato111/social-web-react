import { FC } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import NotFoundPage from "./pages/NotFound";
import Navbar from "./components/Navbar";
import IndexPage from "./pages";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

const Routing: FC = () => {
  return <Router>
    <Navbar />
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/" element={<IndexPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </Router>
}

export default Routing;