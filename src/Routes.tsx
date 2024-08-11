import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Register } from "./components/Register/Register/Register";
import { Login } from "./components/Login/Login";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};
