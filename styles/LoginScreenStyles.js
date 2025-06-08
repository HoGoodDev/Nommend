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
    backgroundColor: "#F7E7CE", // Creamy Beige
    justifyContent: "center",
    alignItems: "center",
  },
  circleTopLeft: {
    position: "absolute",
    top: -160,
    left: -160,
    width: 300,
    height: 300,
    borderRadius: 500,
    backgroundColor: "#FFC857", // Golden Mustard
  },
  circleBottomRight: {
    position: "absolute",
    bottom: -50,
    right: -90,
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#F28322", // Rich Orange
  },

  title1: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#6E3C25",

    textAlign: "center",
  },

  title: {
    fontSize: 65,
    fontWeight: "bold",
    color: "#6E3C25",
    marginBottom: 100,
    textAlign: "center",
    letterSpacing: 2,
  },

  period: {
    color: "#FFC857", // Golden Mustard
  },

  slogan: {
    fontSize: 24,
    color: "#2D2D2D", // Charcoal Gray
    marginTop: 15,
    textAlign: "center",
  },

  loginButton: {
    backgroundColor: "#E63946",
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
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },

  signupContainer: {
    marginTop: 20,
    minWidth: 280,
    alignItems: "center",
  },

  signupText: {
    fontSize: 16,
    color: "#2D2D2D",
  },

  signupLink: {
    color: "#F28322",
    fontWeight: "600",
  },
});
