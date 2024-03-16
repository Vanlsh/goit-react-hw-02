import propTypes from "prop-types";
import css from "./Options.module.css";
import { GOOD, NEUTRAL, BAD, RESET } from "../../consts.js";

const buttonTypes = [GOOD, NEUTRAL, BAD];

const Options = ({ handleFeedback, total }) => {
  return (
    <ul className={css.list}>
      {buttonTypes.map((item) => (
        <li key={item} className={css.listItem}>
          <button onClick={() => handleFeedback(item)}>{item}</button>
        </li>
      ))}
      <li className={css.listItem}>
        <button onClick={() => handleFeedback(RESET)} disabled={!total}>
          {RESET}
        </button>
      </li>
    </ul>
  );
};

Options.propTypes = {
  handleFeedback: propTypes.func.isRequired,
  total: propTypes.number,
};

export default Options;
