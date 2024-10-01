import { Box, Dialog } from "@mui/material";
import { TaskForm } from "../";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addMyTask, editMyTask } from "../../redux/slices/myTasksSlice";
import { taskType } from "../../types";

type AddEditTaskModalType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  variant: "Add" | "Edit";
  taskToEdit?: taskType;
};

const AddEditTaskModal = ({
  open,
  setOpen,
  variant,
  taskToEdit,
}: AddEditTaskModalType) => {
  const dispatch = useDispatch();

  const [taskValue, setTaskValue] = useState<string>("");
  const [taskError, setTaskError] = useState("");

  // set task value if variant is Edit
  useEffect(() => {
    if (!open) return;
    if (variant === "Edit") setTaskValue(taskToEdit?.text || "");
  }, [open]);

  const handleClose = () => {
    setOpen(false);
    setTaskValue("");
    setTaskError("");
  };

  const validateTask = () => {
    if (!taskValue) {
      setTaskError("Task is required");
      return false;
    } else if (taskValue.length < 3) {
      setTaskError("Task must be at least 3 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateTask()) return;

    if (variant === "Add") {
      dispatch(
        addMyTask({
          id: new Date().getTime(),
          text: taskValue,
          completed: false,
        })
      );

      handleClose();
      return;
    }

    if (!taskToEdit) return;
    dispatch(editMyTask({ ...taskToEdit, text: taskValue }));
    handleClose();
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
        <h2 className="fs-4 mb-4">{variant} Task</h2>

        <TaskForm
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          handleCancel={handleClose}
          handleSubmit={handleSubmit}
          error={taskError}
          variant={variant}
        />
      </Box>
    </Dialog>
  );
};

export default AddEditTaskModal;
