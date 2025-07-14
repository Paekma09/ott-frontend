import { Navigate } from "react-router-dom";
import {type ReactNode, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import {Box, CircularProgress} from "@mui/material";
import {resetAuth} from "../../store/authSlice.ts";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const dispatch = useDispatch();
    const { user, token, isLoading } = useSelector((state: RootState) => state.auth);

    // 토큰 O, user 정보 X ⇒ 강제 로그아웃
    useEffect(() => {
        if (token && !user && !isLoading) {
            dispatch(resetAuth());
        }
    }, [token, user, isLoading]);

    if (!token) return <Navigate to="/login" replace />;
    if (isLoading) return <Box sx={{ py: 6, textAlign: "center" }}><CircularProgress /></Box>
    if (token && !user && !isLoading) return <Navigate to="/login" replace />;

    return children;
}