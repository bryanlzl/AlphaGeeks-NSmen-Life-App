import { View } from "../../components/Themed";
import { RootStackScreenProps } from "../../types";
import { ImageBackground, StyleSheet, Text, Image, Pressable, LayoutAnimation, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import ClaimOptionTab from "../../components/claims/ClaimOptionTab";
import CompanyTab from "../../components/claims/CompanyTab";
import Training from "../../components/claims/TrainingTab";
import Navigation from "../../navigation";

const styles = StyleSheet.create({
  dropDown: { backgroundColor: "white", width: 119 },
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
    paddingHorizontal: 20,
  },
});

export default function SubmitClaimsScreen({ navigation }: RootStackScreenProps<"SubmitClaims">) {
  const [select, setSelect] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const nextPage = () => {
    setSelect(select + 1);
  };

  const previousPage = () => {
    setSelect(select - 1);
  };

  const popup = () => {
    setShowModal(true);
  };

  const tabs = [
    { name: "Training", component: <Training nextPage={nextPage} /> },
    { name: "Company", component: <CompanyTab nextPage={nextPage} previousPage={previousPage} /> },
    { name: "Claim Option", component: <ClaimOptionTab previousPage={previousPage} popup={popup} /> },
  ];

  const Modal = () => {
    return (
      <View
        style={{
          backgroundColor: "black",
          opacity: 0.8,
          width: "100%",
          height: "100%",
          position: "absolute",
          zIndex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View style={{ width: "80%", borderWidth: 1, backgroundColor: "white", borderRadius: 10, padding: 20 }}>
          <Text style={{ textAlign: "center" }}>
            Your claim has been successfully submitted and the transaction reference number will be sent to your mobile phone via a text
          </Text>
          <TouchableOpacity
            style={{ borderWidth: 1, padding: 5, marginVertical: 20, borderRadius: 5, backgroundColor: "lightBlue" }}
            onPress={() => {
              setShowModal(false);
              navigation.navigate("ClaimsPayment");
            }}
          >
            <Text style={{ textAlign: "center" }}>Back to payment history</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{ backgroundColor: "#FFE9E9", width: "100%", height: "100%", paddingVertical: 50 }}>
      {showModal && <Modal />}
      <View style={styles.container}>
        <View style={{ backgroundColor: "transparent", width: "100%", display: "flex", flexDirection: "column" }}>
          <View style={{ backgroundColor: "transparent", display: "flex", flexDirection: "row" }}>
            {tabs.map((tab, index) => (
              <Pressable
                key={index}
                style={{
                  backgroundColor: select === index ? "white" : "transparent",
                  width: "33.33%",
                  height: 40,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
                }}
                onPress={() => setSelect(index)}
              >
                <Text style={{ textAlign: "center", textAlignVertical: "center", height: "100%", fontWeight: select === index ? "bold" : "" }}>
                  {tab.name}
                </Text>
              </Pressable>
            ))}
          </View>
          <View style={{ backgroundColor: "transparent", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
            {tabs.map((tab, index) => (
              <View
                key={index}
                style={{
                  display: select === index ? "flex" : "none",
                  backgroundColor: "transparent",
                  width: "100%",
                  flexDirection: "column",
                }}
              >
                {tab.component}
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}
