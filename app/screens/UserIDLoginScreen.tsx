import { Button, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";

const UserIDLoginScreen = ({
  navigation,
}: RootTabScreenProps<"UserIDLogin">) => {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>User ID</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    display: "flex",
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "white",
    width: "100%",
    height: 50,
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

export default UserIDLoginScreen;
