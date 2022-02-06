import { View, Text } from "react-native";

import React from "react";
import About from "../components/restaurantDetails/About";
import MenuItem from "../components/restaurantDetails/MenuItem";
import ViewCart from "../components/restaurantDetails/ViewCart";
const RestaurantDetails = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <MenuItem restaurauntName={route.params.name} />
      <ViewCart navigation={navigation} restaurauntName={route.params.name} />
    </View>
  );
};

export default RestaurantDetails;
