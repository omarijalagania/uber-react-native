import { View, Text } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 16 }}>{item.title}</Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{item.price}</Text>
    </View>
  );
};

export default OrderItem;
