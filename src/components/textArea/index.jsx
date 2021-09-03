import React from "react";
import helpers from "helpers";
import PropTypes from "prop-types";
import TextAreaStyle from "./textArea.style";

const { randomGenerator } = helpers;

const TextArea = (props) => {
  const { disabled, onChange, name, label } = props;
  const textAreaId = randomGenerator();
  return (
    <TextAreaStyle>
      <div className="IN-text-area IN-form-element">
        <label htmlFor={textAreaId}>
          {label}
          <textarea
            name={name}
            id={textAreaId}
            disabled={disabled}
            onChange={onChange}
          />
        </label>
      </div>
    </TextAreaStyle>
  );
};

TextArea.defaultProps = {
  disabled: false,
  onChange: () => null,
  name: "IN-textarea",
  label: "IN-textarea",
};

TextArea.propTypes = {
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  label: PropTypes.string,
};

export default TextArea;
