import Navigator from "./src/navigator";
import { NavigationProvider } from "./src/store/NavigationContext";

export default function App() {
  return (
    <NavigationProvider>
      <Navigator />
    </NavigationProvider>
  );
}
