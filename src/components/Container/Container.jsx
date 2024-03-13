import propTypes from "prop-types";
import css from "./Container.module.css";

const Container = ({ children }) => {
  return <div className={css.container}>{children}</div>;
};

Container.propTypes = {
  children: propTypes.node.isRequired,
};
export default Container;
