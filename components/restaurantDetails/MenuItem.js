import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";
const goods = [
  {
    title: "Tendori Chiken",
    price: "$12.20",
    description: "Tendori Chiken with rice",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Salad with Chiken",
    price: "$14.30",
    description: "pleasent salad with chiken",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Vegetables with Fish",
    price: "$11.23",
    description: "fresh fish with vegetables",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Beef",
    price: "$13.2",
    description: "beef with potatoes",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Potatoes with Salad",
    price: "$12.52",
    description: "Salad with potatoes",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "rice and ananas",
    price: "$23.57",
    description: "fresh ananas with rice",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "Potatoes 22 with Salad",
    price: "$12.52",
    description: "Salad with potatoes",
    image: "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
  },
  {
    title: "rice eee and ananas",
    price: "$23.53",
    description: "fresh ananas with rice",
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

  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  );

  console.log(cartItems);

  //on items refresh check mark stays on
  const isFoodCart = (food, cartItems) => {
    return Boolean(
      cartItems.filter((item) => item.title === food.title).length
    );
  };

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {goods.map((item, index) => (
        <View key={Math.random(3) * index}>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#0277bd",
              justifyContent: "space-around",
              alignItems: "center",
              borderRadius: 10,
              marginVertical: 20,
              marginHorizontal: 13,
            }}
          >
            <View style={{ marginLeft: 10 }}>
              <BouncyCheckbox
                iconStyle={{
                  borderColor: "#ff8f00",
                  borderRadius: 0,
                }}
                fillColor="#ff8f00"
                isChecked={isFoodCart(item, cartItems)}
                onPress={(checkboxValue) => selectItem(item, checkboxValue)}
              />
            </View>
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
    <Text style={{ fontSize: 19, fontWeight: "bold", color: "white" }}>
      {title}
    </Text>
    <Text style={{ color: "white" }}>{description}</Text>
    <Text style={{ color: "#ff8f00" }}>{price}</Text>
  </View>
);

const FoodImage = ({ image }) => (
  <Image
    source={{ uri: image }}
    style={{ width: 100, height: 100, borderRadius: 8 }}
  />
);

export default MenuItem;
