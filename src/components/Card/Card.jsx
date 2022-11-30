import React from "react";
import PropTypes from "prop-types";

const Card = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", padding: 15 }}>
      <span>{props.label}</span>
      <img src={props.picture} alt="freelance" height={80} width={80} />
      <span>{props.title}</span>
    </div>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
