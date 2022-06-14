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

      ORNS: {
        screens: {
          ORNSSCreen: "orns",
        },
      },

      UserGoalsScreen: {
        screens: {
          UserGoalsScreen: "usergoals",
        },
      },

      Claim: {
        screens: {
          ClaimsPaymentScreen: "claimsPayment",
        },
      },

      IpptBookingScreen: {
        screens: {
          IpptBookingScreen: "ipptBooking",
        },
      },

      WorkoutScreen: {
        screens: {
          WorkoutScreen: "workout",
        },
      },

      SubmitClaims: {
        screens: {
          SubmitClaimsScreen: "submitClaims",
        },
      },
      Modal: "modal",
      NotFound: "*",
    },
  },
};

export default linking;
