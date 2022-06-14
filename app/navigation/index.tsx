/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from "react";
import { ColorSchemeName } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native";
import { MaterialCommunityIcons, FontAwesome } from "@expo/vector-icons";

import Colors from "../constants/Colors";
import ModalScreen from "../screens/ModalScreen";
import HomeScreen from "../screens/HomeScreen";
import AlertsScreen from "../screens/AlertsScreen";
import useColorScheme from "../hooks/useColorScheme";
import ProfileScreen from "../screens/ProfileScreen";
import NotFoundScreen from "../screens/NotFoundScreen";
import LinkingConfiguration from "./LinkingConfiguration";
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from "../types";
import WelcomeScreen from "../screens/WelcomeScreen";
import SingpassLoginScreen from "../screens/SingpassLoginScreen";
import ORNSScreen from "../screens/ORNSScreen";
import IpptHomeScreen from "../screens/ippt/IpptHomeScreen";
import ClaimScreen from "../screens/ClaimScreen";
import UserGoalsScreen from "../screens/ippt/UserGoalsScreen";
import WorkoutScreen from "../screens/ippt/WorkoutScreen";
import IpptBookingScreen from "../screens/ippt/IpptBookScreen";

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer linking={LinkingConfiguration} theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="SingpassLogin">
      <Stack.Screen name="ORNS" component={ORNSScreen} />
      <Stack.Screen name="Claim" component={ClaimScreen} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: "Oops!" }} />
      <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="UserGoalsScreen" component={UserGoalsScreen} options={{ title: "User Goals" }} />
      <Stack.Screen name="SingpassLogin" component={SingpassLoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="IpptHomeScreen" component={IpptHomeScreen} options={{ title: "IPPT / NS Fit" }} />
      <Stack.Screen name="WorkoutScreen" component={WorkoutScreen} options={{ title: "Join a workout group" }} />
      <Stack.Screen name="IpptBookingScreen" component={IpptBookingScreen} options={{ title: "Book IPPT / NS Fit" }} />

      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "",
          tabBarIcon: ({ color }) => <MCIcon name="home" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Alerts"
        component={AlertsScreen}
        options={{
          title: "Alerts",
          tabBarIcon: ({ color }) => <MCIcon name="bell-alert" color={color} />,
        }}
      />

      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={({ navigation }: RootTabScreenProps<"Profile">) => ({
          title: "Profile",
          tabBarIcon: ({ color }) => <FAIcon name="user-circle-o" color={color} />,
        })}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function MCIcon(props: { name: React.ComponentProps<typeof MaterialCommunityIcons>["name"]; color: string }) {
  return <MaterialCommunityIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

function FAIcon(props: { name: React.ComponentProps<typeof FontAwesome>["name"]; color: string }) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
