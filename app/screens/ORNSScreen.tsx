import { View } from "../components/Themed";
import { RootStackScreenProps, RootTabScreenProps } from "../types";
import { ImageBackground, StyleSheet, Text, Image, Pressable, LayoutAnimation, ScrollView } from "react-native";
import { useState } from "react";
import Alert from "../components/orns/Alerts";

type CardData = {
  code: string;
  reportingVenue: string;
  callUpDocument: string;
  start: string;
  end: string;
  attire: string;
  acknowledgedCode: string;
  notifiedOn: string;
};

interface CardProps {
  info: { title: string; abbr: string; event: CardData[] };
  rotate: boolean;
}

const Card = ({ info, rotate }: CardProps) => {
  const NotificationCard = ({ data }: CardData[]) => {
    return (
      <View
        style={{
          backgroundColor: "transparent",
          paddingTop: rotate ? 30 : 0,
          height: rotate ? undefined : 0,
          paddingVertical: 10,
          display: "flex",
          justifyContent: "space-between",
          overflow: "hidden",
        }}
      >
        {data.map((event: any, index: any) => (
          <View
            key={index}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
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
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textAlignVertical: "center",
                  height: "100%",
                  width: "100%",
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
                width: "100%",
                paddingHorizontal: 20,
              }}
            >
              <Text>{`Call-up Document: ${event.callUpDocument}`}</Text>
              <Text>{`Start: ${event.start}`}</Text>
              <Text>{`End: ${event.end}`}</Text>
              <Text>{`Attire: ${event.attire}`}</Text>
              <Text>{`Acknowledged Code: ${event.acknowledgedCode}`}</Text>
            </View>
            <Text style={{ fontSize: 10 }}>{`\nNotified On: ${event.notifiedOn}`}</Text>
          </View>
        ))}
      </View>
    );
  };

  return (
    <View
      style={{
        backgroundColor: "transparent",
        width: "90%",
        display: "flex",
        paddingTop: 90,
        marginVertical: 5,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFE9E9",
          borderWidth: 4,
          borderColor: rotate ? "#000000" : "rgba(158, 150, 150, .5)",
          borderRadius: 20,
          width: "100%",
          height: 115,
          position: "absolute",
          overflow: "hidden",
          padding: 5,
          zIndex: 2,
        }}
      >
        <ImageBackground
          style={{
            borderRadius: 15,
            width: "100%",
            height: "100%",
            overflow: "hidden",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          source={require("../assets/welcomeBackground.png")}
        >
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              width: "88%",
              backgroundColor: "transparent",
              padding: 10,
            }}
          >
            <Text style={{ color: "black", fontSize: 35 }}>{info.title}</Text>
            <View
              style={{
                backgroundColor: "transparent",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  display: "flex",
                  justifyContent: "center",
                  color: "black",
                  fontSize: 35,
                }}
              >
                {info.abbr && "(" + info.abbr + ")"}
              </Text>
              {info.event.length ? (
                <View
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "transparent",
                  }}
                >
                  <Text
                    style={{
                      borderRadius: 20,
                      backgroundColor: "#FFFEFE",
                      width: 102,
                      height: 36,
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontSize: 20,
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    {info.event.length} event(s)
                  </Text>
                </View>
              ) : (
                <View />
              )}
            </View>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "transparent",
              padding: 10,
            }}
          >
            <Image
              style={{
                width: 26,
                height: 23,
                transform: [{ rotate: rotate ? "180deg" : "0deg" }],
              }}
              source={{ uri: "https://i.imgur.com/HcspvOp.png" }}
            />
          </View>
        </ImageBackground>
      </View>
      {info.event.length ? (
        <View
          elevation={rotate ? 2 : 0}
          style={{
            width: "100%",
            backgroundColor: "transparent",
            alignSelf: "flex-start",
            shadowColor: "#000000",
            borderBottomLeftRadius: 15,
            borderBottomRightRadius: 15,
            paddingBottom: 10,
            overflow: "hidden",
          }}
        >
          <NotificationCard data={info.event} title={info.title} />
        </View>
      ) : (
        <View />
      )}
    </View>
  );
};

export default function ORNSScreen({ navigation }: RootStackScreenProps<"ORNS">) {
  const cards = [
    {
      title: "In-Camp Training",
      abbr: "ICT",
      event: [
        {
          code: "ICT: High Key",
          "Reporting Venue": "MANDAI HILL CAMP",
          "Call-up Document": "-",
          Start: "Mon, 01 Aug 2023, 0730 hrs",
          End: "Sun, 14 Aug 2023, 2359 hrs",
          Attire: "No 4 Dress",
          "Acknowledged Code": "N201230005",
          "Notified On": "21 July 2022",
        },
        {
          code: "ICT: Low Key",
          "Reporting Venue": "TEKONG",
          "Call-up Document": "-",
          Start: "Mon, 01 Aug 2023, 0730 hrs",
          End: "Sun, 14 Aug 2023, 2359 hrs",
          Attire: "No 4 Dress",
          "Acknowledged Code": "N201230005",
          "Notified On": "21 July 2022",
        },
      ],
    },
    {
      title: "Manning",
      abbr: "",
      event: [
        {
          code: "Manning: Ops Manning",
          "Reporting Venue": "KHATIB CAMP",
          "Call-up Document": "-",
          Start: "Mon, 01 Aug 2023, 0730 hrs",
          End: "Sun, 14 Aug 2023, 2359 hrs",
          Attire: "No 4 Dress",
          "Acknowledged Code": "N201230005",
          "Notified On": "21 July 2022",
        },
      ],
    },
  ];

  const [select, setSelected] = useState(-1);

  const totalEvent = cards.map((card) => card.event.length).reduce((x, y) => x + y);

  return (
    <ScrollView style={{ backgroundColor: "#FFE9E9", height: "100%" }}>
      <View style={styles.container}>
        {cards.map((info, index) => (
          <Pressable
            key={index}
            style={{ width: "100%", display: "flex", alignItems: "center" }}
            onPress={() => {
              LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
              index === select ? setSelected(-1) : setSelected(index);
            }}
          >
            <Card info={info} rotate={select === index} />
          </Pressable>
        ))}
        <Alert totalEvent={totalEvent} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    display: "flex",
    alignItems: "center",
  },
});
