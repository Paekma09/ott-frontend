import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from "@mui/material";

export interface ConfirmDialogProps {
    open: boolean;
    title?: string;
    description?: string;
    confirmText?: string;
    cancelText?: string;
    onConfirm: () => void;
    onCancel: () => void;
}

export default function ConfirmDialog({
    open,
    title = "확인",
    description = "",
    confirmText = "확인",
    cancelText = "취소",
    onConfirm,
    onCancel
}: ConfirmDialogProps) {
    return (
        <Dialog open={open} onClose={onCancel}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {description && <DialogContentText>{description}</DialogContentText>}
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel}>{cancelText}</Button>
                <Button onClick={onConfirm}
                        color="error"
                        variant="contained"
                >{confirmText}</Button>
            </DialogActions>
        </Dialog>
    );
}