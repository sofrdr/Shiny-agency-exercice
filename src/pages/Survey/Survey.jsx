import React from "react";
import { useParams, Link } from "react-router-dom";

const Survey = () => {
  let { questionNumber } = useParams();

  return (
    <div>
      <h1>Questionnaire</h1>
      <h2>Question {questionNumber}</h2>
      {questionNumber !== "1" && (
        <Link to={`/survey/${Number(questionNumber) - 1}`}>Précédent</Link>
      )}
      {questionNumber === "10" ? (
        <Link to="/survey/results">Résultats</Link>
      ) : (
        <Link to={`/survey/${Number(questionNumber) + 1}`}>Suivant</Link>
      )}
    </div>
  );
};

export default Survey;
