import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from './store/store';
import Index from "./pages/Index";
import SignIn from "./pages/SignIn";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { useSelector } from "react-redux";
import { RootState } from "./store/store";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);
  console.log(isAuthenticated);
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
