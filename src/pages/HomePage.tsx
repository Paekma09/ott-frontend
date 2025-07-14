import {Box, Button, Typography} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import type {RootState} from "../store";
import {logoutAsync} from "../services/authService.ts";

export default function HomePage() {
    const dispatch = useDispatch();
    const user = useSelector((state: RootState) => state.auth.user);

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4">
                환영합니다, { user?.nickname ?? user?.email } 님.
            </Typography>
            <Button onClick={() => dispatch<any>(logoutAsync())}
                    variant="outlined"
                    sx={{ mt: 2 }}
            >
                로그아웃
            </Button>
        </Box>
    );
}