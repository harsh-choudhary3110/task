import { Button, Checkbox, Tooltip } from "@mui/material";
import { taskType } from "../../types";
import { useMemo, useState } from "react";
import { AddEditTaskModal, ConfirmModal } from "../../components";
import { useDispatch, useSelector } from "react-redux";
import { deleteMyTask, editMyTask } from "../../redux/slices/myTasksSlice";

type TaskItemPropsTypes = {
  itemData: taskType;
};

const TaskItem = ({ itemData }: TaskItemPropsTypes) => {
  const dispatch = useDispatch();

  const [openEditTaskModal, setOpenEditTaskModal] = useState(false);
  const [openConfirmDeleteModal, setOpenConfirmDeleteModal] = useState(false);

  const tasks = useSelector((state: { myTasks: taskType[] }) => state.myTasks);

  const checkedArray = useMemo(() => {
    const compeletedTask = tasks.filter((item) => item.completed);
    const compeletedTaskId = compeletedTask.map((item) => item.id);
    return compeletedTaskId;
  }, [itemData]);

  const handleCheckedChange = (checked: boolean) => {
    dispatch(editMyTask({ ...itemData, completed: checked }));
  };

  const handleDeleteTask = () => {
    dispatch(deleteMyTask(itemData));
  };

  return (
    <li className="list-group-item p-3">
      <div className="d-flex justify-content-between align-items-center gap-4">
        <div className="d-flex align-items-md-center gap-2">
          <Tooltip title="Mark as completed" placement="top">
            <Checkbox
              checked={checkedArray.includes(itemData.id)}
              onChange={(event) => handleCheckedChange(event.target.checked)}
              sx={{
                ml: {
                  xs: "-12px",
                  md: "-9px",
                },
              }}
            />
          </Tooltip>
          <p className="d-none d-xl-block m-0 first-letter-uppercase">
            {itemData.text}
          </p>
        </div>

        <div className="d-flex gap-2">
          <Button variant="outlined" onClick={() => setOpenEditTaskModal(true)}>
            Edit
          </Button>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpenConfirmDeleteModal(true)}
          >
            Delete
          </Button>
        </div>
      </div>

      <p className="d-xl-none mb-0 mt-3">{itemData.text}</p>

      <AddEditTaskModal
        open={openEditTaskModal}
        setOpen={setOpenEditTaskModal}
        variant="Edit"
        taskToEdit={itemData}
      />
      <ConfirmModal
        open={openConfirmDeleteModal}
        setOpen={setOpenConfirmDeleteModal}
        text={`Are you sure, want to delete this task?`}
        onConfirm={handleDeleteTask}
      />
    </li>
  );
};

export default TaskItem;
