import { View, Text } from "react-native";

import React from "react";
import About from "../components/restaurantDetails/About";
import MenuItem from "../components/restaurantDetails/MenuItem";
import ViewCart from "../components/restaurantDetails/ViewCart";

const foods = {
  items: [
    {
      title: "Tendori Chiken",
      price: "$12.20",
      description: "Tendori Chiken with rice",
      image:
        "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
    },
    {
      title: "Salad with Chiken",
      price: "$14.3",
      description: "pleasent salad with chiken",
      image: "https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg",
    },
    {
      title: "Vegetables with Fish",
      price: "$11.23",
      description: "fresh fish with vegetables",
      image:
        "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg",
    },
    {
      title: "Beef",
      price: "$13.22",
      description: "beef with potatoes",
      image:
        "https://images.pexels.com/photos/1410236/pexels-photo-1410236.jpeg",
    },
    {
      title: "Potatoes with Salad",
      price: "$12.52",
      description: "Salad with potatoes",
      image: "https://images.pexels.com/photos/671956/pexels-photo-671956.jpeg",
    },
    {
      title: "rice and ananas",
      price: "$23.57",
      description: "fresh ananas with rice",
      image:
        "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
    },
    {
      title: "Potatoes 22 with Salad",
      price: "$12.52",
      description: "Salad with potatoes",
      image:
        "https://images.pexels.com/photos/5562924/pexels-photo-5562924.jpeg",
    },
  ],
};

const RestaurantDetails = ({ route, navigation }) => {
  return (
    <View style={{ backgroundColor: "#0d47a1" }}>
      <About route={route} />
      <MenuItem restaurauntName={route.params.name} foods={foods.items} />
      <ViewCart navigation={navigation} restaurauntName={route.params.name} />
    </View>
  );
};

export default RestaurantDetails;
