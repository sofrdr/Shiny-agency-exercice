import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/color";
import logo from "../../assets/dark-logo.png";

const StyledLink = styled(Link)`
  padding: 7px 30px;

  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; width: 174px;`}
`;

const HeaderLogo = styled.img`
  width: 187.63px;
  height: 70px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 62px 122px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLogo src={logo} />
      <nav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelances">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
