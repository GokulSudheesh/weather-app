export const get12HrTime = (time: Date): string => {
  const hours = time.getHours();
  return `${hours % 12 || 12} ${hours >= 12 ? 'PM' : 'AM'}`;
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
