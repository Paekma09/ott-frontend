import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {useEffect} from "react";
import {fetchMyProfileAsync} from "../services/authService.ts";
import {Avatar, Box, CircularProgress, Typography} from "@mui/material";
import ProfileForm from "../components/Auth/ProfileForm.tsx";
import ChangePasswordForm from "../components/Auth/ChangePasswordForm.tsx";
import WithdrawButton from "../components/Auth/WithdrawButton.tsx";

export default function ProfilePage() {
    const dispatch = useDispatch();
    const { user, isLoading } = useSelector((state: RootState) => state.auth);

    useEffect(() => {
        dispatch<any>(fetchMyProfileAsync());
    }, [dispatch]);

    if (isLoading && !user) return <CircularProgress />;
    if (!user) return <Typography>유저 정보를 불러올 수 없습니다.</Typography>;

    return (
        <Box sx={{ maxWidth: 480, mx: "auto", mt: 8 }}>
            <Typography variant="h5" mb={3}>내 프로필</Typography>
            <Box sx={{ display: "flex", alignItems: "center", mb: 3 }}>
                <Avatar
                    src={user.profileImageUrl || undefined}
                    sx={{ width: 64, height: 64, mr: 2 }}
                />
                <Typography variant="h6">{user.nickname}</Typography>
            </Box>
            <ProfileForm />
            <ChangePasswordForm />
            <WithdrawButton />
        </Box>
    );
}