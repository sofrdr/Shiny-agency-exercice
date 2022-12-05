import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/color";
import errorImg from "../../assets/404.svg";

const ErrorContainer = styled.div`
  background-color: ${colors.backgroundLight};
  margin: 0 62px;
  padding: 99px 220px 364px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorIllustration = styled.img`
  margin: auto;
`;

const StyledText = styled.p`
  text-align: center;
  font-weight: 700;
  font-size: 31px;
  color: #2f2e41;
  margin: 45px 0;
`;

const Error = () => {
  return (
    <ErrorContainer>
      <StyledText>Oups ...</StyledText>
      <ErrorIllustration src={errorImg} alt="illustration-404" />
      <StyledText>Il semblerait qu’il y ait un problème</StyledText>
    </ErrorContainer>
  );
};

export default Error;
