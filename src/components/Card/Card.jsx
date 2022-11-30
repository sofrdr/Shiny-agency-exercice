import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../utils/style/color";

/* STYLED COMPONENTS */

const CardTitle = styled.span`
  color: #5843e4;
  font-size: 22px;
  padding-left: 15px;
`;

const CardImg = styled.img`
  height: 148px;
  width: 148px;
  margin: auto;
  border-radius: 50%;
`;

const CardLabel = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 15px;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  width: 334px;
  height: 334px;
  transition: 200ms;
  margin: auto;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`;

const Card = (props) => {
  const { label, picture, title } = props;

  return (
    <CardWrapper>
      <CardTitle>{title}</CardTitle>
      <CardImg src={picture} alt="freelance" />
      <CardLabel>{label}</CardLabel>
    </CardWrapper>
  );
};

Card.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string,
};

export default Card;
