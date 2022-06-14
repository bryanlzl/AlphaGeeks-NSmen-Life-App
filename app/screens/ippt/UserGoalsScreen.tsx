import { useState } from "react";
import { RootStackScreenProps } from "../../types";
import { Text, View } from "../../components/Themed";
import { ScrollView, StyleSheet, TextInput, Image, TouchableOpacity } from "react-native";
import stats from "../../assets/images/stats.png";
import gymLogo from "../../assets/images/gym.png";

export default function UserGoalsScreen({ navigation }: RootStackScreenProps<"UserGoalsScreen">) {
  const [text, onChangeText] = useState({ age: "", width: "", height: "" });
  const [number, onChangeNumber] = useState(null);

  const RenderWorkout = () => {
    const workout = [
      {
        title: "HIIT Burpees - Crunches - Leg Raise",
        days: "1-3 workouts / week",
        image: "",
        time: "02 - 24 July, 2022",
      },
      {
        title: "HIIT Burpees - Crunches - Leg Raise",
        days: "1-3 workouts / week",
        image: "",
        time: "02 - 24 July, 2022",
      },
    ];
    return (
      <>
        {workout.map((wk, index) => {
          const { title, days, time } = wk;
          return (
            <View key={index} style={styles.workout_tile}>
              <View style={styles.tile_container}>
                <Text style={{ fontSize: 15 }}>#{index + 1}</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>{title}</Text>
                <Text style={{ fontSize: 25 }}>-</Text>
              </View>

              <View style={styles.subtext}>
                <Image style={styles.image} source={gymLogo} />

                <View style={styles.subtext2}>
                  <Text style={{ textAlign: "right", fontSize: 25, fontWeight: "bold" }}>{days}</Text>
                  <Text style={{ textAlign: "right", fontSize: 20 }}>{time}</Text>
                </View>
              </View>
            </View>
          );
        })}
      </>
    );
  };

  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      <View style={styles.container}>
        <Text style={styles.title}>Set your IPPT station goals</Text>

        <View style={styles.input_container}>
          <Text>Age:</Text>
          <TextInput style={styles.input} onChangeText={(value) => onChangeText({ ...text, age: value })} placeholder="Enter age..." />
        </View>

        <View style={styles.input_container}>
          <Text>Height:</Text>
          <TextInput style={styles.input} onChangeText={(value) => onChangeText({ ...text, height: value })} placeholder="Enter height..." />
        </View>

        <View style={styles.input_container}>
          <Text>Weight:</Text>
          <TextInput style={styles.input} onChangeText={(value) => onChangeText({ ...text, width: value })} placeholder="Enter width..." />
        </View>

        <View style={styles.current_container}>
          <Text style={styles.current_text}>Your current:</Text>

          <View style={styles.stats_cont}>
            <View style={styles.data}>
              <Text>Push-up:</Text>
              <Text> 30 reps</Text>
            </View>

            <View style={styles.data}>
              <Text>Sit-up:</Text>
              <Text> 30 reps</Text>
            </View>

            <View style={styles.data}>
              <Text>2.4km:</Text>
              <Text> 13m 15s</Text>
            </View>
          </View>
        </View>

        <Image source={stats} style={styles.stats_image} />

        <View style={styles.current_container}>
          <Text style={styles.current_text}>Your fitness goals:</Text>

          <TouchableOpacity>
            <Text style={styles.add_custom_btn}>Add a custom workout goal +</Text>
          </TouchableOpacity>

          <View style={styles.fitness_container}>
            <RenderWorkout />
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingBottom: 25,
  },
  subtext2: {
    backgroundColor: "#FEE8E8",
    width: 250,
    flex: 1,
    justifyContent: "flex-end",
    paddingVertical: 20,
  },
  image: {
    width: 60,
    height: 60,
    marginVertical: 10,
  },
  subtext: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#FEE8E8",
  },
  tile_container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#FEE8E8",
    padding: 10,
  },
  workout_tile: {
    backgroundColor: "#FEE8E8",
    paddingHorizontal: 10,
    marginVertical: 12,
    marginHorizontal: 12,
    borderRadius: 10,
  },
  fitness_container: {
    backgroundColor: "#F99292",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
  },
  add_custom_btn: {
    fontSize: 20,
    marginTop: 10,
    width: 280,
    textAlign: "center",
    paddingVertical: 10,
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#FFC0C0",
  },
  stats_image: { height: 200, width: "100%", marginTop: 25 },
  data: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    flexDirection: "row",
    backgroundColor: "#FFC0C0",
  },
  stats_cont: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#FFC0C0",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  current_text: {
    fontSize: 25,
    marginTop: 25,
  },
  current_container: {
    flex: 1,
    paddingHorizontal: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width: 150,
    borderRadius: 10,
    marginLeft: 10,
    borderColor: "black",
  },
  input_container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 25,
    color: "black",
    textAlign: "center",
    paddingVertical: 25,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 15,
    backgroundColor: "#FFC0C0",
  },
});
