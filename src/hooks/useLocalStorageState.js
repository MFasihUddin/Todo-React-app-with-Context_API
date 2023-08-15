import { useState, useEffect } from "react";

export const useLocalStorageState = (key, defaultVal) => {
  const [state, setState] = useState(() => {
    let value;
    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultVal)
      );
    } catch (error) {
      value = defaultVal;
    }
    return value;
  });
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  return [state, setState];
};
