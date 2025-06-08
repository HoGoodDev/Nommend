import React, { useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Animated, Easing } from "react-native";
import styles from "../styles/LoginScreenStyles";

export default function LoginScreen() {
  const titleAnim = useRef(new Animated.Value(0)).current;
  const sloganAnim = useRef(new Animated.Value(0)).current;
  const buttonAnim = useRef(new Animated.Value(0)).current;
  const signupAnim = useRef(new Animated.Value(0)).current;

  const pulseTopLeft = useRef(new Animated.Value(1)).current;
  const pulseBottomRight = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animate text elements
    Animated.sequence([
      Animated.delay(300),
      Animated.timing(titleAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(sloganAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(buttonAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
      Animated.timing(signupAnim, {
        toValue: 1,
        duration: 700,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }),
    ]).start();

    // Pulse animation for the circles
    const pulse = (anim) => {
      Animated.sequence([
        Animated.timing(anim, {
          toValue: 1.15, // slightly larger scale for more visible pulse
          duration: 400, // longer scale-up time
          easing: Easing.out(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(anim, {
          toValue: 1,
          duration: 800, // longer scale-down time
          easing: Easing.in(Easing.ease),
          useNativeDriver: true,
        }),
      ]).start();
    };

    pulse(pulseTopLeft);
    pulse(pulseBottomRight);
  }, []);

  const animatedStyle = (animValue) => ({
    opacity: animValue,
    transform: [
      {
        translateY: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [40, 0],
        }),
      },
      {
        scale: animValue.interpolate({
          inputRange: [0, 0.5, 1],
          outputRange: [0.8, 1.05, 1],
        }),
      },
    ],
  });

  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.circleTopLeft, { transform: [{ scale: pulseTopLeft }] }]}
      />
      <Animated.View
        style={[
          styles.circleBottomRight,
          { transform: [{ scale: pulseBottomRight }] },
        ]}
      />

      <View style={styles.contentContainer}>
        <Animated.View style={animatedStyle(titleAnim)}>
          <Text style={styles.title1}>Welcome To</Text>
          <Text style={styles.title}>
            Nommend
            <Text style={styles.period}>.</Text>
          </Text>
        </Animated.View>

        <Animated.View style={animatedStyle(sloganAnim)}>
          <Text style={styles.slogan}>Crave It. Nommend It.</Text>
        </Animated.View>

        <Animated.View style={animatedStyle(buttonAnim)}>
          <TouchableOpacity style={styles.loginButton} activeOpacity={0.7}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>
        </Animated.View>

        <Animated.View style={animatedStyle(signupAnim)}>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>
              Don’t have an account?{" "}
              <Text style={styles.signupLink}>Sign up</Text>
            </Text>
          </View>
        </Animated.View>
      </View>
    </View>
  );
}
