import { Pressable, StyleSheet, TextInput } from "react-native";
import { RootStackScreenProps } from "../types";
import { Text, View } from "../components/Themed";
import { Image } from "react-native";
import { useState } from "react";
import CheckBoxTwo from "../components/CheckBoxTwo";
import LoginLayout from "../components/Layout/LoginLayout";

const SingpassLoginScreen = ({ navigation }: RootStackScreenProps<"SingpassLogin">) => {
  const [loginChoice, setLoginChoice] = useState(0);
  const loginOptions = ["QR Code", "Password"];

  const inputFields = [
    {
      placeholder: "User ID",
      uri: "https://i.imgur.com/HOZXgtY.png",
    },
    {
      placeholder: "Password",
      uri: "https://i.imgur.com/5t63APE.png",
    },
  ];

  return (
    <LoginLayout>
      <View style={styles.container}>
        <View
          style={{
            backgroundColor: "pink",
            borderRadius: 20,
            display: "flex",
            flexDirection: "row",
            height: 25,
            width: 200,
            margin: 40,
          }}
        >
          {loginOptions.map((option, index) => (
            <Pressable
              key={index}
              style={{
                backgroundColor: loginChoice === index ? "#C70606" : "transparent",
                borderRadius: loginChoice === index ? 10 : 0,
                width: "50%",
              }}
              onPress={() => setLoginChoice(index)}
            >
              <Text
                style={{
                  color: loginChoice === index ? "white" : "black",
                  paddingHorizontal: 5,
                  textAlign: "center",
                  textAlignVertical: "center",
                  height: "100%",
                }}
              >
                {option}
              </Text>
            </Pressable>
          ))}
        </View>

        {loginChoice ? (
          <View
            style={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              backgroundColor: "transparent",
            }}
          >
            <View style={{ width: "80%", backgroundColor: "transparent" }}>
              <View
                style={{
                  width: "100%",
                  backgroundColor: "transparent",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {inputFields.map((el, index) => (
                  <View key={index} style={styles.input}>
                    <Image style={styles.icons} source={{ uri: el.uri }} />
                    <TextInput style={{ width: "100%" }} placeholder={el.placeholder} />
                  </View>
                ))}
              </View>
              <CheckBoxTwo />
            </View>

            <Pressable
              onPress={() => {
                navigation.navigate("Root");
              }}
              style={{
                margin: 40,
                width: "100%",
                height: 48,
                backgroundColor: "#EF9F9F",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  textDecorationLine: "underline",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                Login with User ID
              </Text>
            </Pressable>
          </View>
        ) : (
          <Pressable onPress={() => navigation.navigate("Root")}>
            <Image
              style={{
                width: 300,
                height: 300,
                padding: 10,
              }}
              source={{ uri: "https://i.imgur.com/KHfdda2.png" }}
            />
          </Pressable>
        )}
      </View>
    </LoginLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  input: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
    width: "100%",
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: "#F1A7A6",
    paddingHorizontal: 10,
  },
});

export default SingpassLoginScreen;
