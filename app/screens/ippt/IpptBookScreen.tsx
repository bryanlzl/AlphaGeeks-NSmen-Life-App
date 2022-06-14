import { useState } from "react";
import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import DropDownPicker from "react-native-dropdown-picker";
import { StyleSheet, ScrollView, Text, Modal, Pressable, TouchableOpacity } from "react-native";
import CalendarComponent from "../../components/CalendarComponents";

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
  const [modalVisible, setModalVisible] = useState(false);
  const [venue, setVenue] = useState("");
  const [activity, setActivity] = useState("");

  const RenderModal = () => {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
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
                  .then((res) => console.log(res));
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.textStyle}>Confirm</Text>
            </Pressable>

            <Pressable style={[styles.button, styles.buttonClose]} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
      <RenderModal />

      <Pressable style={[styles.button, styles.buttonOpen]} onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Modal</Text>
      </Pressable>

      <Pressable
        style={[styles.button, styles.buttonClose]}
        onPress={() =>
          fetch("https://1d03sd22y1.execute-api.ap-southeast-1.amazonaws.com/dev/api/booking", { method: "get" })
            .then((res) => res.json())
            .then((res) => console.log(res))
        }
      >
        <Text style={styles.textStyle}>Hide Modal</Text>
      </Pressable>

      <View style={{ paddingHorizontal: 15 }}>
        <Text style={{ fontSize: 25, marginTop: 25 }}>Your Bookings: </Text>
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
