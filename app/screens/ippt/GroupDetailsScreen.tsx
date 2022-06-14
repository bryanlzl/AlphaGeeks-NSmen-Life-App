import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import { ImageBackground, StyleSheet, Text, Image, Pressable, LayoutAnimation, ScrollView, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  dropDown: {
    backgroundColor: "white",
    width: 119,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 5,
    paddingVertical: 2,
  },
  chevron: { width: 26 / 2, height: 23 / 2, right: 0, transform: [{ rotate: "270deg" }] },
  filter: {
    backgroundColor: "#D9D9D9",
    width: "100%",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  container: {
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    alignItems: "center",
    paddingVertical: 50,
  },
});

const groups = [
  { name: "Guards Gang", workout: "Workout type ~ HIIT", duration: "30 mins left" },
  { name: "Chioooooong AH!", workout: "Workout type ~ HIIT", duration: "5 mins left" },
  { name: "letsgetfreakyy", workout: "Workout type ~ HIIT", duration: "5hrs 20 mins left" },
  { name: "session of pain", workout: "Workout type ~ HIIT", duration: "20 mins left" },
];

export default function GroupDetailsScreen({ navigation }: RootStackScreenProps<"GroupDetails">) {
  return (
    <View style={{ backgroundColor: "#FFE9E9", height: "100%" }}>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "#FFF3F3",
            width: "90%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: 20,
            borderRadius: 20,
          }}
        >
          <View elevation={5} style={{ backgroundColor: "#FFC0C0", borderRadius: 20, width: "80%", height: 30 }}>
            <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center" }}>Groups Details</Text>
          </View>
          <View
            elevation={10}
            style={{ backgroundColor: "transparent", width: "90%", height: "50%", margin: 20, borderRadius: 10, overflow: "hidden", borderWidth: 1 }}
          >
            <Image style={{ width: "100%", height: "100%" }} source={{ uri: "https://i.imgur.com/1OIjMcf.png" }} />
          </View>
          <TouchableOpacity style={{ width: 270, height: 30, backgroundColor: "#6CC394", borderRadius: 10 }}>
            <Text style={{ textAlign: "center", textAlignVertical: "center", height: "100%", width: "100%", color: "white" }}>Join Group</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
