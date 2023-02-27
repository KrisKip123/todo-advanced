const timeToDay = (
  hour: number
): "Night" | "Morning" | "Afternoon" | "Evening" | null => {
  if (hour < 6 && hour > 0) return "Night";
  if (hour > 6 && hour < 12) return "Morning";
  if (hour > 12 && hour < 18) return "Afternoon";
  if (hour > 18 && hour < 24) return "Evening";
  return null;
};

export { timeToDay };
