import { useState } from "react";

export const useToggle = () => {
  const [state, setState] = useState();
  const toggle = () => setState(!state);
  return [state, toggle];
};
