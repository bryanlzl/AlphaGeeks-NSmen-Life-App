import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import { StyleSheet } from "react-native";

export default function ProfileScreen({ navigation }: RootTabScreenProps<"Profile">) {
    return (
        <View>
            <Text>Home</Text>
        </View>
    );
}

const styles = StyleSheet.create({});
