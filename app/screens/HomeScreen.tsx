import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import { StyleSheet, Image, ScrollView, Button } from "react-native";

import nsLogo from "../assets/images/ns.png";

interface Menu {
    title: String;
    image: String;
    href: String;
}

interface RenderMenuProps {
    menus: Menu[];
}

const RenderMenu = ({ menus }: RenderMenuProps) => {
    return menus.map((m, index) => {
        return (
            <View style={styles.image_tile}>
                <Text style={styles.menu_title} key={index}>
                    {m.title}
                </Text>
            </View>
        );
    });
};

export default function HomeScreen({ navigation }: RootTabScreenProps<"Profile">) {
    const menuTiles: Menu[] = [
        { title: "IPPT / NS Fit", image: "", href: "" },
        { title: "Claims", image: "", href: "" },
        { title: "ORNS activities", image: "", href: "" },
    ];

    return (
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.title} lightColor="#FA0606" darkColor="#000">
                    Welcome, John Tan
                </Text>
                <Image style={styles.image} source={nsLogo} />
            </View>

            <RenderMenu menus={menuTiles} />

            <Button title="TEST" onPress={() => navigation.navigate("Profile")} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        height: 100,
        paddingHorizontal: 10,
        backgroundColor: "#FDE5E5",
        marginBottom: 20,
    },
    image: {
        width: 50,
        height: 50,
    },
    title: {
        width: 200,
        fontSize: 30,
        fontWeight: "bold",
    },
    image_tile: {
        borderWidth: 1,
        height: 200,
        marginBottom: 20,
        borderColor: "white",
    },
    menu_title: {
        backgroundColor: "grey",
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontSize: 20,
        fontWeight: "bold",
    },
});
