import {Box, Button, Typography} from "@mui/material";
import {useAuth} from "../hooks/useAuth.ts";

export default function HomePage() {
    const { user, logout } = useAuth();

    return (
        <Box sx={{ p: 4 }}>
            <Typography variant="h4">
                환영합니다, { user?.nickname ?? user?.email } 님.
            </Typography>
            <Button onClick={logout}
                    variant="outlined"
                    sx={{ mt: 2 }}
            >
                로그아웃
            </Button>
        </Box>
    );
}