import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import React, {useState} from "react";
import {changePasswordAsync} from "../../services/authService.ts";
import {Alert, Box, Button, CircularProgress, TextField} from "@mui/material";

export default function ChangePasswordForm() {
    const dispatch = useDispatch();
    const { isLoading, error } = useSelector((state: RootState) => state.auth);
    const [form, setForm] = useState({ currentPassword: "", newPassword: "" });
    const [success, setSuccess] = useState("");

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess("");
        await dispatch<any>(changePasswordAsync(form));
        if (!error) setSuccess("비밀번호가 변경되었습니다.");
    };

    return (
        <Box component="form"
             onSubmit={onSubmit}
             sx={{ maxWidth: 320, mx: "auto", mt: 8 }}
        >
            <TextField fullWidth
                       label="현재 비밀번호"
                       name="currentPassword"
                       type="password"
                       value={form.currentPassword}
                       onChange={onChange}
                       margin="normal"
                       required
            />
            <TextField fullWidth
                       label="새 비밀번호"
                       name="newPassword"
                       type="password"
                       value={form.newPassword}
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
                { isLoading ? <CircularProgress size={24} /> : "비밀번호 변경" }
            </Button>
        </Box>
    );
}