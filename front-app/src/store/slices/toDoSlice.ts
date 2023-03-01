import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";
import { nanoid } from "nanoid";

interface IToDO {
  id: string;
  title: string;
  description: string | null;
  startDate: string;
  endDate: string;
}

type ToDoType = Omit<IToDO, "id">;

const init: IToDO[] = [
  {
    id: nanoid(),
    title: "Go to the Work",
    description: null,
    startDate: "2023-03-01T07:00:00",
    endDate: "2023-03-01T08:00:00",
  },
  {
    id: nanoid(),
    title: "Go to the Work",
    description: null,
    startDate: "2023-03-01T12:00:00",
    endDate: "2023-03-01T14:00:00",
  },
  {
    id: nanoid(),
    title: "Lunchtime",
    description: null,
    startDate: "2023-03-01T17:00:00",
    endDate: "2023-03-01T18:00:00",
  },
];

const toDoSlice = createSlice({
  name: "ToDo",
  initialState: () => init,
  reducers: {
    createToDo: (state, action: PayloadAction<ToDoType>) => {
      console.log(action);
    },
  },
});

export const { createToDo } = toDoSlice.actions;

export default toDoSlice.reducer;
