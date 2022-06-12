import { View, StyleSheet, Image, ImageBackground } from "react-native";

export type Props = { children?: JSX.Element };

export default function LoginLayout({ children }: Props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../assets/welcomeBackground.png")}
      >
        <Image style={styles.logo} source={require("../../assets/NSSG.svg")} />

        <View style={styles.children}>{children}</View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: { width: 167, height: 184 },
  backgroundImage: {
    // display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  children: {
    width: "100%",
    height: "60%",
    backgroundColor: "transparent",
  },
});
