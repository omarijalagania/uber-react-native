import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import MenuItem from "../components/restaurantDetails/MenuItem";
const foods = {
  items: [
    {
      title: "Salad with Chiken",
      description: "pleasent salad with chiken",
      price: "$14.30",
      image:
        "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
    },
  ],
};
const Orders = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0d47a1" }}>
      <Text
        style={{
          marginTop: 30,
          fontSize: 22,
          fontWeight: "bold",
          alignSelf: "center",
          color: "white",
        }}
      >
        Orders History
      </Text>
      <ScrollView style={{ marginHorizontal: 16 }}>
        <MenuItem hideCheckbox={true} foods={foods.items} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
