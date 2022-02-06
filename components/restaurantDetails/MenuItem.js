import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch } from "react-redux";
const goods = [
  {
    title: "Tendori Chiken",
    price: "$12.00",
    description: "Tendori Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Sala Chiken",
    price: "$14.00",
    description: "Salad Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Sala Chiken",
    price: "$11.20",
    description: "Salad Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Sala Chiken",
    price: "$13.50",
    description: "Salad Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Sala Chiken",
    price: "$7.30",
    description: "Salad Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Sala Chiken",
    price: "$16.3",
    description: "Salad Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Sala Chiken",
    price: "$22.02",
    description: "Salad Chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
];

const MenuItem = ({ restaurauntName }) => {
  const dispatch = useDispatch();
  //item select function
  const selectItem = (item, checkboxValue) => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...item,
        restaurauntName: restaurauntName,
        checkboxValue: checkboxValue,
      },
    });
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {goods.map((item, index) => (
        <View key={index}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              margin: 20,
            }}
          >
            <BouncyCheckbox
              iconStyle={{ borderColor: "lightgray", borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(item, checkboxValue)}
            />
            <FoodInfo
              title={item.title}
              description={item.description}
              price={item.price}
            />

            <FoodImage image={item.image} />
          </View>
          <Divider orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
};

const FoodInfo = ({ title, description, price }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={{ fontSize: 19, fontWeight: "bold" }}>{title}</Text>
    <Text>{description}</Text>
    <Text>{price}</Text>
  </View>
);

const FoodImage = ({ image }) => (
  <Image
    source={{ uri: image }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);

export default MenuItem;
