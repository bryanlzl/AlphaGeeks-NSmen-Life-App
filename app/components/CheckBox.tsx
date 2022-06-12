import { useState } from "react";
import { Pressable, Image } from "react-native";
import { Text, View } from "./Themed";

const CheckBox = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Pressable
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
      }}
      onPress={() => setToggle(!toggle)}
    >
      <View
        style={{
          position: "relative",
          backgroundColor: "#f47c7c",
          height: 15,
          width: 15,
        }}
      >
        {toggle && (
          <Text
            style={{
              position: "absolute",
              fontSize: 18,
              top: -5,
              textAlign: "center",
              color: "black",
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              source={{ uri: "https://i.imgur.com/kQgvKT7.png" }}
            />
          </Text>
        )}
      </View>

      <Text style={{ marginLeft: 5, color: "black" }}>Remember me?</Text>
    </Pressable>
  );
};

export default CheckBox;
