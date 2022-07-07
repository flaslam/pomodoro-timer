export const addLeadingZeros = (
  number: number,
  totalLength: number
): string => {
  return String(number).padStart(totalLength, "0");
};

export const formatSecondsToMinutes = (currentTime: number): string => {
  const minutes = addLeadingZeros(Math.floor(currentTime / 60), 2);
  const seconds = addLeadingZeros(Math.floor(currentTime % 60), 2);
  return `${minutes}:${seconds}`;
};
