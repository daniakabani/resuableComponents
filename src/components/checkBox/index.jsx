import React from "react";
import CheckSvg from "svgs/check.svg";
import classnames from "classnames";
import PropTypes from "prop-types";
import CheckboxStyle from "./checkbox.style";

const CheckBox = (props) => {
  const { checkUpdateHandler, active } = props;
  const classes = classnames("IN-checkbox", { active });
  return (
    <CheckboxStyle>
      <div className={classes}>
        <div
          className="checkbox-container"
          onClick={checkUpdateHandler}
          onKeyDown={() => null}
          role="checkbox"
          aria-label="activate option"
          tabIndex="0"
          aria-checked={false}
        >
          <CheckSvg />
        </div>
      </div>
    </CheckboxStyle>
  );
};

CheckBox.defaultProps = {
  checkUpdateHandler: () => null,
  active: false,
};

CheckBox.propTypes = {
  checkUpdateHandler: PropTypes.func,
  active: PropTypes.bool,
};

export default CheckBox;
