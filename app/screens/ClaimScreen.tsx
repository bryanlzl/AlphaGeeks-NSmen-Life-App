import { View } from "../components/Themed";
import { RootStackScreenProps } from "../types";
import { ImageBackground, StyleSheet, Text, Image, Pressable, LayoutAnimation, ScrollView } from "react-native";

export default function ClaimScreen({ navigation }: RootStackScreenProps<"Claim">) {
  return (
    <ScrollView style={{ backgroundColor: "#FFE9E9", height: "100%" }}>
      <View style={styles.container}>
        
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
  },
});
