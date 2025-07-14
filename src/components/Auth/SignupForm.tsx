import React, {useState} from "react";
import type {UserSignupRequest} from "../../api";
import {useAuth} from "../../hooks/useAuth.ts";
import {useNavigate} from "react-router-dom";
import {Alert, Box, Button, CircularProgress, TextField} from "@mui/material";

export default function SignupForm() {
    const [form, setForm] = useState<UserSignupRequest>({ email: "", password: "", nickname: ""  });
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const { signup, isLoading } = useAuth();
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setSuccess("");
        try {
            await signup(form);
            setSuccess("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
            setTimeout(() => navigate("/login"), 1000); // 1초 후 로그인 페이지로 이동
        } catch (err) {
            setError("회원가입 실패. 이메일 또는 비밀번호를 확인하세요.");
        }
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
            <TextField fullWidth
                       label="닉네임"
                       name="nickname"
                       value={form.nickname}
                       onChange={onChange}
                       margin="normal"
                       required
            />
            { error && <Alert severity="error">{ error }</Alert> }
            { success && <Alert severity="success">{ success }</Alert> }
            <Button fullWidth
                    type="submit"
                    variant="contained"
                    disabled={isLoading}
                    sx={{ mt: 2 }}
            >
                { isLoading ? <CircularProgress size={24} /> : "회원가입" }
            </Button>
        </Box>
    );
}