import { EErrorMessages } from '@shared/enums';

export const getFromLocalStorage = (key: string) => {
    return localStorage.getItem(key);
};

export const setToLocalStorage = (key: string, value: string) => {
    if (typeof value !== 'string') {
        throw new TypeError(EErrorMessages.VALUE_STORAGE);
    }

    localStorage.setItem(key, value);
};
