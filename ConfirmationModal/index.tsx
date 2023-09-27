import React, { useEffect, useState } from "react";
import { View, Text, Modal, TouchableOpacity, Animated } from "react-native";
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
  confirmButtonActiveOpacity,
  cancelButtonActiveOpacity,
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
            <TouchableOpacity
              activeOpacity={confirmButtonActiveOpacity || 0.5}
              onPress={handleConfirm}>
              <Text style={[styles.confirmText, { color: confirmTextColor || "#ff2e2e" }]}>{confirmText || "Confirm"}</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={() => setIsVisible(false)}
            activeOpacity={cancelButtonActiveOpacity || 0.7}
            style={styles.cancelContainer}>
            <Text style={[styles.cancelText, { color: cancelTextColor || "#5193ef", }]}>{cancelText || "Cancel"}</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    </Modal>
  );
};
export default ConfirmationModal;
