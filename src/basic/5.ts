enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const isWeekend = (day: DayOfWeek): boolean => {
  if (DayOfWeek.Monday === day) {
    return false;
  } else if (DayOfWeek.Tuesday === day) {
    return false;
  } else if (DayOfWeek.Wednesday === day) {
    return false;
  } else if (DayOfWeek.Thursday === day) {
    return false;
  } else if (DayOfWeek.Friday === day) {
    return false;
  } else if (DayOfWeek.Saturday === day) {
    return true;
  } else if (DayOfWeek.Sunday === day) {
    return true;
  }
};
