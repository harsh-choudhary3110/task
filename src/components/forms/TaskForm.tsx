import { Button, TextField } from "@mui/material";

type taskFormType = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleCancel: () => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  error: string;
  variant: "Add" | "Edit";
};

const TaskForm = ({
  value,
  onChange,
  handleCancel,
  handleSubmit,
  error,
  variant,
}: taskFormType) => {
  return (
    <form className="d-flex flex-column gap-4" onSubmit={handleSubmit}>
      <TextField
        type={"text"}
        name={"task"}
        label={"Task"}
        value={value}
        onChange={onChange}
        error={!!error}
        helperText={error}
        autoComplete="off"
        rows={4}
        multiline
      />

      <div className="d-flex justify-content-end gap-3">
        <Button variant="outlined" onClick={handleCancel}>
          Cancel
        </Button>
        <Button variant="contained" type="submit">
          {variant}
        </Button>
      </div>
    </form>
  );
};

export default TaskForm;
