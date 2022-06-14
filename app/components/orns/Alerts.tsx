import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

interface Alerts {
  totalEventLen: number;
}

type CardData = {
  data: {
    code: string;
    reportingVenue: string;
    callUpDocument: string;
    start: string;
    end: string;
    attire: string;
    acknowledgedCode: string;
    notifiedOn: string;
  };
};

export default function Alert({ data }: CardData[]) {
  const [totalEvent, setTotalEvent] = useState(data.length);
  const events = [...data];

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
      <View style={{ ...styles.card, borderColor: totalEvent ? "#FF0000" : "transparent" }}>
        <View style={styles.alertTab}>
          <Text style={{ ...styles.textAlert, color: totalEvent ? "#FF0000" : "#FFA3A3" }}>{totalEvent}</Text>
          <Text
            style={{
              fontSize: 20,
              color: totalEvent ? "#FF0000" : "#FFA3A3",
              textAlign: "center",
            }}
          >
            Call-up(s) / Manning(s) to Acknowledge
          </Text>
        </View>
        {totalEvent ? (
          <View style={{ width: "100%", display: "flex", alignItems: "center" }}>
            {events.map((event, index) => (
              <View
                key={index}
                style={{
                  backgroundColor: "transparent",
                  display: totalEvent - 1 === index ? "flex" : "none",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <View
                  style={{
                    backgroundColor: "#FFB5B5",
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                    height: 30,
                    marginVertical: 10,
                    borderRadius: 20,
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      textAlignVertical: "center",
                      height: "100%",
                      width: "100%",
                      fontSize: 20,
                    }}
                  >
                    {event.code}
                  </Text>
                </View>

                <Text style={{ fontWeight: "bold" }}>{`Reporting Venue`}</Text>
                <Text>{`${event.reportingVenue}\n`}</Text>

                <View
                  style={{
                    backgroundColor: "transparent",
                    width: "80%",
                    paddingHorizontal: 20,
                  }}
                >
                  <Text>{`Call-up Document: ${event.callUpDocument}`}</Text>
                  <Text>{`Start: ${event.start}`}</Text>
                  <Text>{`End: ${event.end}`}</Text>
                  <Text>{`Attire: ${event.attire}\n`}</Text>
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#60AB83",
                    borderRadius: 20,
                    width: 168,
                    height: 38,
                  }}
                  onPress={() => {
                    if (totalEvent > 0) {
                      console.log(totalEvent);
                      setTotalEvent(totalEvent - 1);
                    }
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
                <Text style={{ fontSize: 10 }}>{`\nNotified On: ${event.notifiedOn}`}</Text>
              </View>
            ))}
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
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  card: {
    width: 356,
    margin: 10,
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: "#FFFAFA",
    display: "flex",
    alignSelf: "center",
    alignItems: "center",
    padding: 10,
  },
};
