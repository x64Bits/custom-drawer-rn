import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";

interface Props {
  name: string;
  onPressMenu: () => void;
}

export function Header({ name, onPressMenu }: Props) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={onPressMenu}>
          <SimpleLineIcons name="menu" size={24} color="#535353" />
        </TouchableOpacity>
        <Text style={styles.name}>{name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 15,
  },
  safeArea: {
    backgroundColor: "#fff",
  },
  button: {
    padding: 10,
  },
});
