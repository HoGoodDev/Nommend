import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7E7CE",
    justifyContent: "flex-end",
    alignItems: "stretch",
    position: "relative",
    paddingHorizontal: 0,
  },

  formContainer: {
    width: "100%",
    backgroundColor: "#F7E7CE",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    paddingVertical: 40,
    paddingHorizontal: 28,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 20,
    elevation: 12,
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#6E3C25", // Deep Espresso Brown
    marginBottom: 30,
    textAlign: "center",
    letterSpacing: 1.5,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#6E3C25",
    marginBottom: 8,
    marginLeft: 2,
  },

  inputWrapper: {
    borderRadius: 25,
    backgroundColor: "#fff",
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
    color: "#2D2D2D", // Charcoal Gray
  },

  button: {
    backgroundColor: "#E63946", // Warm Red
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
    color: "#fff",
    fontWeight: "700",
    fontSize: 20,
    letterSpacing: 1,
    textTransform: "uppercase",
  },

  loginContainer: {
    marginTop: 30,
    minWidth: 280,
    alignItems: "center",
  },

  loginText: {
    fontSize: 16,
    color: "#2D2D2D",
  },

  loginLink: {
    color: "#F28322",
    fontWeight: "600",
  },
});
