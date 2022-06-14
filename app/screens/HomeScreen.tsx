import { RootTabScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import { StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from "react-native";

import nsLogo from "../assets/images/ns.png";
import ippt_image from "../assets/images/ippt.png";
import orns_image from "../assets/images/orns.png";
import claims_image from "../assets/images/claims.png";

interface Menu {
  title: String;
  image: String;
  href: String;
}

interface RenderMenuProps {
  menus: Menu[];
}

export default function HomeScreen({ navigation }: RootTabScreenProps<"Profile">) {
  const menuTiles: Menu[] = [
    { title: "IPPT / NS Fit", image: ippt_image, href: "IpptHomeScreen" },
    { title: "Claims", image: claims_image, href: "ClaimsPayment" },
    { title: "ORNS activities", image: orns_image, href: "ORNS" },
  ];

  const RenderMenu = ({ menus }: RenderMenuProps) => {
    return (
      <>
        {menus.map((m, index) => {
          const { image } = m;
          return (
            <TouchableOpacity key={index} onPress={() => navigation.navigate(m.href)} style={styles.image_container}>
              <ImageBackground source={image} style={styles.image_bg}>
                <Text style={styles.menu_title} key={index}>
                  {m.title}
                </Text>
              </ImageBackground>
            </TouchableOpacity>
          );
        })}
      </>
    );
  };

  return (
    <ScrollView>
      <View style={styles.header}>
        <Text style={styles.title} lightColor="#FA0606" darkColor="#000">
          Welcome, John Tan
        </Text>
        <Image style={styles.image} source={nsLogo} />
      </View>

      <RenderMenu menus={menuTiles} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image_container: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
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
  image_bg: {
    borderRadius: 15,
    width: "100%",
    height: 220,
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
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
