import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import MenuItem from "../components/restaurantDetails/MenuItem";
const foods = {
  items: [
    {
      title: "Salad with Chiken",
      description: "pleasent salad with chiken",
      price: "$14.30",
      _id: "620229a2aaaa729d188ab4ce",
    },
  ],
};
const Orders = () => {
  return (
    <SafeAreaView>
      <Text>Orders History</Text>
      <ScrollView>
        <MenuItem foods={foods.items} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Orders;
