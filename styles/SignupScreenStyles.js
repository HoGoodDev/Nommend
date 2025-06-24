import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",     // center vertically
    alignItems: "center",         // center horizontally
    position: "relative",
    paddingHorizontal: 28,
  },

  contentWrapper: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },

  title: {
    fontSize: 36,
    fontFamily: "Poppins-Bold",
    color: "#6a6341", // Field Drab (Main Text)
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 1.5,
  },

  label: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#6a6341", // Field Drab
    marginBottom: 8,
    marginLeft: 2,
  },

  inputWrapper: {
    borderRadius: 25,
    backgroundColor: "#fefefe", // Default Base
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
    overflow: "hidden",
    marginBottom: 25,
  },

  input: {
    paddingVertical: 16,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#6a6341", // Field Drab
    fontFamily: "Inter-Regular",
  },

  button: {
    backgroundColor: "#fb686e", // Primary Accent
    paddingVertical: 16,
    borderRadius: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 10,
    marginTop: 15,
  },

  buttonText: {
    color: "#fefefe", // White
    fontSize: 17,
    fontFamily: "Inter-SemiBold",
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  loginContainer: {
    marginTop: 30,
    minWidth: 280,
    alignItems: "center",
  },

  loginText: {
    fontSize: 17,
    color: "#6a6341", // Field Drab
    fontFamily: "Inter-Regular",
  },

  loginLink: {
    color: "#e16851", // Burnt Sienna (Secondary Accent)
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: 18,
    fontWeight: "bold",
  },

  bigCircleRight: {
    position: "absolute",
    top: -250,
    right: -300,
    width: 780,
    height: 1050,
    borderRadius: 350,
    backgroundColor: "#f7fddd", // Light Yellow for Highlight Area
    zIndex: -1,
  },
});
