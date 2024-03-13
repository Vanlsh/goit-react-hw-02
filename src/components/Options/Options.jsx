import propTypes from "prop-types";
import css from "./Options.module.css";

const buttonTypes = ["good", "neutral", "bad", "reset"];

const Options = ({ handleFeedback }) => {
  return (
    <ul className={css.list}>
      {buttonTypes.map((item) => (
        <li key={item} className={css.listItem}>
          <button onClick={() => handleFeedback(item)}>{item}</button>
        </li>
      ))}
    </ul>
  );
};

Options.propTypes = {
  handleFeedback: propTypes.func.isRequired,
};

export default Options;
