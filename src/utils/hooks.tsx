import { useState } from 'react';

type StorageValues = string | number | boolean | object | [];

export const useLocalStorage = (key: string, initialValue?: StorageValues) => {
  const [item, setInnerValue] = useState(() => {
    try {
      const localItem = window.localStorage.getItem(key);
      return localItem ? JSON.parse(localItem) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: StorageValues) => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [item, setValue];
};
