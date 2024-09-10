import {
  BaseLayout,
  FilmsSection,
  Loading,
  ProfileSection,
  VehiclesSection,
} from "@shared/ui";
import { DataContext } from "@app/context";
import { useContext, useState } from "react";
import { getFetchedData } from "@app/services";
import { IPlanet } from "@shared/types";

export const CharacterOfTheDay = () => {
  const data = useContext(DataContext);
  const [homeName, setHomeName] = useState("");

  if (!data) {
    return <Loading />;
  }
  const getHomeName = async () => {
    const homeworldData = await getFetchedData<IPlanet>(
      data?.character.homeworld || ""
    );

    setHomeName(homeworldData.name);
  };

  if (data) {
    getHomeName();
  }

  return (
    <BaseLayout>
      {data?.character && (
        <ProfileSection character={data?.character} homeName={homeName} />
      )}

      {data?.films && <FilmsSection films={data.films} />}

      {data?.vehicles && <VehiclesSection vehicles={data.vehicles} />}
    </BaseLayout>
  );
};
