import propTypes from "prop-types";
import css from "./Feedback.module.css";

const Feedback = ({ good, neutral, bad, total, positive }) => {
  return (
    <ul className={css.list}>
      <li className={css.listItem}>Good: {good}</li>
      <li className={css.listItem}>Neutral: {neutral}</li>
      <li className={css.listItem}>Bad: {bad}</li>
      <li className={css.listItem}>Total: {total}</li>
      <li className={css.listItem}>Positive: {positive}%</li>
    </ul>
  );
};
Feedback.propTypes = {
  good: propTypes.number,
  neutral: propTypes.number,
  bad: propTypes.number,
  total: propTypes.number,
  positive: propTypes.number,
};

export default Feedback;
