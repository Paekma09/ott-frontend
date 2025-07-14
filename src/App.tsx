import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import ProtectedRoute from "./components/Common/ProtectedRoute.tsx";
import HomePage from "./pages/HomePage.tsx";

export default function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/" element={
                  <ProtectedRoute>
                      <HomePage />
                  </ProtectedRoute>
              } />
              <Route path="*" element={<Navigate to="/" />} />
          </Routes>
      </BrowserRouter>
    );
}