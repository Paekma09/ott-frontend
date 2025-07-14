import React, {useState} from "react";
import {Alert, Box, Button, CircularProgress, TextField} from "@mui/material";
import type {UserLoginRequest} from "../../api";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import {loginAsync} from "../../services/authService.ts";

export default function LoginForm() {
    const [form, setForm] = useState<UserLoginRequest>({ email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await dispatch<any>(loginAsync(form));
        // 로그인 성공시 user가 세팅됨 → 필요시 홈으로 이동
        if (!error) navigate("/");
    };

    return (
        <Box component="form"
             onSubmit={onSubmit}
             sx={{ maxWidth: 320, mx: "auto", mt: 8 }}
        >
            <TextField fullWidth
                       label="이메일"
                       name="email"
                       value={form.email}
                       onChange={onChange}
                       margin="normal"
                       required
            />
            <TextField fullWidth
                       label="비밀번호"
                       name="password"
                       type="password"
                       value={form.password}
                       onChange={onChange}
                       margin="normal"
                       required
            />
            { error && <Alert severity="error">{ error }</Alert> }
            <Button fullWidth
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    sx={{ mt: 2 }}
            >
                { isLoading ? <CircularProgress size={24} /> : "로그인" }
            </Button>
        </Box>
    );
}