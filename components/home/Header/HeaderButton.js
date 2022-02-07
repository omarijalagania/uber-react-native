import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const HeaderButton = ({ text, activeTab, setActiveTab }) => {
  return (
    <TouchableOpacity
      onPress={() => setActiveTab(text)}
      style={{
        backgroundColor: activeTab === text ? "#ff8f00" : "white",
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30,
        marginHorizontal: 5,
      }}
    >
      <Text
        style={{
          color: activeTab === text ? "white" : "#ff8f00",
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
