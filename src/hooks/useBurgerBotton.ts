import { useState, useEffect } from "react";

let globalState = {
  isToggled: false,
};

let listeners: ((state: typeof globalState) => void)[] = [];

const setGlobalState = (newState: Partial<typeof globalState>) => {
  globalState = { ...globalState, ...newState };
  listeners.forEach((listener) => listener(globalState));
};

export const useBurguerButton = () => {
  const [state, setState] = useState(globalState);

  useEffect(() => {
    const listener = (updatedState: typeof globalState) => {
      setState(updatedState);
    };
    listeners.push(listener);
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  }, []);

  return [state, setGlobalState] as const;
};