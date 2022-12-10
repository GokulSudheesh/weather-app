export const get12HrTime = (time: Date): string => {
  const hours = time.getHours();
  return `${hours % 12 || 12} ${hours >= 12 ? 'PM' : 'AM'}`;
};
