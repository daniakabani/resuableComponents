import React from "react";
import PropTypes from "prop-types";
import helpers from "helpers";
import Select from "react-select";
import SelectStyle from "./select.style";

const { randomGenerator } = helpers;

const SelectInput = (props) => {
  const {
    options,
    onChange,
    label,
    disabled,
    loading,
    clearable,
    name,
    closeOnSelect,
    placeHolder,
  } = props;
  const selectId = randomGenerator();
  return (
    <SelectStyle>
      <div className="insurance-select IN-form-element">
        <label htmlFor={selectId}>
          {label}
          <Select
            options={options}
            className="IN-select"
            isDisabled={disabled}
            isLoading={loading}
            isClearable={clearable}
            name={name}
            onChange={(e) => onChange(e)}
            closeMenuOnSelect={closeOnSelect}
            placeholder={placeHolder}
          />
        </label>
      </div>
    </SelectStyle>
  );
};

SelectInput.defaultProps = {
  options: [],
  onChange: () => null,
  label: "Insurance Select",
  disabled: false,
  loading: false,
  clearable: true,
  name: "Insurance Select",
  closeOnSelect: true,
  placeHolder: "placeholder",
};

SelectInput.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object),
  onChange: PropTypes.func,
  label: PropTypes.string,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  clearable: PropTypes.bool,
  name: PropTypes.string,
  closeOnSelect: PropTypes.bool,
  placeHolder: PropTypes.string,
};

export default SelectInput;
