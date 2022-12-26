import { View, Text, Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import LinearGradient from "react-native-linear-gradient";
const BasicSkeleton = ({
  backgroundColor,
  loadingBackground,
  width,
  height,
  style,
  visible,
  duration,
}) => {
  const translateX = useRef(new Animated.Value(-width)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(translateX, {
        toValue: width,
        useNativeDriver: true,
        duration: duration,
      })
    ).start();
  }, [width]);

  if (!visible) return false;
  return (
    <View
      style={StyleSheet.flatten([
        {
          overflow: "hidden",
          width: width,
          height: height,
          backgroundColor: backgroundColor,
        },
        style,
      ])}
    >
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          transform: [{ translateX: translateX }],
        }}
      >
        <LinearGradient
          style={{ height: "100%", width: "100%" }}
          colors={loadingBackground}
          start={{ x: 1, y: 1 }}
        />
      </Animated.View>
    </View>
  );
};

export default BasicSkeleton;

BasicSkeleton.defaultProps = {
  height: 100,
  width: 100,
  visible: true,
  backgroundColor: "rgba(0,0,0,0.12)",
  loadingBackground: ["transparent", "rgba(0,0,0,0.05)", "transparent"],
  duration: 1000,
};
