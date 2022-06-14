import { RootStackScreenProps } from "../../types";
import { Text, View } from "../../components/Themed";
import { ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";

export default function IpptHomeScreen({ navigation }: RootStackScreenProps<"IpptHomeScreen">) {
  const RenderIpptTiles = () => {
    const data = [
      { title: "Set Fitness Goals", description: "Go for Gold!", alerts: "2 active goals", image: "" },
      { title: "Workout in a group", description: "Join an exercise group!", alerts: "4 groups near you", image: "" },
      { title: "Book IPPT / NS Fit session", description: "Your window is closing!", alerts: "", image: "" },
    ];

    return (
      <>
        {data.map((d, index) => {
          const { title, description, alerts, image } = d;

          return (
            <TouchableOpacity style={styles.ippt_tiles} key={index}>
              <View>
                <Text style={styles.ippt_tiles_title}>{title}</Text>
                <Text style={styles.ippt_tiles_desc}>{description}</Text>
                {alerts != "" && <Text style={styles.ippt_tiles_alert}>{alerts}</Text>}
              </View>

              <Image
                style={{ width: 150 }}
                source={{
                  uri: "https://static.wikia.nocookie.net/wii/images/7/77/Pikachu_SSB4.jpg",
                }}
              />
            </TouchableOpacity>
          );
        })}
      </>
    );
  };

  return (
    <ScrollView>
      <RenderIpptTiles />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  ippt_tiles: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    height: 180,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 30,
    flexDirection: "row",
  },
  ippt_tiles_title: {
    fontSize: 35,
    fontWeight: "bold",
    width: 260,
  },
  ippt_tiles_desc: {
    fontSize: 20,
    paddingTop: 10,
  },
  ippt_tiles_alert: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "white",
    overflow: "hidden",
    width: 150,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
