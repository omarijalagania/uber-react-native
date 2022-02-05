import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(text)}
      style={{
        backgroundColor: activeTab === text ? "black" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "black",
          fontSize: 15,
          fontWeight: "bold",
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default HeaderButton;
