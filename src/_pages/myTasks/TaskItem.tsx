import { Button, Checkbox, Tooltip } from "@mui/material";
import { taskType } from "../../types";

type TaskItemProps = {
  itemData: taskType;
  checkedArray: number[];
  handleCheckedChange: (checked: boolean, id: number) => void;
};

const TaskItem = ({
  itemData,
  checkedArray,
  handleCheckedChange,
}: TaskItemProps) => {
  return (
    <li className="list-group-item p-3">
      <div className="d-flex justify-content-between align-items-center gap-4">
        <div className="d-flex align-items-md-center gap-2">
          <Tooltip title="Mark as completed" placement="top">
            <Checkbox
              checked={checkedArray.includes(itemData.id)}
              onChange={(event) =>
                handleCheckedChange(event.target.checked, itemData.id)
              }
              sx={{
                ml: {
                  xs: "-12px",
                  md: "-9px",
                },
              }}
            />
          </Tooltip>
          <p className="d-none d-xl-block m-0">{itemData.text}</p>
        </div>

        <div className="d-flex gap-2">
          <Button variant="contained">Edit</Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </div>
      </div>

      <p className="d-xl-none mb-0 mt-3">{itemData.text}</p>
    </li>
  );
};

export default TaskItem;
