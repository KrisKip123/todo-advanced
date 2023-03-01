import { LayoutCalendar } from "../../components";

import { DatePicker } from "./components/DatePicker/DatePicker";
import { ManagerToDo } from "./components/ManagerToDo/ManagerToDo";

export const CalendarPage = () => {
  return (
    <LayoutCalendar>
      <DatePicker />
      <ManagerToDo />
    </LayoutCalendar>
  );
};
