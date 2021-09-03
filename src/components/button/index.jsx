import React from "react";
import PropTypes from "prop-types";
import classes from "classnames";
import ButtonStyles from "./button.style";

const Button = (props) => {
  const { onClick, disabled = false, children } = props;
  const clickHandler = () => onClick();
  const classNames = classes("in-button", {
    disabled,
  });

  return (
    <ButtonStyles>
      <div className={classNames}>
        <button disabled={disabled} type="button" onClick={clickHandler}>
          {children}
        </button>
      </div>
    </ButtonStyles>
  );
};

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
  children: "Button",
};

Button.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default Button;
