import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React, { useState } from "react";

const RestaurantItem = ({ restaurantsData, navigation, userId }) => {
  const [isLoading, setIsLoading] = useState(true);

  const favoritesHandler = async (restaurant) => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://restapi-mongo.onrender.com/api/user/favorites/set/${userId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              title: restaurant?.title || restaurant?.name,
              image: restaurant.image_url,
              description: restaurant.name,
              price: "$12.99",
              id: restaurant.id,
            },
          ]),
        }
      );
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

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
            style={{ marginTop: 10, padding: 15, backgroundColor: "#0277bd" }}
          >
            <RestaurantImage
              userId={userId}
              favoritesHandler={favoritesHandler}
              imageUrl={restaurant.image_url}
              restaurant={restaurant}
            />
            <RestarauntInfo name={restaurant.name} rating={restaurant.rating} />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({
  imageUrl,
  restaurant,
  favoritesHandler,
  userId,
}) => (
  <>
    <Image
      source={{
        uri: imageUrl,
      }}
      style={{ width: "100%", height: 180, borderRadius: 10 }}
    />

    {userId ? (
      <TouchableOpacity
        onPress={() => favoritesHandler(restaurant)}
        style={{ position: "absolute", right: 20, top: 20 }}
      >
        <MaterialCommunityIcons name="heart-outline" size={27} color="white" />
      </TouchableOpacity>
    ) : (
      <></>
    )}
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
      <Text style={{ fontSize: 15, fontWeight: "bold", color: "white" }}>
        {name}
      </Text>
      <Text style={{ fontSize: 13, color: "gray", color: "white" }}>
        40-45 * min
      </Text>
    </View>
    <View
      style={{
        backgroundColor: "#ff8f00",
        width: 30,
        height: 30,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "white" }}>{rating}</Text>
    </View>
  </View>
);

export default RestaurantItem;
