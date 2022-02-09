import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import MenuItem from "../components/restaurantDetails/MenuItem";
import Icons from "../components/home/BottomTabs/Icons";
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

const Favorites = () => {
  return (
    <View style={{ backgroundColor: "#0d47a1", flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            marginBottom: 20,
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Favorites
        </Text>

        <ScrollView style={{ marginHorizontal: 16 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Icons name="trash" />
            <MenuItem foods={foods.items} hideCheckbox />
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Favorites;
