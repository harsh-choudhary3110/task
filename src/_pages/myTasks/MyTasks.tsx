import { Container } from "@mui/material";
import TaskList from "./TaskList";

const MyTasks = () => {
  return (
    <Container sx={{ py: 4 }}>
      <h1 className="fs-2 mb-4">My Tasks</h1>

      <TaskList />
    </Container>
  );
};

export default MyTasks;
