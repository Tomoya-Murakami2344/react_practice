import { Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { Register } from "./components/Register/Register/Register";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
  );
};
