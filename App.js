import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";

import WelcomeScreen from "./screens/WelcomeScreen.js";
import SignupScreen from "./screens/SignupScreen.js";
import LoginScreen from "./screens/LoginScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={() =>
          Font.loadAsync({
            "League_Spartan": require("./assets/fonts/League_Spartan/static/LeagueSpartan-Bold.ttf"),
           "Quicksand": require("./assets/fonts/Quicksand/static/Quicksand-SemiBold.ttf"),
           "Nunito": require("./assets/fonts/Nunito/static/Nunito-Regular.ttf"),
           "Poppins": require("./assets/fonts/Poppins/Poppins-Medium.ttf"),
           "Raleway": require("./assets/fonts/Raleway/static/Raleway-LightItalic.ttf"),
          })
        }
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn}
      />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}