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
          WelcomeScreen: "welcome",
        },
      },
      SingpassLogin: {
        screens: {
          SingpassLoginScreen: "singpassLogin",
        },
      },
      UserIDLogin: {
        screens: {
          UserIDLoginScreen: "userIDLogin",
        },
      },
      Root: {
        screens: {
          Profile: {
            screens: {
              ProfileScreen: "profile",
            },
          },
          Alerts: {
            screens: {
              AlertsScreen: "alerts",
            },
          },
          Logout: {
            screens: {
              LogoutScreen: "logout",
            },
          },
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
