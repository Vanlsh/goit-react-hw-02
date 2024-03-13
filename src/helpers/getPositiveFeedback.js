export const getPositiveFeedback = ({ good, neutral }, totalFeedback) => {
  return good + neutral && Math.round(((good + neutral) / totalFeedback) * 100);
};
