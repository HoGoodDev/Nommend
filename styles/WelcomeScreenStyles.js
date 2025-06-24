import { StyleSheet } from "react-native";

export default StyleSheet.create({
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 20,
  },

  container: {
    flex: 1,
    backgroundColor: "#f9fbfa", // Seasalt
    justifyContent: "center",
    alignItems: "center",
  },

  circleTopLeft: {
    position: "absolute",
    top: -250,
    left: -250,
    width: 400,
    height: 400,
    borderRadius: 200,
    backgroundColor: "#f7fddd", // Light Yellow
  },

  circleBottomRight: {
    position: "absolute",
    bottom: -150,
    right: -150,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#e16851", // Burnt Sienna
  },

  title1: {
    fontSize: 36,
    fontFamily: "Poppins-Bold",
    color: "#6a6341", // Field Drab
    textAlign: "center",
  },

  title: {
    fontSize: 48,
    fontFamily: "Poppins-Bold",
    color: "#6a6341", // Field Drab
    marginBottom: 100,
    textAlign: "center",
    letterSpacing: 2,
  },

  period: {
    color: "#fb686e", // Light Red
  },

  slogan: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#6a6341", // Field Drab
    marginTop: 10,
    textAlign: "center",
  },

  loginButton: {
    backgroundColor: "#fb686e", // Light Red
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    minWidth: 250,
    alignItems: "center",
  },

  loginButtonText: {
    color: "#fefefe", // White
    fontSize: 16,
    fontFamily: "Inter-SemiBold",
  },

  signupContainer: {
    marginTop: 20,
    minWidth: 280,
    alignItems: "center",
  },

  signupText: {
    fontSize: 16,
    color: "#6a6341", // Field Drab
    fontFamily: "Inter-Regular",
  },

  signupLink: {
    color: "#e16851", // Burnt Sienna
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: 14,
  },
});
