import { View } from "../components/Themed";
import { RootTabScreenProps } from "../types";
import {
  ImageBackground,
  StyleSheet,
  Text,
  Image,
  Pressable,
  LayoutAnimation,
} from "react-native";
import { useState } from "react";
import Alert from "../components/orns/Alerts";

type CardData = {
  "Reporting Venue": string;
  "Call-up Document": string;
  Start: string;
  End: string;
  Attire: string;
  "Acknowledged Code": string;
  "Notified On": string;
};

const keys = [
  "Reporting Venue",
  "Call-up Document",
  "Start",
  "End",
  "Attire",
  "Acknowledged Code",
  "Notified On",
];

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
          padding: 10,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {data.map((event, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "transparent",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{`Reporting Venue`}</Text>
            <Text>{event["Reporting Venue"]}</Text>

            <View
              style={{
                backgroundColor: "transparent",
                width: "100%",
                paddingHorizontal: 20,
              }}
            >
              <Text>{`Call-up Document: ${event["Call-up Document"]}`}</Text>
              <Text>{`Start: ${event["Start"]}`}</Text>
              <Text>{`End: ${event["End"]}`}</Text>
              <Text>{`Attire: ${event["Attire"]}`}</Text>
              <Text>{`Acknowledged Code: ${event["Acknowledged Code"]}`}</Text>
            </View>
            <Text
              style={{ fontSize: 10 }}
            >{`\nNotified On: ${event["Notified On"]}`}</Text>
            <View
              style={
                index < data.length - 1 && data.length > 1
                  ? {
                      borderWidth: 1,
                      borderColor: "grey",
                      width: "90%",
                      marginVertical: 20,
                    }
                  : {}
              }
            />
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
                      backgroundColor: "white",
                      width: 102,
                      height: 36,
                      textAlign: "center",
                      textAlignVertical: "center",
                      fontSize: 20,
                      color: "red",
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

export default function ORNSScreen({ navigation }: RootTabScreenProps<"ORNS">) {
  const cards = [
    {
      title: "In-Camp Training",
      abbr: "ICT",
      event: [
        {
          "Reporting Venue": "To be confirmed upon activation",
          "Call-up Document": "-",
          Start: "Mon, 01 Aug 2023, 0730 hrs",
          End: "Sun, 14 Aug 2023, 2359 hrs",
          Attire: "No 4 Dress",
          "Acknowledged Code": "N201230005",
          "Notified On": "21 July 2022",
        },
        {
          "Reporting Venue": "To be confirmed upon activation",
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
          "Reporting Venue": "To be confirmed upon activation",
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

  const totalEvent = cards
    .map((card) => card.event.length)
    .reduce((x, y) => x + y);

  return (
    <View style={styles.container}>
      {cards.map((info, index) => (
        <Pressable
          style={{ width: "100%", display: "flex", alignItems: "center" }}
          onPress={() => {
            LayoutAnimation.configureNext(
              LayoutAnimation.Presets.easeInEaseOut
            );
            index === select ? setSelected(-1) : setSelected(index);
          }}
        >
          <Card key={index} info={info} rotate={select === index} />
        </Pressable>
      ))}
      <Alert totalEvent={totalEvent} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
  },
});
