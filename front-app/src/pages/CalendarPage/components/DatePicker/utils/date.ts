interface ICalendar {
  year: number;
  mouth: number;
}

const DayOfWeek: { [key: string]: number } = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
};

const getFullDaysInMonth = (year: number, month: number): number => {
  return new Date(year, month + 1, 0).getDate();
};

const getNextMonthDays = (year: number, month: number) => {
  const currentDateLastDay = new Date(year, month + 1, 0);
  const end = 7 - 1 - DayOfWeek[`${currentDateLastDay.getDay()}`];

  return getArrayDate(end, "next", currentDateLastDay);
};

const getPreviousMonthDays = (year: number, month: number) => {
  const currentDateStartDay = new Date(year, month, 1);
  const start = DayOfWeek[`${currentDateStartDay.getDay()}`];

  return getArrayDate(start, "previous", currentDateStartDay);
};

const getArrayDate = (
  allDays: number,
  type: "next" | "current" | "previous",
  currentDate: Date
) => {
  const cellsDate = [];

  for (let i = 1; i <= allDays; i++) {
    const date =
      type === "next"
        ? new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0)
        : type === "previous"
        ? new Date(currentDate.getFullYear(), currentDate.getMonth(), -allDays)
        : new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);

    date.setDate(date.getDate() + i);
    cellsDate.push({
      year: date.getFullYear(),
      month: date.getMonth(),
      day: date.getDate(),
    });
  }
  return cellsDate;
};

const getDaysCalendar = ({ year, mouth }: ICalendar) => {
  const getFullWeeks = (dateInput: Date) => {
    const yearCurrent = dateInput.getFullYear();
    const monthCurrent = dateInput.getMonth();
    const allDaysCurrentMouth = getFullDaysInMonth(yearCurrent, monthCurrent);

    const allWeeks = [
      ...getPreviousMonthDays(yearCurrent, monthCurrent),
      ...getArrayDate(allDaysCurrentMouth, "current", dateInput),
      ...getNextMonthDays(yearCurrent, monthCurrent),
    ];

    const result = [];
    for (let i = 0; i < allWeeks.length / 7; i++) {
      result.push(allWeeks.slice(i * 7, 7 * (i + 1)));
    }

    return result;
  };

  const date = new Date(year, mouth, 1);

  return getFullWeeks(date);
};

export {
  getFullDaysInMonth,
  getNextMonthDays,
  getPreviousMonthDays,
  getArrayDate,
  getDaysCalendar,
};
