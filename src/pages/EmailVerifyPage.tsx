import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useSearchParams} from "react-router-dom";
import type {RootState} from "../store";
import {useEffect} from "react";
import {verifyEmailAsync} from "../services/authService.ts";
import {Alert, Box, CircularProgress} from "@mui/material";

export default function EmailVerifyPage() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [params] = useSearchParams();
    const token = params.get("token") || "";
    const { isLoading, error, emailVerified } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        if (token) dispatch<any>(verifyEmailAsync(token));
    }, [dispatch, token]);

    // 인증 성공시 login 으로 1초 후 이동
    useEffect(() => {
        if (emailVerified) {
            setTimeout(() => navigate("/login"), 1000);
        }
    }, [emailVerified, navigate]);

    // 인증 실패시 signup 으로 2초 후 이동
    useEffect(() => {
        if (error) {
            setTimeout(() => navigate("/signup"), 2000);
        }
    }, [error, navigate]);

    if (isLoading) return <CircularProgress />;
    if (emailVerified) return <Alert severity="success">이메일 인증이 완료되었습니다. 로그인 화면으로 이동합니다…</Alert>
    if (error) return <Alert severity="error">{error} <br />잠시 후 회원가입 화면으로 이동합니다…</Alert>;

    return <Box>이메일 인증 중...</Box>;
}