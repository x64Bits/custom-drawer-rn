import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface NavigationContextValue {
  screen: number;
  setScreen: (screen: number) => void;
}

const NavigationContext = createContext<NavigationContextValue>({
  screen: 0,
  setScreen: () => {},
});

export default NavigationContext;

export function NavigationProvider({ children }: Props) {
  const [screen, setScreen] = useState<number>(0);

  return (
    <NavigationContext.Provider value={{ screen, setScreen }}>
      {children}
    </NavigationContext.Provider>
  );
}
