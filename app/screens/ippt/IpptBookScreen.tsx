import { useState, useEffect } from "react";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import { StyleSheet, ScrollView, Text, Modal, Pressable, TouchableOpacity, ImageBackground } from "react-native";
import CalendarComponent from "../../components/CalendarComponents";
import ippt_image from "../../assets/images/ippt.png";
import { useIsFocused } from "@react-navigation/native";

const BtnSelect = ({ title }) => {
  const [isSelect, setSelect] = useState(false);
  const [counter, setCounter] = useState(10);

  return (
    <TouchableOpacity
      style={{ marginRight: 35 }}
      onPress={() => {
        setSelect(!isSelect);

        setCounter((prevState) => {
          if (!isSelect) return (prevState -= 1);
          else return (prevState += 1);
        });
      }}
    >
      <Text style={{ textAlign: "center", borderWidth: isSelect ? 1 : 0 }}>{title}</Text>
      <Text style={{ textAlign: "center" }}>{counter} slots left</Text>
    </TouchableOpacity>
  );
};

export default function IpptBookingScreen({ navigation }: RootStackScreenProps<"IpptBookingScreen">) {
  const [venue, setVenue] = useState("");
  const [activity, setActivity] = useState("");
  const [bookingData, setBookingData] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    fetch("https://1d03sd22y1.execute-api.ap-southeast-1.amazonaws.com/dev/api/booking", { method: "get" })
      .then((res) => res.json())
      .then((res) => setBookingData(res["data"]));
  }, [isFocused]);

  const RenderBookingData = () => {
    return (
      <>
        {bookingData.map((bkd, index) => {
          if (bkd["userId"] !== "1") {
            return (
              <View key={index}>
                <ImageBackground source={ippt_image} style={{ paddingVertical: 20, paddingHorizontal: 20, marginVertical: 10 }}>
                  <Text>{`#${index}  NS Fit Session`}</Text>
                  <Text>{bkd["location"]}</Text>
                  <Text>{bkd["date"]}</Text>
                </ImageBackground>
              </View>
            );
          }
        })}
      </>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={{ paddingBottom: 25, paddingTop: 15, marginHorizontal: 10 }}>
        <Text>Select your activity type</Text>
        <View style={{ flex: 1, flexDirection: "row", marginVertical: 15 }}>
          <TouchableOpacity
            onPress={() => setActivity("IPPT")}
            style={{ backgroundColor: "gray", padding: 10, paddingHorizontal: 25, marginRight: 10 }}
          >
            <Text>IPPT</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setActivity("NS Fit")}
            style={{ backgroundColor: "gray", padding: 10, paddingHorizontal: 25, marginRight: 10 }}
          >
            <Text>NS Fit</Text>
          </TouchableOpacity>
        </View>

        <Text>Select your venue</Text>
        <View style={{ flex: 1, flexDirection: "row", marginVertical: 15 }}>
          <TouchableOpacity
            onPress={() => setVenue("Bedok")}
            style={{ backgroundColor: "gray", padding: 10, paddingHorizontal: 25, marginRight: 10 }}
          >
            <Text>Bedok</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setVenue("Khatib FCC")}
            style={{ backgroundColor: "gray", padding: 10, paddingHorizontal: 25, marginRight: 10 }}
          >
            <Text>Khatib FCC</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => setVenue("Kranji")}
            style={{ backgroundColor: "gray", padding: 10, paddingHorizontal: 25, marginRight: 10 }}
          >
            <Text>Kranji</Text>
          </TouchableOpacity>
        </View>
      </View>

      <CalendarComponent />

      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => navigation.navigate("TimeSlot")}>
        <Text style={styles.textStyle}>Set booking</Text>
      </Pressable>

      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 25, marginTop: 25 }}>Your Bookings: </Text>

        <RenderBookingData />
      </View>
    </ScrollView>
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
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#FFC0C0",
  },
  centeredView: {
    flex: 1,
    paddingTop: 55,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 25,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
  },
});
