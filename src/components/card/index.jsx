import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import CardStyle from "./index.style";

const Card = (props) => {
  const { children, recommended } = props;
  const classes = classNames("IN-card", "IN-card-element", { recommended });
  return (
    <CardStyle>
      <div className={classes}>
        {recommended && <span className="recommendation">Recommended</span>}
        {children}
      </div>
    </CardStyle>
  );
};

Card.defaultProps = {
  recommended: false,
  children: [],
};

Card.propTypes = {
  children: PropTypes.node,
  recommended: PropTypes.bool,
};

export default Card;
