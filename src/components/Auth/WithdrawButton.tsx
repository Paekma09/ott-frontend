import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import {deleteUserAsync} from "../../services/authService.ts";
import {Button} from "@mui/material";
import ConfirmDialog from "../Common/ConfirmDialog.tsx";

export default function WithdrawButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const onWithdraw = async () => {
        await dispatch<any>(deleteUserAsync());
        setOpen(false);
        navigate("/signup");
    };

    return (
        <>
            <Button color="error"
                    variant="outlined"
                    onClick={handleOpen}
                    sx={{ mt: 2 }}
            >회원탈퇴</Button>
            <ConfirmDialog
                open={open}
                title="회원탈퇴"
                description="정말로 회원탈퇴를 하시겠습니까? 이 작업은 되돌릴 수 없습니다."
                confirmText="탈퇴"
                cancelText="취소"
                onConfirm={onWithdraw}
                onCancel={handleClose}
            />
        </>
    );
}