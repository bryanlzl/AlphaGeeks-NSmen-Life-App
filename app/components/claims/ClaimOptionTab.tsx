import { useState } from "react";
import { View, Text, Pressable, TouchableOpacity, Image, TextInput } from "react-native";

const ITO = () => {
  const [choice, setChoice] = useState([false, false]);
  return (
    <View style={{ width: "90%", backgroundColor: "#EDEDED", borderRadius: 10, margin: 20, paddingHorizontal: 10, padding: 10 }}>
      <Text style={{ fontSize: 14, color: "#E00000", marginHorizontal: 5 }}>ACKNOWLEDGEMENT</Text>
      <Pressable
        style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: 6 }}
        onPress={() => {
          const temp = [...choice];
          temp[0] = !temp[0];
          setChoice(temp);
        }}
      >
        <CheckBox checked={choice[0]} />
        <Text style={{ fontSize: 12, color: "#E00000", marginLeft: 10 }}>I authorise MINDEF to obtain my income information from IRAS.</Text>
      </Pressable>
      <Pressable
        style={{ display: "flex", flexDirection: "row", alignItems: "center", margin: 6 }}
        onPress={() => {
          const temp = [...choice];
          temp[1] = !temp[1];
          setChoice(temp);
        }}
      >
        <CheckBox checked={choice[1]} />
        <Text style={{ fontSize: 12, color: "#E00000", marginLeft: 10 }}>
          I acknowledge that I will be required to refund any overpayment to MINDEF
        </Text>
      </Pressable>
    </View>
  );
};

const CheckBox = ({ checked }) => {
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
        {checked && (
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
    </Pressable>
  );
};

const Radio = ({ boolean }) => {
  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        width: 14,
        height: 14,
        margin: 5,
        borderRadius: 7,
      }}
    >
      <View style={{ width: "70%", height: "70%", borderRadius: 5, backgroundColor: boolean ? "black" : "transparent" }} />
    </View>
  );
};

const content = [
  {
    name: "Average Income Option",
    subtext: "",
    component: (
      <View style={{ width: "90%", backgroundColor: "#EDEDED", borderRadius: 10, paddingHorizontal: 15, paddingVertical: 5, margin: 20 }}>
        <Text style={{ fontSize: 14 }}>Preferred Claim Amount per Month</Text>
        <View
          style={{
            borderWidth: 1,
            borderRadius: 5,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            overflow: "hidden",
            width: "60%",
            backgroundColor: "white",
            marginVertical: 5,
          }}
        >
          <Text style={{ borderRightWidth: 1, textAlignVertical: "center", paddingHorizontal: 5, height: "100%" }}>S$</Text>
          <TextInput style={{ width: "92%", paddingHorizontal: 5 }} />
        </View>
      </View>
    ),
  },
  {
    name: "Income Tax Option",
    subtext: <Text style={{ fontSize: 10 }}>(Recommended for a more hassle-free claim experience)</Text>,
    component: <ITO />,
  },
];

export default function ClaimOptionTab({ popup, previousPage }) {
  const [select, setSelect] = useState(0);
  return (
    <View
      elevation={2}
      style={{
        backgroundColor: "white",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderTopLeftRadius: 20,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20,
        shadowOffset: 50,
        paddingVertical: 20,
      }}
    >
      <Text style={{ backgroundColor: "#FFB5B5", height: 30, width: 330, borderRadius: 20, fontSize: 20, textAlign: "center" }}>Claim Option</Text>

      <View style={{ width: "100%", paddingHorizontal: 20, paddingVertical: 10 }}>
        {content.map((con, index) => (
          <View
            key={index}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Pressable style={{ display: "flex", flexDirection: "row", alignItems: "center" }} onPress={() => setSelect(index)}>
              <Radio boolean={index === select} />
              <View>
                <Text>{con.name}</Text>
                {con.subtext ? <Text>{con.subtext}</Text> : <View />}
              </View>
            </Pressable>
          </View>
        ))}
      </View>

      {content.map((con, index) => index === select && <View key={index}>{con.component}</View>)}

      <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-end", width: "100%", paddingTop: 20, paddingHorizontal: 20 }}>
        <TouchableOpacity style={{ backgroundColor: "#A4A4A4", width: 80, height: 35, borderRadius: 10, marginHorizontal: 2 }} onPress={previousPage}>
          <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 15, color: "white" }}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ backgroundColor: "#60AB83", width: 133, height: 35, borderRadius: 10, marginHorizontal: 2 }} onPress={popup}>
          <Text style={{ width: "100%", height: "100%", textAlign: "center", textAlignVertical: "center", fontSize: 15, color: "white" }}>
            Save & Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
