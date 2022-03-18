import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";

export const ApplicationRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
    </Routes>
  );
};
