import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import WarningIcon from "svgs/warning.svg";
import TextBoxStyle from "./textBox.style";

const TextBox = (props) => {
  const { labelText, name, required, error, onChange, type } = props;
  const classes = classnames("insurance-textbox", "IN-form-element", { error });

  const handleInputChange = (e) => {
    const value = e?.target;
    return onChange(value);
  };

  return (
    <TextBoxStyle>
      <div className={classes}>
        <label htmlFor={name}>
          {labelText}
          <input
            name={name}
            required={required}
            type={type}
            onChange={handleInputChange}
          />
          {error && <WarningIcon />}
        </label>
        <p className="error-text">{error}</p>
      </div>
    </TextBoxStyle>
  );
};

TextBox.defaultProps = {
  labelText: "insurance web V1.0",
  name: "insurance web V1.0",
  required: true,
  error: null,
  onChange: () => null,
  type: "text",
};

TextBox.propTypes = {
  labelText: PropTypes.string,
  name: PropTypes.string,
  required: PropTypes.bool,
  error: PropTypes.string,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

export default TextBox;
