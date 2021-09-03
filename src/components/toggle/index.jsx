import React from "react";
import ReactToggle from "react-toggle";
import helpers from "helpers";
import PropTypes from "prop-types";
import ToggleStyle from "./toggle.style";
import "./toggle.css";

const { randomGenerator } = helpers;

const Toggle = (props) => {
  const { disabled, name, checked, onChange } = props;
  const toggleId = randomGenerator();
  return (
    <ToggleStyle>
      <div className="IN-toggle IN-form-element">
        <ReactToggle
          id={toggleId.toString()}
          checked={checked}
          name={name}
          disabled={disabled}
          onChange={(e) => onChange(e.target.checked)}
        />
      </div>
    </ToggleStyle>
  );
};

Toggle.defaultProps = {
  disabled: false,
  name: "IN-toggle",
  checked: false,
  onChange: () => null,
};

Toggle.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Toggle;
