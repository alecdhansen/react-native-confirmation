import React, { useEffect, useState } from "react";
import { View, Text, Modal, Animated, Pressable } from "react-native";
import { styles } from "./styles";
import { ConfirmationModalProps } from "./types";

const ConfirmationModal = ({
  isVisible,
  setIsVisible,
  onConfirm,
  message,
  confirmText,
  cancelText,
  confirmTextColor,
  cancelTextColor,
}: ConfirmationModalProps) => {
  const [slideAnimation] = useState<Animated.Value>(new Animated.Value(0));

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

  return (
    <Modal
      animated
      animationType="fade"
      visible={isVisible}
      transparent
      onRequestClose={() => setIsVisible(false)}>
      <View style={styles.modal}>
        <Animated.View style={animatedStyle}>
          <View style={styles.topModalContainer}>
            <Text style={styles.areYouSureText}>{message}</Text>
            <View style={styles.divider} />
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "rgb(53, 53, 57)" : "rgb(30,	30,	32)",
                },
                styles.confirmContainer,
              ]}
              onPress={handleConfirm}>
              <Text style={[styles.confirmText, { color: confirmTextColor || "rgb(247,	43,	44)" }]}>{confirmText || "Confirm"}</Text>
            </Pressable>
          </View>
          <Pressable
            onPress={() => setIsVisible(false)}
            style={({ pressed }) => [
              {
                backgroundColor: pressed ? "rgb(53, 53, 57)" : "rgb(36,	36,	38)",
              },
              styles.cancelContainer,
            ]}>
            <Text style={[styles.cancelText, { color: cancelTextColor || "rgb(56,	124,	254)", }]}>{cancelText || "Cancel"}</Text>
          </Pressable>
        </Animated.View>
      </View>
    </Modal>
  );
};
export default ConfirmationModal;
