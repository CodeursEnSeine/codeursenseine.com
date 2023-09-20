export const formatHour = (hour: string | undefined) => {
  if (!hour) {
    return;
  }

  return new Intl.DateTimeFormat('fr-FR', {
    hour: 'numeric',
    minute: 'numeric',
    timeZone: 'GMT',
  }).format(Date.parse(hour));
};

/**
 * Takes two dates and return a string of the duration in hour and minutes.
 * This has been develop thinking about little differences, like hours, not days
 * @param date1
 * @param date2
 * @returns
 */
export const getDiff = (
  date1: string | undefined,
  date2: string | undefined
) => {
  if (!date1 || !date2) {
    return;
  }

  const diff = new Date(date1).getTime() - new Date(date2).getTime();

  const hours = Math.floor(diff / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  return `${hours < 10 ? '0' : ''}${hours}:${
    minutes < 10 ? '0' : ''
  }${minutes}`;
};
