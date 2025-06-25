import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    fontFamily: "League_Spartan", // App Name
    color: "#6a6341",
    marginBottom: 20,
    textAlign: "center",
    letterSpacing: 1.5,
  },

  label: {
    fontSize: 24,
    fontFamily: "Quicksand", // Section Titles
    color: "#6a6341",
    marginBottom: 8,
    marginLeft: 2,
  },

  inputWrapper: {
    borderRadius: 25,
    backgroundColor: "#fefefe",
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
    color: "#6a6341",
    fontFamily: "Nunito", // Body text
  },

  button: {
    backgroundColor: "#fb686e",
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
    color: "#fefefe",
    fontSize: 17,
    fontFamily: "Poppins", // Buttons
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
    color: "#6a6341",
    fontFamily: "Nunito", // Body text
  },

  loginLink: {
    color: "#e16851",
    fontFamily: "Raleway", // Captions
    fontSize: 18,
    fontStyle: "italic",
  },

  bigCircleRight: {
    position: "absolute",
    top: -250,
    right: -300,
    width: 780,
    height: 1100,
    borderRadius: 400,
    backgroundColor: "#f7fddd",
    zIndex: -1,
  },
});
