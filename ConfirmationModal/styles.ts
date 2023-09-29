import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0,0,0,0.3)",
    flex: 1,
    justifyContent: "flex-end",
  },
  topModalContainer: {
    marginHorizontal: 8,
    borderRadius: 12,
    backgroundColor: "rgb(30,	30,	32)",
  },
  areYouSureText: {
    textAlign: "center",
    paddingVertical: 16,
    color: "#b5aeae",
    fontWeight: "600",
  },
  divider: { borderBottomWidth: 0.5, borderColor: "#aba5a5", transform: [{ scaleY: 0.5 }] },
  confirmContainer: {
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  confirmText: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 16,
    fontSize: 21,
  },
  cancelContainer: {
    marginHorizontal: 8,
    borderRadius: 12,
    marginTop: 8,
    marginBottom: 32,
  },
  cancelText: {
    textAlign: "center",
    fontWeight: "bold",
    paddingVertical: 16,
    fontSize: 21,
  },
});
