import React from "react";
import DefaultPicture from "../../assets/profile.png";
import Card from "../../components/Card/Card";

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

const Freelances = () => {
  return (
    <div>
      <h1>Freelances 👩‍💻👨‍💻👩‍💻</h1>
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
    </div>
  );
};

export default Freelances;
