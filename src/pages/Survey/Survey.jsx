import { React, useState, useEffect } from "react";
import styled from "styled-components";
import colors from "../../utils/style/color";
import { useParams, Link } from "react-router-dom";
import Loader from "../../utils/Atoms";

const Survey = () => {
  let { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);

  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);

  const SurveyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const QuestionTitle = styled.h2`
    text-decoration: underline;
    text-decoration-color: ${colors.primary};
  `;

  const QuestionContent = styled.span`
    margin: 30px;
  `;

  const LinkWrapper = styled.div`
    padding-top: 30px;
    & a {
      color: black;
    }
    & a:first-of-type {
      margin-right: 20px;
    }
  `;

  async function fetchData() {
    try {
      setIsDataLoading(true);
      const response = await fetch("http://localhost:8000/survey");
      const data = await response.json();
      setSurveyData(data.surveyData);
      setIsDataLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]}</QuestionContent>
      )}

      <LinkWrapper>
        {questionNumberInt > 1 && (
          <Link to={`/survey/${questionNumberInt - 1}`}>Précédent</Link>
        )}
        {surveyData[questionNumberInt + 1] ? (
          <Link to={`/survey/${questionNumberInt + 1}`}>Suivant</Link>
        ) : (
          <Link to="/survey/results">Résultats</Link>
        )}
      </LinkWrapper>
    </SurveyContainer>
  );
};

export default Survey;
