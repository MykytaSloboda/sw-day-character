import { BaseLayout, ProfileSection } from "@shared/ui";
import { DataContext } from "@app/context";
import { useContext } from "react";

export const CharacterOfTheDay = () => {
  const data = useContext(DataContext);

  console.log(data);

  return (
    <BaseLayout>
      {data?.character && <ProfileSection character={data?.character} />}
    </BaseLayout>
  );
};
