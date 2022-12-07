import { React, useContext } from "react";
import { useFetch } from "../../utils/hooks/hooks";
import { SurveyContext, ThemeContext } from "../../utils/context";
import { Link } from "react-router-dom";
import Loader from "../../utils/Atoms";
import styled from "styled-components";
import colors from "../../utils/style/color";

const ResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 60px 90px;
  padding: 30px;
  background-color: ${({ theme }) =>
    theme === "light" ? colors.backgroundLight : colors.backgroundDark};
`;

const ResultsTitle = styled.h2`
  color: ${({ theme }) => (theme === "light" ? "#000000" : "#ffffff")};
  font-weight: bold;
  font-size: 28px;
  max-width: 60%;
  text-align: center;
  & > span {
    padding-left: 10px;
  }
`;

const DescriptionWrapper = styled.div`
  padding: 60px;
`;

const JobTitle = styled.span`
  color: ${({ theme }) =>
    theme === "light" ? colors.primary : colors.backgroundLight};
  text-transform: capitalize;
`;

const JobDescription = styled.div`
  font-size: 18px;
  & > p {
    color: ${({ theme }) => (theme === "light" ? colors.secondary : "#ffffff")};
    margin-block-start: 5px;
  }
  & > span {
    font-size: 20px;
  }
`;

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledError = styled.div`
  text-align: center;
  font-size: 20px;
`;

const StyledLink = styled(Link)`
  padding: 7px 30px;
  color: #8186a0;
  text-decoration: none;
  font-size: 20px;
  ${(props) =>
    props.$isFullLink &&
    `color: white; border-radius: 30px; background-color: ${colors.primary}; `}
`;

function formatFetchParams(answers) {
  const answerNumbers = Object.keys(answers);
  const initialValue = "";
  return answerNumbers.reduce((previousParams, answerNumber, index) => {
    const isFirstParam = index === 0;
    const separator = isFirstParam ? "" : "&";

    return `${previousParams}${separator}a${answerNumber}=${answers[answerNumber]}`;
  }, initialValue);
}

const Results = () => {
  const { answers } = useContext(SurveyContext);
  const { theme } = useContext(ThemeContext);
  const fetchParams = formatFetchParams(answers);
  const { data, isLoading, error } = useFetch(
    `http://localhost:8000/results?${fetchParams}`
  );

  const { resultsData } = data;
  console.log(resultsData);

  if (error) {
    return <StyledError>Il y a eu un problème</StyledError>;
  }

  return isLoading ? (
    <LoaderWrapper>
      <Loader />
    </LoaderWrapper>
  ) : (
    <ResultsContainer theme={theme}>
      <ResultsTitle theme={theme}>
        Les compétences dont vous avez besoin :
        {resultsData &&
          resultsData.map((result, index) => {
            return (
              <JobTitle
                theme={theme}
                key={`result-title-${index}-${result.title}`}
              >
                {result.title}
                {index === resultsData.length - 1 ? "" : ","}
              </JobTitle>
            );
          })}
      </ResultsTitle>
      <StyledLink $isFullLink to="/freelances">
        Découvrez nos profils
      </StyledLink>
      <DescriptionWrapper>
        {resultsData &&
          resultsData.map((result, index) => (
            <JobDescription
              theme={theme}
              key={`result-detail-${index}-${result.title}`}
            >
              <JobTitle
                theme={theme}
                key={`result-title-${index}-${result.title}`}
              >
                {result.title}
              </JobTitle>
              <p>{result.description}</p>
            </JobDescription>
          ))}
      </DescriptionWrapper>
    </ResultsContainer>
  );
};

export default Results;
