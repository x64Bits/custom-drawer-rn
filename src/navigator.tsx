import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { DrawerScreens } from "./components/Drawer/Screens";
import { DrawerContent } from "./components/Drawer/Content";

const Drawer = createDrawerNavigator();

const navigatorTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "rgba(0, 0, 0, 0)",
  },
};

export default function Navigator() {
  return (
    <NavigationContainer theme={navigatorTheme}>
      <Drawer.Navigator
        useLegacyImplementation
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          overlayColor: "transparent",
        }}
        drawerContent={(props) => <DrawerContent props={props} />}
      >
        <Drawer.Screen name="Screens">
          {(props) => <DrawerScreens {...props} />}
        </Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
