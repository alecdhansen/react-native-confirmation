import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modal: {
    backgroundColor: "rgba(0,0,0,0.2)",
    flex: 1,
    justifyContent: "flex-end",
  },
  topModalContainer: {
    marginHorizontal: 8,
    borderRadius: 12,
  },
  messageText: {
    textAlign: "center",
    marginHorizontal: 20,
    paddingVertical: 16,
    color: "rgb(150, 150, 150)",
    fontWeight: "700",
    fontSize: 13,
    lineHeight: 18,
  },
  divider: { borderBottomWidth: 0.5, transform: [{ scaleY: 0.5 }] },
  confirmText: {
    textAlign: "center",
    fontWeight: "500",
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
    fontWeight: "600",
    paddingVertical: 16,
    fontSize: 21,
  },
});
