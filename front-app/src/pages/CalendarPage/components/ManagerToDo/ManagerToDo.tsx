import styleScss from "./managerToDo.module.scss";

import { AddToDo } from "./components";

const { wrapper } = styleScss;

export const ManagerToDo = () => {
  return (
    <div className={wrapper}>
      <AddToDo>Add ToDo</AddToDo>
    </div>
  );
};
