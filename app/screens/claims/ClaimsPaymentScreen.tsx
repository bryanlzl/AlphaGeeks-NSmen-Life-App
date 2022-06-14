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
  chevron: { width: 26 / 2, height: 23 / 2, right: 0 },
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
    alignItems: "flex-end",
    paddingHorizontal: 20,
  },
});

export default function ClaimsPaymentScreen({ navigation }: RootStackScreenProps<"ClaimsPayment">) {
  return (
    <View style={{ backgroundColor: "#FFE9E9", height: "100%" }}>
      <View style={styles.container}>
        <TouchableOpacity
          elevation={5}
          style={{
            backgroundColor: "#D8D8D8",
            width: "50%",
            height: 58,
            borderRadius: 20,
            marginVertical: 20,
            borderColor: "#676767",
            borderWidth: 2,
          }}
          onPress={() => navigation.navigate("SubmitClaims")}
        >
          <Text
            style={{
              fontSize: 15,
              height: "100%",
              textAlign: "center",
              textAlignVertical: "center",
            }}
          >
            Submit self-employed claims
          </Text>
        </TouchableOpacity>
        <View
          elevation={5}
          style={{
            backgroundColor: "#FFFAFA",
            width: "100%",
            borderRadius: 20,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          }}
        >
          <View style={styles.filter}>
            <Text style={{ fontSize: 17, fontWeight: "bold" }}>FILTER BY</Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "transparent",
                width: "100%",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <Text style={{ width: 45 }}>From:</Text>
              <View style={styles.dropDown}>
                <Text style={{ textAlign: "center", textAlignVertical: "center", width: "80%" }}>YYYY</Text>
                <Image style={styles.chevron} source={{ uri: "https://i.imgur.com/HcspvOp.png" }} />
              </View>
              <View style={styles.dropDown}>
                <Text style={{ textAlign: "center", textAlignVertical: "center", width: "80%" }}>MMMM</Text>
                <Image style={styles.chevron} source={{ uri: "https://i.imgur.com/HcspvOp.png" }} />
              </View>
            </View>

            <View
              style={{
                display: "flex",
                flexDirection: "row",
                backgroundColor: "transparent",
                width: "100%",
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <Text style={{ width: 45 }}>To:</Text>
              <View style={styles.dropDown}>
                <Text style={{ textAlign: "center", textAlignVertical: "center", width: "80%" }}>YYYY</Text>
                <Image style={styles.chevron} source={{ uri: "https://i.imgur.com/HcspvOp.png" }} />
              </View>
              <View style={styles.dropDown}>
                <Text style={{ textAlign: "center", textAlignVertical: "center", width: "80%" }}>MMMM</Text>
                <Image style={styles.chevron} source={{ uri: "https://i.imgur.com/HcspvOp.png" }} />
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "#FFB5B5",
              width: 329,
              height: 30,
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                height: "100%",
                textAlign: "center",
                textAlignVertical: "center",
              }}
            >
              Payment History
            </Text>
          </View>

          <View
            style={{
              backgroundColor: "transparent",
              paddingVertical: 20,
              borderBottomWidth: 1,
            }}
          >
            <Text>{`IPPT (GIRO)\n`}</Text>
            <Text>Start time: 03 July 2021, 1642 hrs</Text>
            <Text>{`End time: 03 July 2021, 1800 hrs\n`}</Text>
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 329,
                height: 50,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <View style={{ backgroundColor: "transparent" }}>
                <Text>Service pay: S$19.76</Text>
                <Text>Make-up Pay: -</Text>
              </View>
              <Text>S$19.76</Text>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "transparent",
              paddingVertical: 20,
              borderBottomWidth: 1,
            }}
          >
            <Text>{`IPPT AWARD (GIRO)\n`}</Text>
            <Text>Start time: 03 July 2021, 1642 hrs</Text>
            <Text>{`End time: 03 July 2021, 1800 hrs\n`}</Text>
            <View
              style={{
                backgroundColor: "#D9D9D9",
                width: 329,
                height: 50,
                borderRadius: 10,
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                paddingHorizontal: 10,
                paddingVertical: 10,
              }}
            >
              <View style={{ backgroundColor: "transparent" }}>
                <Text>Service pay: -</Text>
                <Text>Make-up Pay: -</Text>
              </View>
              <Text>S$300.00</Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              width: "100%",
              padding: 20,
            }}
          >
            <Text style={{ textAlign: "center", fontSize: 17 }}> - No other transactions -</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
