import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";
import { useDispatch, useSelector } from "react-redux";

const MenuItem = ({ restaurauntName, foods, hideCheckbox, marginLeft }) => {
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

  //on items refresh check mark stays on
  const isFoodCart = (food, cartItems) => {
    return Boolean(
      cartItems.filter((item) => item.title === food.title).length
    );
  };

  if (!foods) {
    return (
      <>
        <Text>Loading...</Text>
      </>
    );
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((item, index) => (
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
              {hideCheckbox ? (
                <></>
              ) : (
                <BouncyCheckbox
                  iconStyle={{
                    borderColor: "#ff8f00",
                    borderRadius: 0,
                  }}
                  fillColor="#ff8f00"
                  isChecked={isFoodCart(item, cartItems)}
                  onPress={(checkboxValue) => selectItem(item, checkboxValue)}
                />
              )}
            </View>
            <FoodInfo
              title={item.title}
              description={item.description}
              price={item.price}
            />

            <FoodImage
              image={item.image}
              marginLeft={marginLeft ? marginLeft : 0}
            />
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

const FoodImage = ({ image, marginLeft }) => (
  <Image
    source={{ uri: image }}
    style={{ width: 100, height: 100, borderRadius: 8, marginLeft: marginLeft }}
  />
);

export default MenuItem;
