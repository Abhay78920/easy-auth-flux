import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const queryClient = new QueryClient();

// Check if we're on the correct domain
const isCorrectDomain = window.location.hostname === 'accounts.praanm.com';

const AppRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

  useEffect(() => {
    // Log domain-related information for debugging
    console.log('Current hostname:', window.location.hostname);
    console.log('Is correct domain:', isCorrectDomain);
    console.log('Is authenticated:', isAuthenticated);
  }, [isAuthenticated]);

  if (!isCorrectDomain) {
    return <div>Access this application at accounts.praanm.com</div>;
  }

  return (
    <Routes>
      <Route
        path="/"
        element={
          isAuthenticated ? (
            <Navigate to="/dashboard" replace />
          ) : (
            <Navigate to="/signin" replace />
          )
        }
      />
      <Route path="/signin" element={
        isAuthenticated ? <Navigate to="/dashboard" replace /> : <SignIn />
      } />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/register" element={<Index />} />
    </Routes>
  );
};

const App = () => (
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);

export default App;