import React from "react";
import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import colors from "../../utils/style/color";

const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
];

const CardsContainer = styled.div`
  display: grid;
  gap: 52px;
  grid-template-rows: 334px 334px;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-items: center;
`;

const PageTitle = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
`;

const PageSubtitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  padding-bottom: 30px;
  color: ${colors.secondary};
`;

const Freelances = () => {
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      <CardsContainer>
        {freelanceProfiles.map((profile, index) => {
          return (
            <Card
              key={`${profile.name}-${index}`}
              label={profile.name}
              title={profile.jobTitle}
              picture={profile.picture}
            />
          );
        })}
      </CardsContainer>
    </div>
  );
};

export default Freelances;
