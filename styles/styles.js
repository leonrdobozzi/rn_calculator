import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2e2e2e",
    alignItems: "center",
    justifyContent: "center",
  },
  lightContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
  textInput: {
    color: "#fff",
    backgroundColor: "transparent",
    width: 280,
    height: 50,
    fontSize: 24,
    marginVertical: 50,
    padding: 10,
    borderBottomColor: "#656148",
    borderBottomWidth: 2,
  },
  textInputLight: {
    color: "#000",
    backgroundColor: "transparent",
    width: 280,
    height: 50,
    fontSize: 24,
    marginVertical: 50,
    padding: 10,
    borderBottomColor: "#656148",
    borderBottomWidth: 2,
  },
  buttonStyle: {
    backgroundColor: "#181818",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  lightButtonStyle: {
    backgroundColor: "#f0f0f5",
    width: 70,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  display: {
    fontSize: 48,
    color: "#fff",
    backgroundColor: "#656149",
    width: "100%",
    textAlign: "center",
  },
  textButton: {
    color: "#fff",
  },
  textButtonLight: {
    color: "#000",
  },
  textButtonOperacao: {
    color: "#fff",
    width: "100%",
    textAlign: "right",
    fontSize: 28,
    marginRight: 10,
  },
  textButtonOperacaoLight: {
    color: "#000",
    width: "100%",
    textAlign: "right",
    fontSize: 28,
    marginRight: 10,
  },
  sendButtonStyle: {
    backgroundColor: "#656149",
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  disabledSendButtonStyle: {
    backgroundColor: "#80808010",
    width: 200,
    height: 70,
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
  },
  darkModeButton: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    top: "10%",
  },
  darkModeText: {
    color: "#fff",
  },

  lightModeText: {
    color: "#000",
  },
});
