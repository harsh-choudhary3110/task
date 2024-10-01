import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { taskType } from "../../types";

const TaskList = () => {
  const tasks = useSelector((state: { myTasks: taskType[] }) => state.myTasks);

  return (
    <ul className="list-group">
      {tasks.length === 0 && <p className="text-center m-0">No tasks</p>}
      {tasks.map((task) => (
        <TaskItem key={task.id} itemData={task} />
      ))}
    </ul>
  );
};

export default TaskList;
