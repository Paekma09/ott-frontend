import {type UserDto} from "../api";
import {createSlice, type PayloadAction} from "@reduxjs/toolkit";

/* 인증 전역 상태 타입 */
interface AuthState{
    user: UserDto | null;
    token: string | null;
    isLoading: boolean;
    error: string | null;
    emailVerified: boolean;
}

/* 초기값 (토큰은 localStorage 에서 불러옴) */
const initialState: AuthState = {
    user: null,
    token: localStorage.getItem("accessToken"),
    isLoading: false,
    error: null,
    emailVerified: false,
};

/* 인증 상태 slice (동기 reducer만) */
const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<UserDto | null>) => {
            state.user = action.payload;
        },
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string | null>) => {
            state.error = action.payload;
        },
        setEmailVerified: (state, action: PayloadAction<boolean>) => {
            state.emailVerified = action.payload;
        },
        resetAuth: (state) => {
            state.user = null;
            state.token = null;
            state.isLoading = false;
            state.error = null;
            state.emailVerified = false;
        }
    },
});

export const { setUser, setToken, setLoading, setError, setEmailVerified, resetAuth } = authSlice.actions;
export default authSlice.reducer;