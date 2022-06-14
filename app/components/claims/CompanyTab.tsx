import { View, Text, Pressable, TouchableOpacity, Image, TextInput } from "react-native";

const Chevron = () => (
  <View
    style={{
      position: "absolute",
      right: 0,
      margin: 2,
    }}
  >
    <Image
      style={{
        width: 26 / 2,
        height: 23 / 2,
      }}
      source={{ uri: "https://i.imgur.com/HcspvOp.png" }}
    />
  </View>
);
const CheckBox = () => {
  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
      // onPress={() => setToggle(!toggle)}
    >
      <View
        style={{
          position: "relative",
          backgroundColor: "#f47c7c",
          height: 15,
          width: 15,
        }}
      >
        {/* {toggle && ( */}
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
        {/* )} */}
      </View>
    </Pressable>
  );
};

export default function CompanyTab({ nextPage, previousPage }) {
  return (
    <View
      elevation={2}
      style={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderRadius: 20,
        shadowOffset: 50,
        paddingVertical: 20,
      }}
    >
      <Text style={{ backgroundColor: "#FFB5B5", height: 30, width: 330, borderRadius: 20, fontSize: 20, textAlign: "center" }}>Company Details</Text>
      <Text style={{ fontSize: 11, marginHorizontal: 20 }}>
        Please provide the details of the company you were working under during the training period
      </Text>
      <View style={{ width: "100%", padding: 20 }}>
        <View style={{ width: "100%" }}>
          <Text>Company Name:</Text>
          <TextInput style={{ borderWidth: 1, borderRadius: 5, paddingHorizontal: 5 }} />
        </View>
        <View style={{ width: "100%" }}>
          <Text>Occupation:</Text>
          <View
            style={{
              position: "relative",
              borderRadius: 5,
              borderWidth: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "flex-end",
            }}
          >
            <Text style={{ width: "100%", textAlign: "center", color: "#A4A4A4" }}>Please select</Text>
            <Chevron />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Text>Date of Commencement:</Text>

          <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            <View
              style={{
                position: "relative",
                borderRadius: 5,
                borderWidth: 1,
                width: 90,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ width: "100%", textAlign: "center", color: "#A4A4A4" }}>Date</Text>
              <Chevron />
            </View>
            <View
              style={{
                position: "relative",
                borderRadius: 5,
                borderWidth: 1,
                width: 90,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ width: "100%", textAlign: "center", color: "#A4A4A4" }}>Month</Text>
              <Chevron />
            </View>
            <View
              style={{
                position: "relative",
                borderRadius: 5,
                borderWidth: 1,
                width: 90,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-end",
              }}
            >
              <Text style={{ width: "100%", textAlign: "center", color: "#A4A4A4" }}>Year</Text>
              <Chevron />
            </View>
          </View>
        </View>
        <Text style={{ fontSize: 11, width: "100%" }}>Please ensure that all fields are filled before proceeding</Text>
      </View>

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%", paddingTop: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ backgroundColor: "#A4A4A4", width: 80, height: 35, borderRadius: 10, marginHorizontal: 2 }} onPress={previousPage}>
          <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 15, color: "white" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#60AB83", width: 133, height: 35, borderRadius: 10, marginHorizontal: 2 }} onPress={nextPage}>
          <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 15, color: "white" }}>
            Save & Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
