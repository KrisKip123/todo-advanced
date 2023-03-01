import { useForm, SubmitHandler, Controller } from "react-hook-form";

import { Button, FormControl, TextField, Typography } from "@mui/material";

import styleScss from "./createToDo.module.scss";

import { useAppDispatch } from "../../../../../../store/index";
import { createToDo } from "../../../../../../store/slices/toDoSlice";

const { wrapper_form, wrapper_date } = styleScss;

interface IToDoData {
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
}

const getInitTime = (hours?: number): string => {
  const currentDate = new Date();
  const currentHours =
    typeof hours === "number"
      ? currentDate.getHours() + hours
      : currentDate.getHours();

  currentDate.setHours(currentHours, 0, 0, 0);
  return new Date(
    new Date(Number(currentDate)).toString().split("GMT")[0] + " UTC"
  )
    .toISOString()
    .split(".")[0];
};

export const CreateToDo = () => {
  const dispatch = useAppDispatch();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IToDoData>({
    defaultValues: {
      title: "",
      description: "",
      startDate: getInitTime(),
      endDate: getInitTime(2),
    },
  });

  const onSubmit: SubmitHandler<IToDoData> = (data) => {
    const { description, endDate, title, startDate } = data;

    dispatch(
      createToDo({
        title,
        endDate,
        startDate,
        description: description || null,
      })
    );
  };

  return (
    <FormControl
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      className={wrapper_form}
    >
      <Typography>CreateToDo</Typography>
      <Controller
        name="title"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <TextField
            fullWidth
            label="Task title*"
            variant="outlined"
            {...field}
            error={!!errors.title}
            sx={{}}
          />
        )}
      ></Controller>
      <TextField
        fullWidth
        placeholder="P.S."
        label="P.S."
        variant="outlined"
        {...register("description")}
      />
      <div className={wrapper_date}>
        <Controller
          name="startDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type="datetime-local"
              label="Start*"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              {...field}
              error={Boolean(errors.startDate)}
            />
          )}
        ></Controller>
        <Controller
          name="endDate"
          control={control}
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              type="datetime-local"
              label="End*"
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              {...field}
              error={Boolean(errors.endDate)}
            />
          )}
        ></Controller>
      </div>
      <Button variant="contained" type="submit">
        Add Task
      </Button>
    </FormControl>
  );
};
