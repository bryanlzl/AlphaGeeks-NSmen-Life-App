import { StyleSheet } from "react-native";
import { RootTabScreenProps } from "../../types";
import { Text, View } from "../../components/Themed";

export default function IpptFitScreen({ navigation }: RootTabScreenProps<"Alerts">) {
    const ipptOption = [
        { title: "Set Fitness Goals", subtitle: "Go for Gold!", notification: "2 active goals", image: "" },
        { title: "Workout in a group", subtitle: "Join an exercise group", notification: "4 groups near you", image: "" },
        { title: "Book IPPT / NS Fit session", subtitle: "", notification: "Your window is closing!", image: "" },
    ];

    const RenderIPPTOption = () => {
        return ipptOption.map((ippt) => {});
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Alerts</Text>
            <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
});
