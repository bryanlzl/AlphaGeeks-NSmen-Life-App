import { useState } from "react";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, ScrollView, Text } from "react-native";
import CalendarComponent from "../../components/CalendarComponents";

export default function IpptBookingScreen({ navigation }: RootStackScreenProps<"IpptBookingScreen">) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "IPPT", value: "ippt" },
    { label: "NS Fit", value: "nsfit" },
  ]);
  const [venue, setVenue] = useState([
    { label: "Khatib FCC", value: "khatib" },
    { label: "Maju", value: "maju" },
    { label: "Kranji", value: "kranji" },
    { label: "Bedok", value: "bedok" },
  ]);

  return (
    <View>
      <View style={{ paddingBottom: 25, paddingTop: 15, marginHorizontal: 10 }}>
        <DropDownPicker
          placeholder="Select Activity Type"
          style={styles.title}
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
        />

        <DropDownPicker
          placeholder="Please Select Venue"
          style={styles.title2}
          open={open}
          value={value}
          items={venue}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setVenue}
        />
      </View>
      <ScrollView style={{ backgroundColor: "white" }}>
        <CalendarComponent />

        <View style={{ paddingHorizontal: 15 }}>
          <Text style={{ fontSize: 25, marginTop: 25 }}>Your Bookings: </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    padding: 10,
    fontSize: 25,
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFC0C0",
  },
  title2: {
    padding: 10,
    fontSize: 25,
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFC0C0",
  },
});
