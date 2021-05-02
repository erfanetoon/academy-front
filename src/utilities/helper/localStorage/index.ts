import { LocalStorageItems } from './types';

export const setItem = (key: LocalStorageItems, value) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, value);
    }
    return;
};

export const getItem = (key: LocalStorageItems) => {
    if (typeof window !== 'undefined') {
        return localStorage.getItem(key);
    }
    return;
};

export const removeItem = (key: LocalStorageItems) => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem(key);
    }
    return;
};

export const clearLocalStorage = () => {
    if (typeof window !== 'undefined') {
        localStorage.clear();
    }
    return;
};
