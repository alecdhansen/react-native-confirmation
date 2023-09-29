import React, { useEffect, useState, Appearance } from "react";
import { View, Text, Modal, Animated, Pressable } from "react-native";
import { styles } from "./styles";
import { ConfirmationModalProps } from "./types";

const ConfirmationModal = ({
  isVisible,
  setIsVisible,
  onConfirm,
  secondaryOnConfirm,
  secondaryOnConfirmText = "Delete",
  message,
  onConfirmText = "Confirm",
  onConfirmTextColor = "rgb(227,	43,	44)",
  cancelText = "Cancel",
  cancelTextColor = "rgb(56,	124, 254)",
  colorScheme = "system",
}: ConfirmationModalProps) => {
  const [slideAnimation] = useState<Animated.Value>(new Animated.Value(0));

  const colors = {
    dark: {
      confirmContainer: "rgb(36, 35, 35)",
      confirmContainerPressed: "rgb(80, 80, 82)",
      cancelContainer: "rgb(50,	50,	52)",
      cancelContainerPressed: "rgb(80, 80, 82)",
      divider: "rgb(80, 80, 82)",
    },
    light: {
      confirmContainer: "rgb(230, 230, 230)",
      confirmContainerPressed: "rgb(205, 205, 205)",
      cancelContainer: "rgb(230, 230, 230)",
      cancelContainerPressed: "rgb(205, 205, 205)",
      divider: "rgb(205, 205, 205)",
    },
    system: {
      confirmContainer: Appearance.getColorScheme() === "dark" ? "rgb(36, 35, 35)" : "rgb(230, 230, 230)",
      confirmContainerPressed: Appearance.getColorScheme() === "dark" ? "rgb(80, 80, 82)" : "rgb(205, 205, 205)",
      cancelContainer: Appearance.getColorScheme() === "dark" ? "rgb(50,	50,	52)" : "rgb(255, 255, 255)",
      cancelContainerPressed: Appearance.getColorScheme() === "dark" ? "rgb(80, 80, 82)" : "rgb(205, 205, 205)",
      divider: Appearance.getColorScheme() === "dark" ? "rgb(80, 80, 82)" : "rgb(205, 205, 205)"
    },
  }

  useEffect(() => {
    if (isVisible) {
      Animated.timing(slideAnimation, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnimation, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  }, [isVisible, slideAnimation]);

  const animatedStyle = {
    transform: [
      {
        translateY: slideAnimation.interpolate({
          inputRange: [0, 1],
          outputRange: [300, 0],
        }),
      },
    ],
  };

  const handleConfirm = async () => {
    await onConfirm();
    setIsVisible(false);
  };

  const handleSecondaryConfirm = async () => {
    if (!secondaryOnConfirm) return;
    await secondaryOnConfirm();
    setIsVisible(false);
  };

  return (
    <Modal
      animationType="fade"
      visible={isVisible}
      transparent
      onRequestClose={() => setIsVisible(false)}
    >
      <View style={styles.modal}>
        <Animated.View style={animatedStyle}>
          <View style={[styles.topModalContainer, { backgroundColor: colors[colorScheme].confirmContainer }]}>
            {message && <Text style={styles.messageText}>{message}</Text>}
            <View style={[styles.divider, { borderBottomColor: colors[colorScheme].divider }]} />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? colors[colorScheme].confirmContainerPressed : colors[colorScheme].confirmContainer,
                },
                !secondaryOnConfirm && {
                  borderBottomLeftRadius: 12,
                  borderBottomRightRadius: 12,
                },
                !message && {
                  borderTopLeftRadius: 12,
                  borderTopRightRadius: 12,
                },
              ]}
              onPress={handleConfirm}>
              <Text style={[styles.confirmText, { color: onConfirmTextColor }]}>{onConfirmText}</Text>
            </Pressable>
            {secondaryOnConfirm && <>
              <View style={[styles.divider, { borderBottomColor: colors[colorScheme].divider }]} />
              <Pressable
                style={({ pressed }) => [
                  {
                    backgroundColor: pressed ? colors[colorScheme].confirmContainerPressed : colors[colorScheme].confirmContainer,
                  },
                  {
                    borderBottomLeftRadius: 12,
                    borderBottomRightRadius: 12,
                  },
                ]}
                onPress={handleSecondaryConfirm}>
                <Text style={[styles.confirmText, { color: onConfirmTextColor }]}>{secondaryOnConfirmText}</Text>
              </Pressable>
            </>}
          </View>
          <Pressable
            onPress={() => setIsVisible(false)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? colors[colorScheme].cancelContainerPressed : colors[colorScheme].cancelContainer,
              },
              styles.cancelContainer,
            ]}>
            <Text style={[styles.cancelText, { color: cancelTextColor }]}>{cancelText}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal >
  );
};
export default ConfirmationModal;
