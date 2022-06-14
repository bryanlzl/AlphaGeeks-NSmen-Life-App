import { useState, useEffect } from "react";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import { StyleSheet, ScrollView, Text, Modal, Pressable, TouchableOpacity, ImageBackground } from "react-native";
import CalendarComponent from "../../components/CalendarComponents";
import ippt_image from "../../assets/images/ippt.png";

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

export default function TimeSlotScreen({ navigation }: RootStackScreenProps<"TimeSlotScreen">) {
  const [modalVisible, setModalVisible] = useState(false);
  const [venue, setVenue] = useState("");
  const [activity, setActivity] = useState("");
  const [bookingData, setBookingData] = useState([]);

  return (
    <View style={styles.centeredView}>
      <Text style={styles.modalText}>{`${activity} @ ${venue}`}</Text>
      <Text style={{ fontSize: 20 }}>Select your timeslot</Text>

      <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
        <BtnSelect title="0830" />
        <BtnSelect title="1030" />
      </View>

      <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
        <BtnSelect title="1230" />
        <BtnSelect title="1430" />
      </View>

      <View style={{ flex: 1, flexDirection: "row", marginTop: 25 }}>
        <BtnSelect title="1630" />
        <BtnSelect title="1830" />
      </View>

      <View style={{ marginBottom: 25 }}>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => {
            fetch("https://1d03sd22y1.execute-api.ap-southeast-1.amazonaws.com/dev/api/booking", {
              method: "post",
              headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                userId: "123",
                date: "10-06-2022",
                time: "0830",
                location: "Khatib @ FCC",
              }),
            })
              .then((res) => res.json())
              .then((res) => navigation.goBack());
          }}
        >
          <Text style={styles.textStyle}>Confirm</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.textStyle}>Hide Modal</Text>
        </Pressable>
      </View>
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
