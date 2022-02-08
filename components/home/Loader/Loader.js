import { View, Text } from "react-native";
import React from "react";
import LottieView from "lottie-react-native";

const Loader = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "black",
        position: "absolute",
        opacity: 0.6,
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
      }}
    >
      <LottieView
        style={{ height: 250 }}
        source={require("../../../assets/animations/scanner.json")}
        autoPlay
        speed={3}
      />
    </View>
  );
};

export default Loader;
