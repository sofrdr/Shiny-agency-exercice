import { React, useState, useEffect, useContext } from "react";
import styled from "styled-components";
import colors from "../../utils/style/color";
import { useParams, Link } from "react-router-dom";
import Loader from "../../utils/Atoms";
import { SurveyContext } from "../../utils/context";

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

const ReplyBox = styled.button`
  border: none;
  height: 100px;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.backgroundLight};
  border-radius: 30px;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isSelected ? `0px 0px 0px 2px ${colors.primary} inset` : "none"};
  &:first-child {
    margin-right: 15px;
  }
  &:last-of-type {
    margin-left: 15px;
  }
`;

const ReplyWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const Survey = () => {
  let { questionNumber } = useParams();
  const questionNumberInt = parseInt(questionNumber);
  const [surveyData, setSurveyData] = useState({});
  const [isDataLoading, setIsDataLoading] = useState(false);
  const { answers, saveAnswers } = useContext(SurveyContext);

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

  function saveReply(answer) {
    saveAnswers({ [questionNumber]: answer });
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
      <ReplyWrapper>
        <ReplyBox
          onClick={() => saveReply(true)}
          isSelected={answers[questionNumber] === true}
        >
          Oui
        </ReplyBox>
        <ReplyBox
          onClick={() => saveReply(false)}
          isSelected={answers[questionNumber] === false}
        >
          Non
        </ReplyBox>
      </ReplyWrapper>

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
