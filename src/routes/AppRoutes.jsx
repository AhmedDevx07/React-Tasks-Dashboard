import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "../layout/DashboardLayout";
import TaskPage from "../pages/TaskPage";
import NotFound from "../pages/NotFound";
import Auth from "../pages/Auth";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = () => {
  return (
    <Routes>
    
      <Route path="/auth" element={<Auth />} />

       
      <Route
        path="/"
        element={
          <PrivateRoute>
            <DashboardLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="/task/1" replace />} />
        <Route path="task/:id" element={<TaskPage />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;