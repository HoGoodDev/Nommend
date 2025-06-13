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
    backgroundColor: "#F7E7CE",
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
    backgroundColor: "#FFC857",
  },
  circleBottomRight: {
    position: "absolute",
    bottom: -150,
    right: -150,
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: "#F28322",
  },
  title1: {
    fontSize: 36,
    fontFamily: "Poppins-Bold",
    color: "#6E3C25",
    textAlign: "center",
  },

  title: {
    fontSize: 48,
    fontFamily: "Poppins-Bold",
    color: "#6E3C25",
    marginBottom: 100,
    textAlign: "center",
    letterSpacing: 2,
  },

  period: {
    color: "#FFC857",
  },

  slogan: {
    fontSize: 24,
    fontFamily: "Poppins-SemiBold",
    color: "#2D2D2D",
    marginTop: 10,
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
    color: "#2D2D2D",
    fontFamily: "Inter-Regular",
  },

  signupLink: {
    color: "#F28322",
    fontFamily: "PlusJakartaSans-Medium",
    fontSize: 14,
  },
});
