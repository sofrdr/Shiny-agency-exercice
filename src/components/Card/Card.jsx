import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/color";

/* STYLED COMPONENTS */

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
`;

const CardImg = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 350px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const Card = (props) => {
  const { label, picture, title } = props;

  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImg src={picture} alt="freelance" />
      <span>{title}</span>
    </CardWrapper>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
