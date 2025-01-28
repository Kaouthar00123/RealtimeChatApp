import { BrowserRouter as Router, Routes, Route } from "react-router";
import FirstPagesLayout from "./components/layout/FirstPagesLayout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Test from "./pages/Test";
import CalendarPage from "./pages/CalendarPage";
import TasksPage from "./pages/TasksPage";
import ChatPage from "./pages/ChatPage";

export default function App() {
  return (
    // Routes
    <Router>
      <Routes>
        {/* //Principale pages */}
        <Route path="test" element={<Test />} />
        <Route path="" element={<FirstPagesLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="tasks" element={<TasksPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="purchases" />
          <Route path="sales" />
          <Route path="reviewers" />
          <Route path="payment" />
        </Route>
        {/* Others */}
        {/* <Route path="sign" element={<SignLayout />}>
          <Route path="in" element={<SignInLayout />}>
            <Route path="enter" element={<SignIn />} />
            <Route path="pwd-recovery" element={<ForgetPassword />} />
          </Route>
          <Route path="up" element={<SignUp />} />
          <Route path="*" element={<NoPage />} />
        </Route> */}
        <Route path="*" />
      </Routes>
    </Router>
  );
}
