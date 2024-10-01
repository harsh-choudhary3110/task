import { Box, Button, Dialog } from "@mui/material";

type confirmModalType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  onConfirm: () => void;
};

const ConfirmModal = ({ open, setOpen, text, onConfirm }: confirmModalType) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: "500px",
        },
      }}
    >
      <Box className="p-4">
        <h2 className="fs-5 mb-1">Please Confirm!</h2>
        <p className="mb-4">{text}</p>

        <div className="d-flex justify-content-end gap-3">
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" color="error" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </Box>
    </Dialog>
  );
};

export default ConfirmModal;
