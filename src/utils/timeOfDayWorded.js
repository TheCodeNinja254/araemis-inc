const timeOfDayWorded = () => {
  const now = new Date();
  const hour = now.getHours();
  let timeOfDay;

  if (hour >= 5 && hour < 12) {
    timeOfDay = 'morning';
  } else if (hour >= 12 && hour < 18) {
    timeOfDay = 'afternoon';
  } else {
    timeOfDay = 'evening';
  }

  return timeOfDay;
};

export default timeOfDayWorded;
