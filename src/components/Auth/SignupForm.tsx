import React, {useState} from "react";
import type {UserSignupRequest} from "../../api";
import {useNavigate} from "react-router-dom";
import {Alert, Box, Button, CircularProgress, TextField} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import {signupAsync} from "../../services/authService.ts";

export default function SignupForm() {
    const [form, setForm] = useState<UserSignupRequest>({ email: "", password: "", nickname: ""  });
    const [success, setSuccess] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isLoading, error } = useSelector((state: RootState) => state.auth);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess("");
        await dispatch<any>(signupAsync(form));
        if (!error) {
            setSuccess("회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.");
            setTimeout(() => {
                navigate("/login");
            }, 1000); // 1초 후에 로그인 페이지로 이동
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