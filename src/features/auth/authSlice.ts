import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  isLoggedIn: boolean;
  username: string | null;
}

const initialState: AuthState = {
  isLoggedIn: false,
  username: null,
};

const STATIC_CREDENTIALS = {
  username: 'admin',
  password: '123456',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ username: string; password: string }>) {
      const { username, password } = action.payload;
      if (
        username === STATIC_CREDENTIALS.username &&
        password === STATIC_CREDENTIALS.password
      ) {
        state.isLoggedIn = true;
        state.username = username;
      } else {
        state.isLoggedIn = false;
        state.username = null;
      }
    },
    logout(state) {
      state.isLoggedIn = false;
      state.username = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;