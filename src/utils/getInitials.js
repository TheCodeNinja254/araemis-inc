const getInitials = (sentense) => {
  const words = sentense.split(' ');
  return words[0][0] + words[1][0];
};

export default getInitials;
