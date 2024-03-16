import propTypes from "prop-types";
import css from "./Options.module.css";
import clsx from "clsx";
import { GOOD, NEUTRAL, BAD, RESET } from "../../consts.js";

const buttonTypes = [GOOD, NEUTRAL, BAD];

const Options = ({ updateFeedback, total }) => {
  return (
    <ul className={css.list}>
      {buttonTypes.map((item) => (
        <li key={item} className={css.listItem}>
          <button onClick={() => updateFeedback(item)}>{item}</button>
        </li>
      ))}
      {!!total && (
        <li className={clsx(css.listItem, css.resetButton)}>
          <button onClick={() => updateFeedback(RESET)}>{RESET}</button>
        </li>
      )}
    </ul>
  );
};

Options.propTypes = {
  handleFeedback: propTypes.func.isRequired,
  total: propTypes.number,
};

export default Options;
