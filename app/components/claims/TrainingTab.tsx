import { useState } from "react";
import { View, Text, Pressable, Image, TouchableOpacity } from "react-native";
import CalendarComponent from "../CalendarComponent";

export default function Training({ nextPage }) {
  const [trainingDetails, setTrainingDetails] = useState([
    { checked: false, startTime: "03 July 2022", endTime: "07 July 2022" },
    { checked: false, startTime: "03 July 2022", endTime: "07 July 2022" },
  ]);

  const isPassable = () => {
    return trainingDetails.map((details) => (details.checked === true ? 1 : 0)).reduce((x, y) => x + y) === trainingDetails.length;
  };

  const CheckBox = ({ toggle }) => {
    return (
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View
          style={{
            position: "relative",
            backgroundColor: "#f47c7c",
            height: 15,
            width: 15,
          }}
        >
          {toggle && (
            <Text
              style={{
                position: "absolute",
                fontSize: 18,
                top: -5,
                textAlign: "center",
                color: "black",
              }}
            >
              <Image style={{ width: 20, height: 20 }} source={{ uri: "https://i.imgur.com/kQgvKT7.png" }} />
            </Text>
          )}
        </View>
      </View>
    );
  };

  const setToggle = (index) => {
    const temp = [...trainingDetails];
    temp[index].checked = !temp[index].checked;
    setTrainingDetails(temp);
  };

  return (
    <View
      elevation={2}
      style={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowOffset: 50,
        paddingVertical: 20,
      }}
    >
      <Text style={{ backgroundColor: "#FFB5B5", height: 30, width: 330, borderRadius: 20, fontSize: 20, textAlign: "center" }}>
        Training Details
      </Text>
      <Text style={{ fontSize: 11 }}>Select/add up to 5 training periods that you would like to claim for</Text>

      {trainingDetails.map((details, index) => (
        <View
          key={index}
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            borderBottomWidth: 1,
            width: "100%",
            paddingVertical: 20,
            paddingHorizontal: 10,
          }}
        >
          <Pressable
            style={{ display: "flex", flexDirection: "row" }}
            onPress={() => {
              setToggle(index);
            }}
          >
            <CheckBox toggle={details.checked} />
            <View style={{ marginLeft: 10 }}>
              <Text>{`Start time: ${details.startTime}`}</Text>
              <Text> {`End time: ${details.endTime}`}</Text>
            </View>
          </Pressable>
          <TouchableOpacity>
            <Image style={{ width: 20, height: 20 }} source={{ uri: "https://i.imgur.com/egZH3ry.png" }} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={{ width: 20, height: 20 }} source={{ uri: "https://i.imgur.com/Q3ytxB6.png" }} />
          </TouchableOpacity>
        </View>
      ))}

      <View style={{ width: "100%", paddingHorizontal: 20, paddingTop: 10, display: "flex", justifyContent: "center" }}>
        <View style={{ margin: 2, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <View style={{ margin: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Training Start Date:</Text>
            <Text>Calendar</Text>
            {/* <CalendarComponent /> */}
          </View>
          <View style={{ margin: 2, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <Text>Training End Date:</Text>
            <Text>Calendar</Text>
          </View>
        </View>

        <View style={{ display: "flex", alignItems: "center", paddingTop: 10 }}>
          <TouchableOpacity style={{ backgroundColor: "#CCCCCC", width: 133, height: 26, borderRadius: 10 }}>
            <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 15, color: "white" }}>
              Add Training
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ display: "flex", alignItems: "flex-end", paddingTop: 20 }}>
          <TouchableOpacity
            style={{ backgroundColor: "#60AB83", width: 133, height: 35, borderRadius: 10 }}
            onPress={() => (isPassable() ? nextPage() : "")}
          >
            <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 15, color: "white" }}>
              Save & Continue
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
