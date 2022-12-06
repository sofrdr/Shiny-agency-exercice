import React from "react";
import styled from "styled-components";
import colors from "../../utils/style/color";

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
`;

const NightModeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${colors.primary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <NightModeButton>Changer de mode</NightModeButton>
    </FooterContainer>
  );
};

export default Footer;
