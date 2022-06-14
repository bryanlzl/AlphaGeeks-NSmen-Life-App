import { RootStackScreenProps } from "../../types";
import { Text, View } from "../../components/Themed";
import { ScrollView, StyleSheet, TouchableOpacity, Image } from "react-native";
import graph from "../../assets/images/graph.png";
import calendar from "../../assets/images/calendar.png";
import workGroup from "../../assets/images/work_group.png";

export default function IpptHomeScreen({ navigation }: RootStackScreenProps<"IpptHomeScreen">) {
  const RenderIpptTiles = () => {
    const data = [
      { title: "Set Fitness Goals", description: "Go for Gold!", alerts: "2 active goals", image: graph, href: "UserGoalsScreen" },
      { title: "Workout in a group", description: "Join an exercise group!", alerts: "4 groups near you", image: workGroup, href: "Profile" },
      { title: "Book IPPT / NS Fit session", description: "Your window is closing!", alerts: "", image: calendar, href: "Profile" },
    ];

    return (
      <>
        {data.map((d, index) => {
          const { title, description, alerts, image, href } = d;

          return (
            <TouchableOpacity style={styles.ippt_tiles} key={index} onPress={() => navigation.navigate(href)}>
              <View style={{ backgroundColor: "#FFFEFE", width: 230 }}>
                <Text style={styles.ippt_tiles_title}>{title}</Text>
                <Text style={styles.ippt_tiles_desc}>{description}</Text>
                {alerts != "" && <Text style={styles.ippt_tiles_alert}>{alerts}</Text>}
              </View>

              <Image style={styles.image} source={image} />
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
  image: { width: 150, height: 150, paddingHorizontal: 10 },
  ippt_tiles: {
    flex: 1,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 10,
    height: 200,
    paddingHorizontal: 16,
    paddingVertical: 10,
    marginTop: 30,
    flexDirection: "row",
    backgroundColor: "#FFFEFE",
  },
  ippt_tiles_title: {
    fontSize: 35,
    fontWeight: "bold",
    width: 200,
    color: "black",
  },
  ippt_tiles_desc: {
    fontSize: 20,
    paddingTop: 10,
    color: "black",
  },
  ippt_tiles_alert: {
    color: "white",
    marginTop: 10,
    textAlign: "center",
    paddingVertical: 5,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "gray",
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
