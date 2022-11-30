import { React } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../../utils/style/color";
import illustration from "../../assets/home-illustration.svg";

const HomeContainer = styled.div`
  display: flex;
  margin: 0 62px 0 62px;
  background-color: ${colors.backgroundLight};
`;

const LeftCol = styled.div`
  max-width: 552px;
  margin-left: 98px;
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h1`
  font-size: 50px;
  margin: 176px 54px 90px 0;
  font-weight: 700;
  line-height: 160.5%;
`;

const StyledLink = styled(Link)`
  color: white;
  border-radius: 30px;
  background-color: ${colors.primary};
  width: 261px;
  text-decoration: none;
  padding: 10px 0;
  text-align: center;
  margin-bottom: 228px;
  font-size: 20px;
  font-weight: 500;
`;

const HomeIllustration = styled.img`
  margin-right: 77px;
  width: 438.11px;
`;

const Home = () => {
  return (
    <HomeContainer>
      <LeftCol>
        <StyledTitle>
          Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents
        </StyledTitle>
        <StyledLink to="/survey">Faire le test</StyledLink>
      </LeftCol>
      <HomeIllustration src={illustration} alt="illustration" />
    </HomeContainer>
  );
};

export default Home;
