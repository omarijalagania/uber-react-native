import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const RestaurantItem = ({ restaurantsData, navigation }) => {
  return (
    <>
      {restaurantsData.map((restaurant) => (
        <TouchableOpacity
          key={restaurant.id}
          activeOpacity={1}
          style={{ marginBottom: 30 }}
          onPress={() =>
            navigation.navigate("RestaurantDetails", {
              name: restaurant.name,
              image: restaurant.image_url,
              rating: restaurant.rating,
              price: restaurant.price,
              reviews: restaurant.reviews_count,
              categories: restaurant.categories,
            })
          }
        >
          <View
            key={restaurant.id}
            style={{ marginTop: 7, padding: 15, backgroundColor: "white" }}
          >
            <RestaurantImage imageUrl={restaurant.image_url} />
            <RestarauntInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({ imageUrl }) => (
  <>
    <Image
      source={{
        uri: imageUrl,
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestarauntInfo = ({ name, rating }) => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>{name}</Text>
      <Text style={{ fontSize: 13, color: "gray" }}>40-45 * min</Text>
    </View>
    <View
      style={{
        backgroundColor: "#e6e6e6",
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{rating}</Text>
    </View>
  </View>
);

export default RestaurantItem;
