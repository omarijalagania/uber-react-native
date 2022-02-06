import { View, Text } from "react-native";

import React from "react";
import About from "../components/restaurantDetails/About";
import MenuItem from "../components/restaurantDetails/MenuItem";
const RestaurantDetails = () => {
  return (
    <View>
      <About />
      <MenuItem />
    </View>
  );
};

export default RestaurantDetails;
