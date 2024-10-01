import { Button, Container } from "@mui/material";
import TaskList from "./TaskList";
import { useState } from "react";
import { AddEditTaskModal } from "../../components";

const MyTasks = () => {
  const [openAddTaskModal, setOpenAddTaskModal] = useState(false);

  return (
    <Container sx={{ py: 4 }}>
      <div className="d-flex flex-wrap justify-content-between align-items-center gap-3 mb-4">
        <h1 className="fs-2 m-0">My Tasks</h1>
        <Button variant="contained" onClick={() => setOpenAddTaskModal(true)}>
          Add Task
        </Button>
      </div>

      <TaskList />

      <AddEditTaskModal
        open={openAddTaskModal}
        setOpen={setOpenAddTaskModal}
        variant="Add"
      />
    </Container>
  );
};

export default MyTasks;
