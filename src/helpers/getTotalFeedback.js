export const getTotalFeedback = (feedback) => {
  return Object.values(feedback).reduce((acc, i) => acc + i, 0);
};
