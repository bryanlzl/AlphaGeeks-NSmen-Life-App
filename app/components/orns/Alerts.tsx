import { View, Text, TouchableOpacity } from "react-native";

interface Alerts {
  totalEvent: number;
}

export default function Alert({ totalEvent }: Alerts) {
  const event = {
    "Reporting Venue": "Nee Soon Camp (RED ZONE)",
    "Call-up Document": "SAF100.pdf",
    Start: "Mon, 08 Aug 2023, 0730 hrs",
    End: "Tues, 16 Aug 2023, 2359 hrs",
    Attire: "No. 3 Dress",
    "Acknowledged Code": "N201230005",
    "Notified On": "01 Aug 2022",
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.alertTab}>
          <Text style={styles.textAlert}>{totalEvent}</Text>
          <Text
            style={{
              fontSize: 20,
              color: "red",
              textAlign: "center",
            }}
          >
            Call-up(s) / Manning(s) to Acknowledge
          </Text>
        </View>
        {totalEvent ? (
          <View
            style={{ width: "100%", display: "flex", alignItems: "center" }}
          >
            <View
              style={{
                height: 30,
                width: 331,
                backgroundColor: "#FFB5B5",
                borderRadius: 20,
                marginVertical: 10,
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                Call-Up: Annual ICT
              </Text>
            </View>
            <View>
              <View
                style={{
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  paddingVertical: 10,
                }}
              >
                <Text style={{ fontWeight: "bold" }}>{`Reporting Venue`}</Text>
                <Text>{event["Reporting Venue"]}</Text>

                <View
                  style={{
                    backgroundColor: "transparent",
                    width: "100%",
                    paddingVertical: 10,
                    padding: 20,
                  }}
                >
                  <Text>{`Call-up Document: ${event["Call-up Document"]}`}</Text>
                  <Text>{`Start: ${event["Start"]}`}</Text>
                  <Text>{`End: ${event["End"]}`}</Text>
                  <Text>{`Attire: ${event["Attire"]}`}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#60AB83",
                    borderRadius: 20,
                    width: 168,
                    height: 38,
                  }}
                >
                  <Text
                    style={{
                      width: "100%",
                      height: "100%",
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontSize: 20,
                      color: "white",
                    }}
                  >
                    Acknowledge
                  </Text>
                </TouchableOpacity>
                <Text
                  style={{ fontSize: 10, margin: 10 }}
                >{`Notified On: ${event["Notified On"]}`}</Text>
              </View>
            </View>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
}

const styles = {
  textAlert: {
    fontSize: 48,
    color: "red",
    paddingHorizontal: 10,
  },
  alertTab: {
    height: 86,
    width: 331,
    backgroundColor: "#EBEBEB",
    borderRadius: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    width: "100%",
    height: 600,
    alignItems: "center",
    justifyContent: "flex-end",
  },
  card: {
    width: 356,
    margin: 10,
    borderWidth: 3,
    borderColor: "red",
    borderRadius: 20,
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    padding: 5,
  },
};
