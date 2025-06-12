import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#F7E7CE", // Creamy Beige
  },
  formContainer: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 36,
    borderTopRightRadius: 36,
    paddingVertical: 40,
    paddingHorizontal: 28,
    width: "100%",
    maxWidth: 420,
    minHeight: 520,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -8 },
    shadowOpacity: 0.12,
    shadowRadius: 18,
    elevation: 12,
    marginTop: 0,
    marginBottom: 0,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
    color: "#6E3C25", // Deep Espresso Brown
    letterSpacing: 1.2,
  },
  label: {
    fontSize: 15,
    color: "#6E3C25", // Deep Espresso Brown
    marginBottom: 6,
    marginLeft: 2,
    fontWeight: "500",
    letterSpacing: 0.2,
  },
  input: {
    borderWidth: 0,
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    fontSize: 17,
    backgroundColor: "#F7E7CE", // Creamy Beige
    color: "#2D2D2D", // Charcoal Gray
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 2,
  },
  button: {
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
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 20,
    letterSpacing: 0.8,
    textTransform: "uppercase",
  },
  secondaryButton: {
    backgroundColor: "#F28322", // Rich Orange
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 18,
  },
  secondaryButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    letterSpacing: 0.5,
  },
  accent: {
    color: "#FFC857", // Golden Mustard
  },
  divider: {
    height: 2,
    backgroundColor: "#F7E7CE", // Creamy Beige
    marginVertical: 18,
    borderRadius: 2,
    width: "30%",
    alignSelf: "center",
    opacity: 0.7,
  },
  bodyText: {
    color: "#2D2D2D", // Charcoal Gray
    fontSize: 16,
  },
});
