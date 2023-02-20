import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  useDrawerProgress,
} from "@react-navigation/drawer";
import { useContext } from "react";
import { StyleSheet, Text } from "react-native";
import Animated, { interpolateNode } from "react-native-reanimated";
import NavigationContext from "../../store/NavigationContext";
import { Screens } from "./Screens";

interface DrawerContentProps {
  props: DrawerContentComponentProps;
}

export function DrawerContent({ props }: DrawerContentProps) {
  const { screen: activeScreen } = useContext(NavigationContext);
  const drawerProgress = useDrawerProgress() as Animated.Adaptable<number>;

  const translateY = Animated.interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [0, 50],
  });

  const borderTopLeftRadius = interpolateNode(drawerProgress, {
    inputRange: [0, 1],
    outputRange: [0, 30],
  });

  return (
    <Animated.View
      style={[
        styles.container,
        { borderTopLeftRadius, transform: [{ translateY }] },
      ]}
    >
      <DrawerContentScrollView {...props}>
        <Text style={styles.title}>Beka</Text>
        {Screens.map((screen, index) => (
          <DrawerItem
            key={screen.name}
            label={screen.name}
            onPress={() => props.navigation.navigate(screen.name)}
            labelStyle={[
              styles.itemLabel,
              activeScreen === index
                ? styles.activeItemLabel
                : styles.unactiveItemLabel,
            ]}
            style={activeScreen === index ? styles.activeItem : {}}
          />
        ))}
      </DrawerContentScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181832",
    paddingRight: 30,
    paddingLeft: 10,
    zIndex: 0,
  },
  openContainer: {
    marginTop: 50,
    borderTopLeftRadius: 40,
  },
  title: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 30,
  },
  activeItem: {
    backgroundColor: "#321C2E",
    borderRadius: 20,
  },
  itemLabel: {
    color: "#fff",
    fontSize: 22,
    padding: 10,
    paddingVertical: 7,
  },
  activeItemLabel: {
    color: "#F86A4C",
  },
  unactiveItemLabel: {
    color: "#fff",
  },
});
