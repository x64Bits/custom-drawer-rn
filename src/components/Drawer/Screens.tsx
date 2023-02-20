import { useDrawerProgress } from "@react-navigation/drawer";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback, useContext } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import Animated, { interpolateNode } from "react-native-reanimated";
import ContactScreen from "../../screens/contact";
import HomeScreen from "../../screens/home";
import NavigationContext from "../../store/NavigationContext";
import { Header } from "../Header";

interface DrawerScreensProps {
  navigation: {
    openDrawer: () => void;
  };
}

export const Screens = [
  {
    name: "Home",
    component: HomeScreen,
  },
  {
    name: "Contact",
    component: ContactScreen,
  },
];

export function DrawerScreens({ navigation }: DrawerScreensProps) {
  const Stack = createNativeStackNavigator();
  const { setScreen } = useContext(NavigationContext);

  const drawerProgress = useDrawerProgress() as Animated.Adaptable<number>;

  const translateY = Animated.interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const translateX = Animated.interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [0, -230],
  });

  const rotate = Animated.interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: ["0deg", "-15deg"],
  });

  const borderRadius = interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  const handleListenNavigation = (event: any) => {
    const index = event.data.state.index;
    setScreen(index);
  };

  return (
    <Animated.View
      style={[
        { flex: 1 },
        {
          borderRadius,
          transform: [{ translateX }, { translateY }, { rotate }],
        },
      ]}
    >
      <Stack.Navigator
        screenOptions={{
          headerTransparent: true,
          header: ({ route }) => (
            <Header name={route.name} onPressMenu={navigation.openDrawer} />
          ),
        }}
        screenListeners={{
          state: handleListenNavigation,
        }}
      >
        {Screens.map((screen) => (
          <Stack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        ))}
      </Stack.Navigator>
    </Animated.View>
  );
}
