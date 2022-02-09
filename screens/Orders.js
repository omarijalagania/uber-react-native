import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React from "react";
import MenuItem from "../components/restaurantDetails/MenuItem";
import BottomTabs from "../components/home/BottomTabs/BottomTabs";
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
const Orders = ({ navigation }) => {
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
      <BottomTabs navigation={navigation} />
    </SafeAreaView>
  );
};

export default Orders;
