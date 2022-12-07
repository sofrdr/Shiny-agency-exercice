import { React } from "react";
import { useFetch } from "../../utils/hooks/hooks";
import Card from "../../components/Card/Card";
import styled from "styled-components";
import colors from "../../utils/style/color";
import Loader from "../../utils/Atoms";

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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledError = styled.div`
  text-align: center;
  font-size: 20px;
`;

const Freelances = () => {
  const { data, isLoading, error } = useFetch(
    "http://localhost:8000/freelances"
  );
  const { freelancersList } = data;

  if (error) {
    return <StyledError>Il y a eu un problème</StyledError>;
  }
  return (
    <div>
      <PageTitle>Trouvez votre prestataire</PageTitle>
      <PageSubtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </PageSubtitle>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList &&
            freelancersList.map((profile) => {
              return (
                <Card
                  key={`${profile.id}`}
                  label={profile.name}
                  title={profile.job}
                  picture={profile.picture}
                />
              );
            })}
        </CardsContainer>
      )}
    </div>
  );
};

export default Freelances;
