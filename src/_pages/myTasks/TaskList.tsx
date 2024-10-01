import { useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import { taskType } from "../../types";
import { useState } from "react";

const TaskList = () => {
  const tasks = useSelector((state: { myTasks: taskType[] }) => state.myTasks);

  const [checkedArray, setCheckedArray] = useState<number[]>([]);

  const handleCheckedChange = (checked: boolean, id: number) => {
    if (checked) {
      setCheckedArray((prev) => [...prev, id]);
    } else {
      setCheckedArray((prev) => prev.filter((item) => item !== id));
    }
  };

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          itemData={task}
          checkedArray={checkedArray}
          handleCheckedChange={handleCheckedChange}
        />
      ))}
    </ul>
  );
};

export default TaskList;
