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
    fontSize: 36, // App Title / Logo
    fontFamily: "Poppins-Bold",
    color: "#6E3C25",
    marginBottom: 15,
    textAlign: "center",
    letterSpacing: 1.5,
  },

  label: {
    fontSize: 24, // Section Headings
    fontFamily: "Poppins-SemiBold",
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
    fontSize: 18, // Body Paragraphs
    color: "#2D2D2D",
    fontFamily: "Inter-Regular",
  },

  button: {
    backgroundColor: "#E63946",
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
    fontSize: 17, // Button Text
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
    fontSize: 17, // Body Paragraphs
    color: "#2D2D2D",
    fontFamily: "Inter-Regular",
  },

  loginLink: {
    color: "#F28322",
    fontFamily: "PlusJakartaSans-Medium", // Filters / Tags
    fontSize: 18,
    fontWeight: "bold",
  },
});
