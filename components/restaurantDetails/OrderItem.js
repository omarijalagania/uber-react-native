import { View, Text } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderRadius: 10,
        backgroundColor: "#0277bd",
        marginBottom: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16, color: "white" }}>
        {item.title}
      </Text>
      <Text style={{ opacity: 0.7, fontSize: 16, color: "white" }}>
        {item.price}
      </Text>
    </View>
  );
};

export default OrderItem;
