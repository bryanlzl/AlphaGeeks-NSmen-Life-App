import { useState } from "react";
import { RootTabScreenProps } from "../../types";
import { Text, View } from "../../components/Themed";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, ScrollView, Image, TextInput, Button, TouchableOpacity } from "react-native";

export default function WorkoutScreen({ navigation }: RootTabScreenProps<"Profile">) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Cardio", value: "cardio" },
    { label: "HIIT", value: "hiit" },
    { label: "2.4km run", value: "2.4km" },
    { label: "5km run", value: "5km" },
    { label: "Upper body", value: "upperbody" },
    { label: "Lower body", value: "lowerbody" },
    { label: "Core", value: "core" },
  ]);

  const RenderCheckbox = () => {
    const data = ["Workout venues", "Type of workout", "Birthday period (within a month)"];
    return (
      <>
        {data.map((d, index) => {
          return (
            <View style={styles.profile_component} key={index}>
              <Image style={styles.checkbox} source={{ uri: "https://i.imgur.com/kQgvKT7.png" }} />
              <Text style={styles.profile_text}>{d}</Text>
            </View>
          );
        })}
      </>
    );
  };

  const RenderOptions = () => {
    return (
      <>
        <View>
          <Text style={{ fontSize: 20 }}>Type of workout:</Text>
          <DropDownPicker
            style={{ marginTop: 10 }}
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            setItems={setItems}
          />
        </View>

        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 20 }}>Desired workout location (postal code):</Text>
          <TextInput style={{ borderWidth: 1, padding: 10, marginTop: 10 }} placeholder="Enter address or postal code" />
        </View>

        <TouchableOpacity style={{ backgroundColor: "gray", marginTop: 25 }}>
          <Text style={{ textAlign: "center", paddingVertical: 15, color: "white", fontSize: 20 }}>Filter</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ paddingBottom: 25, paddingTop: 15 }}>
        <View style={styles.profile_details}>
          <RenderCheckbox />
        </View>

        <View style={{ marginHorizontal: 10 }}>
          <RenderOptions />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  profile_component: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#D9D9D9",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
  },
  profile_text: {
    fontSize: 20,
    color: "black",
    paddingBottom: 20,
  },
  profile_details: {
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    marginVertical: 10,
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "#D9D9D9",
  },
});
