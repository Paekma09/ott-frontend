import {Routes, Route, BrowserRouter, Navigate} from 'react-router-dom';
import LoginPage from "./pages/LoginPage.tsx";
import SignupPage from "./pages/SignupPage.tsx";
import ProtectedRoute from "./components/Common/ProtectedRoute.tsx";
import HomePage from "./pages/HomePage.tsx";
import ProfilePage from "./pages/ProfilePage.tsx";
import EmailVerifyPage from "./pages/EmailVerifyPage.tsx";

export default function App() {
    return (
      <BrowserRouter>
          <Routes>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/verify" element={<EmailVerifyPage />} />
              <Route path="/" element={
                  <ProtectedRoute>
                      <HomePage />
                  </ProtectedRoute>
              } />
              <Route path="*" element={<Navigate to="/profile" />} />
          </Routes>
      </BrowserRouter>
    );
}