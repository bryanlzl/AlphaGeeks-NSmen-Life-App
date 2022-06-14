import { RootStackScreenProps } from "../../types";
import { Text, View } from "../../components/Themed";
import { ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function UserGoalsScreen({ navigation }: RootStackScreenProps<"UserGoalsScreen">) {
  return (
    <ScrollView>
      <View>
        <Text>TEST</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
