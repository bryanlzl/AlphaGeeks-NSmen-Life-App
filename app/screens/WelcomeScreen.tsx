import { StyleSheet, TouchableOpacity } from "react-native";
import { RootStackScreenProps } from "../types";
import { Text } from "../components/Themed";
import { View, Image, ImageBackground } from "react-native";

import LoginLayout from "../components/Layout/LoginLayout";

export default function WelcomeScreen({ navigation }: RootStackScreenProps<"Welcome">) {
  const loginOptions = [
    {
      title: "Singpass",
      uri: "https://i.imgur.com/WtJ9tk3.png",
      route: "SingpassLogin",
    },
  ];

  return (
    <LoginLayout>
      <View style={styles.container}>
        <ImageBackground style={styles.backgroundImage} source={require("../assets/welcomeBackground.png")}>
          <Text
            style={{
              width: "80%",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              color: "black",
              margin: 50,
              position: "absolute",
              top: 0,
            }}
          >
            NSMan Lifestyle
          </Text>

          <View
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "80%",
              height: 120,
            }}
          >
            {loginOptions.map((option, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate(option.route);
                }}
                style={styles.button}
              >
                <Image style={{ width: "100%", height: "100%" }} source={{ uri: option.uri }} />
              </TouchableOpacity>
            ))}
          </View>
        </ImageBackground>
      </View>
    </LoginLayout>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  button: {
    display: "flex",
    borderRadius: 10,
    width: "100%",
    height: 50,
    textAlignVertical: "center",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
