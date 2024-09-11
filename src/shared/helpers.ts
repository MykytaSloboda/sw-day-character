import { ELimits } from "@shared/enums";

export const getToday = (): string => new Date().toLocaleDateString();

export const getRandomCharacterID = (): number => Math.round(ELimits.CHARACTER_LIMIT * Math.random());
