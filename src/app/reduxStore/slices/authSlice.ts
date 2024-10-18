
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  user: {
    id: number;
    role: string;
  } ;
  token: string | null;
}

export const initialState: AuthState = {
  user: {id: 0, role: ''},
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<{ id: number; role: string }>) {
      state.user = {
        id: action.payload.id,
        role: action.payload.role,
      };
    },
    logout(state) {
      state.user = {id: 0, role: ''};
      state.token = null;
    },
    ///testeo registro
    registerUser(state, action: PayloadAction<{ id: number; email: string; role: string; token: string }>) {
      state.user = {
        id: action.payload.id,
        // email: action.payload.email,
        role: action.payload.role,
      };
      state.token = action.payload.token;
    },
  },
});

export const { setToken, setUser, logout ,registerUser } = authSlice.actions;
export default authSlice.reducer;
