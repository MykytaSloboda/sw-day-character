import { ICharacter } from "./character";
import { IFilm } from "./film";
import { IStarship } from "./starship";
import { IVehicle } from "./vehicle";

interface IData {
    character: ICharacter,
    films: IFilm[],
    vehicles: IVehicle[],
    starships: IStarship[]
};

export type TData = IData | null;