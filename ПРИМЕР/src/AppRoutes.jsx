import { Route, Routes } from "react-router-dom";
import TodosPage from "./pages/TodosPage";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TodosPage></TodosPage>}></Route>
    </Routes>
  );
}

export default AppRoutes;
