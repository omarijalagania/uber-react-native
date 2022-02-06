import { View, Text } from "react-native";

import React from "react";
import About from "../components/restaurantDetails/About";
import MenuItem from "../components/restaurantDetails/MenuItem";
const RestaurantDetails = ({ route }) => {
  return (
    <View>
      <About route={route} />
      <MenuItem />
    </View>
  );
};

export default RestaurantDetails;
