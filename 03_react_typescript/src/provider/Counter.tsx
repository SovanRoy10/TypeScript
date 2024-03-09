import React from "react";
import { createContext, useState, useContext } from "react";

interface CounterProviderProps {
  children: React.ReactNode;
}

interface CounterContextValue {
  value: number;
  setCount: (num: number) => void;
}

const CounterContext = createContext<null | CounterContextValue>(null);

export const CounterProvider: React.FC<CounterProviderProps> = (props) => {
  const [count, setCount] = useState<number>(1);
  return (
    <CounterContext.Provider value={{ value: count, setCount }}>
      {props.children}
    </CounterContext.Provider>
  );
};

export const useCounter = () => {
  return useContext(CounterContext);
};


