import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import CardRadioStyle from "./index.style";

const CardRadio = (props) => {
  const { children, id, title, active, onClick, order } = props;
  const classes = classnames("circles", { active });
  return (
    <CardRadioStyle>
      <div className="IN-radioCard IN-card-element">
        <div className="titles">
          <div
            className={classes}
            onClick={(e) => onClick(e.target.id)}
            id={id}
            role="checkbox"
            onKeyDown={() => null}
            aria-label="activate option"
            tabIndex={order}
            aria-checked={false}
          />
          <h3>{title}</h3>
        </div>
        {children}
      </div>
    </CardRadioStyle>
  );
};

CardRadio.defaultProps = {
  children: [],
  title: "Insurance Radio Card",
  id: "insurance-radio",
  onClick: () => null,
  active: false,
  order: 1,
};

CardRadio.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  order: PropTypes.number,
};

export default CardRadio;
