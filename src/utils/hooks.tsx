import { useState } from 'react';

const useLocalStorage = (key: string, initialValue?: any) => {
  const [item, setInnerValue] = useState(() => {
    try {
      const localItem = window.localStorage.getItem(key);
      return localItem ? JSON.parse(localItem) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    setInnerValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  return [item, setValue];
};

export { useLocalStorage };
