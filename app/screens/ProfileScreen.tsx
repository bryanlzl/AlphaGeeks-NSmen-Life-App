import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import { StyleSheet, ScrollView, Image } from "react-native";

export default function ProfileScreen({ navigation }: RootTabScreenProps<"Profile">) {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My NS Booklet</Text>

      <View style={styles.profile_details}>
        <Text style={styles.profile_text}>3SG John Tan Xiao Qiang (S9996999X)</Text>
        <Text style={styles.profile_text}>Unit: 801st BATALLION, SINGAPORE INFANTRY REGIMENT</Text>
        <Text style={styles.profile_text}>Enlistment Date: 01 Apr 2019</Text>
        <Text style={styles.profile_text}>ORD / SCD: 02 Aug 2021</Text>
      </View>

      <View style={styles.profile_details}>
        <View style={styles.profile_component}>
          <Image style={styles.checkbox} source={{ uri: "https://i.imgur.com/kQgvKT7.png" }} />
          <Text style={styles.profile_text}>NS Attendance</Text>
        </View>

        <View style={styles.profile_component}>
          <Image style={styles.checkbox} source={{ uri: "https://i.imgur.com/kQgvKT7.png" }} />
          <Text style={styles.profile_text}>NSMen Payments / Claims</Text>
        </View>

        <View style={styles.profile_component}>
          <Image style={styles.checkbox} source={{ uri: "https://i.imgur.com/kQgvKT7.png" }} />
          <Text style={styles.profile_text}>IPPT Results</Text>
        </View>

        <View style={styles.profile_component}>
          <Text style={styles.checkbox}></Text>
          <Text style={styles.profile_text}>Overseas Trips</Text>
        </View>

        <View style={styles.profile_component}>
          <Image style={styles.checkbox} source={{ uri: "https://i.imgur.com/kQgvKT7.png" }} />
          <Text style={styles.profile_text}>Awards</Text>
        </View>
      </View>

      <View style={styles.profile_details}>
        <Text style={styles.attendance_title}>NS Attendance</Text>

        <View style={styles.attendance_container}>
          <Text style={styles.attendance_text}>Period</Text>
          <Text style={styles.attendance_text}>Activity</Text>
          <Text style={styles.attendance_text}>Days Attended</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
  },
  profile_component: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FFB5B5",
  },
  attendance_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#FFB5B5",
    borderBottomWidth: 1,
    paddingBottom: 10,
  },
  attendance_text: {
    fontSize: 20,
    color: "black",
  },
  title: {
    flex: 1,
    fontSize: 30,
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 20,
    color: "black",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "#FFB5B5",
  },
  attendance_title: {
    fontSize: 35,
    color: "black",
    paddingBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    marginRight: 10,
  },
  profile_text: {
    fontSize: 20,
    color: "black",
    paddingBottom: 20,
  },
  profile_details: {
    borderRadius: 10,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "#FFB5B5",
  },
});
