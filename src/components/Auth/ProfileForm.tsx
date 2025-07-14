import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../../store";
import React, {useEffect, useState} from "react";
import {updateProfileAsync} from "../../services/authService.ts";
import {Alert, Box, Button, TextField} from "@mui/material";

export default function ProfileForm() {
    const dispatch = useDispatch();
    const { user, error, isLoading } = useSelector((state: RootState) => state.auth);

    const [nickname, setNickname] = useState(user?.nickname || "");
    const [profileImageUrl, setProfileImageUrl] = useState(user?.profileImageUrl || "");
    const [success, setSuccess] = useState("");

    useEffect(() => {
        setNickname(user?.nickname || "");
        setProfileImageUrl(user?.profileImageUrl || "");
    }, [user]);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setSuccess("");
        if (!nickname.trim()) return;

        await dispatch<any>(updateProfileAsync({
            nickname,
            profileImageUrl: profileImageUrl ? profileImageUrl : undefined,
        }));
        if (!error) setSuccess("프로필이 수정되었습니다.");
    };

    return (
        <Box component="form"
             onSubmit={onSubmit}
             sx={{ mt: 2 }}
        >
            <TextField fullWidth
                       label="이메일"
                       name="email"
                       value={user?.email || ""}
                       slotProps={{
                            input: { readOnly: true }
                       }}
                       margin="normal"
            />
            <TextField fullWidth
                       label="닉네임"
                       name="nickname"
                       value={nickname}
                       onChange={e => setNickname(e.currentTarget.value)}
                       margin="normal"
                       required
            />
            <TextField fullWidth
                       label="프로필 이미지 URL"
                       name="profileImageUrl"
                       value={profileImageUrl}
                       onChange={e => setProfileImageUrl(e.currentTarget.value)}
                       margin="normal"
                       placeholder="https://..."
            />
            {error && <Alert severity="error">{ error }</Alert>}
            {success && <Alert severity="success">{ success }</Alert>}
            <Button type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ mt: 2 }}
                    disabled={isLoading}
            >
                { isLoading ? "수정 중..." : "프로필 수정" }
            </Button>
        </Box>
    );
}