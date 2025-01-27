import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
  } | null;
  isAuthenticated: boolean;
}

// Get initial state from localStorage if available
const getInitialState = (): AuthState => {
  const savedState = localStorage.getItem('authState');
  if (savedState) {
    return JSON.parse(savedState);
  }
  return {
    user: null,
    isAuthenticated: false,
  };
};

const initialState: AuthState = getInitialState();

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<AuthState['user']>) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      // Save to localStorage whenever state changes
      localStorage.setItem('authState', JSON.stringify(state));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      // Clear localStorage on logout
      localStorage.removeItem('authState');
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;