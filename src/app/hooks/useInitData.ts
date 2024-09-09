import { getRandomCharacterID, getToday } from "@shared/helpers";
import {
  getFetchedData,
  getFetchedDataFromArray,
  getFromLocalStorage,
  setToLocalStorage,
} from "@app/services";
import { useCallback, useEffect, useState } from "react";
import { ICharacter, IFilm, IStarship, IVehicle, TData } from "@shared/types";
import { EErrorMessages, EUrls } from "@shared/enums";

export const useInitData = () => {
  const todayDate = getToday();
  const characterIDFromStorage = getFromLocalStorage(todayDate);
  const characterID = characterIDFromStorage || getRandomCharacterID();

  if (!characterIDFromStorage) {
    setToLocalStorage(todayDate, `${characterID}`);
  }

  const [data, setData] = useState<TData>(null);

  const getDataFromServer = useCallback(async () => {
    const characterURL = `${EUrls.BASE_PEOPLE}/${characterID}`;

    try {
      const character = await getFetchedData<ICharacter>(characterURL);
      const {
        films: filmsUrls,
        starships: starhipsUrls,
        vehicles: vehiclesUrls,
      } = character;

      const films = await getFetchedDataFromArray<IFilm>(filmsUrls);
      const starships = await getFetchedDataFromArray<IStarship>(starhipsUrls);
      const vehicles = await getFetchedDataFromArray<IVehicle>(vehiclesUrls);

      setData({
        character,
        films,
        starships,
        vehicles
      });
    } catch {
      throw new Error(EErrorMessages.FAILED_FETCH);
    }
  }, [characterID]);

  useEffect(() => {getDataFromServer()}, [getDataFromServer])

  return data;
};
