export const get12HrTime = (
  time: Date,
  options: { showMinutes: boolean }
): string => {
  const hours = time.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  if (!options.showMinutes) {
    return `${hours % 12 || 12} ${ampm}`;
  } else {
    const minutes = time.getMinutes();
    return `${hours % 12 || 12}:${
      minutes < 10 ? '0' + minutes : minutes
    } ${ampm}`;
  }
};

export const getDayOfTheWeek = (time: Date): string => {
  const weekday = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  return weekday[time.getDay()];
};
