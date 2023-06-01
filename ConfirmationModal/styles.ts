import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0,0,0,0.4)",
    flex: 1,
    justifyContent: "flex-end",
  },
  topModalContainer: {
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "#302f2f",
  },
  areYouSureText: {
    textAlign: "center",
    paddingVertical: 16,
    color: "#b5aeae",
    fontWeight: "bold",
  },
  divider: { borderWidth: 0.5, borderColor: "#aba5a5" },
  deleteText: {
    textAlign: "center",
    color: "#ff2e2e",
    fontWeight: "bold",
    paddingVertical: 20,
    fontSize: 20,
  },
  cancelContainer: {
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "#474646",
    marginTop: 8,
    marginBottom: 32,
  },
  cancelText: {
    textAlign: "center",
    color: "#5193ef",
    fontWeight: "bold",
    paddingVertical: 20,
    fontSize: 20,
  },
});
