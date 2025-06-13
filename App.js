import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useState } from "react";

import WelcomeScreen from "./screens/WelcomeScreen.js";
import SignupScreen from "./screens/SignupScreen.js";

const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={() =>
          Font.loadAsync({
            "Poppins-Bold": require("./assets/fonts/Poppins/Poppins-Bold.ttf"),
            "Poppins-SemiBold": require("./assets/fonts/Poppins/Poppins-SemiBold.ttf"),
            "Poppins-Regular": require("./assets/fonts/Poppins/Poppins-Regular.ttf"),
            "Inter-Regular": require("./assets/fonts/Inter/static/Inter_18pt-Regular.ttf"),
            "Inter-SemiBold": require("./assets/fonts/Inter/static/Inter_18pt-SemiBold.ttf"),
            "PlusJakartaSans-Medium": require("./assets/fonts/Plus_Jakarta_Sans/static/PlusJakartaSans-Medium.ttf"),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
