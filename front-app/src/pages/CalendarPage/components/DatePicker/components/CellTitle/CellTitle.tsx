import { WEEKDAYS } from "../../constants";

import styleScss from "./cellTitle.module.scss";

const { wrapper_titles, container_cell } = styleScss;

export const CellTitle = () => {
  return (
    <div className={wrapper_titles}>
      {WEEKDAYS.map((weekDay) => {
        return (
          <div key={weekDay} className={container_cell}>
            {weekDay}
          </div>
        );
      })}
    </div>
  );
};
