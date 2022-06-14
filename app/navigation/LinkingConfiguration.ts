/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import * as Linking from "expo-linking";
import { RootStackParamList } from "../types";
import { LinkingOptions } from "@react-navigation/native";

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl("/")],
  config: {
    screens: {
      Welcome: {
        screens: {
          Root: {
            screens: {
              Home: {
                screens: {
                  HomeScreen: "home",
                },
              },
              Alerts: {
                screens: {
                  AlertsScreen: "alerts",
                },
              },
              Profile: {
                screens: {
                  ProfileScreen: "profile",
                },
              },
            },
          },
          Modal: "modal",
          NotFound: "*",
          WelcomeScreen: "welcome",
        },
      },
      SingpassLogin: {
        screens: {
          SingpassLoginScreen: "singpassLogin",
        },
      },
      ORNS: {
        screens: {
          ORNSSCreen: "orns",
        },
      },
    },
  },
};

export default linking;
