import React from "react";
import PropTypes from "prop-types";
import CarInfoPageStyle from "./label.style";

const Label = (props) => {
  const { children } = props;
  return (
    <CarInfoPageStyle>
      <div className="IN-label">
        <div className="label-wrapper">{children}</div>
      </div>
    </CarInfoPageStyle>
  );
};

Label.defaultProps = {
  children: [],
};

Label.propTypes = {
  children: PropTypes.node,
};

export default Label;
