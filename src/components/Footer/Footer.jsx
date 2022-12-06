import { React, useContext } from "react";
import { ThemeContext } from "../../utils/context";
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
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <FooterContainer>
      <NightModeButton onClick={() => toggleTheme()}>
        Changer de mode : {theme === "light" ? "🌙" : "☀️"}
      </NightModeButton>
    </FooterContainer>
  );
};

export default Footer;
