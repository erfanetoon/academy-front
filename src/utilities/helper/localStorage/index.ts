import { LocalStorageItems } from './types';

export const setItem = (key: LocalStorageItems, value) => {
    if (typeof window === 'object') {
        localStorage.setItem(key, value);
    }
    return;
};

export const getItem = (key: LocalStorageItems) => {
    if (typeof window === 'object') {
        return localStorage.getItem(key);
    }
    return;
};

export const removeItem = (key: LocalStorageItems) => {
    if (typeof window === 'object') {
        localStorage.removeItem(key);
    }
    return;
};

export const clearLocalStorage = () => {
    if (typeof window === 'object') {
        localStorage.clear();
    }
    return;
};
