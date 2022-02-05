import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import React from "react";

const RestaurantItem = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      <View style={{ marginTop: 7, padding: 15, backgroundColor: "white" }}>
        <RestaurantImage />
        <RestarauntInfo />
      </View>
    </TouchableOpacity>
  );
};

const RestaurantImage = () => (
  <>
    <Image
      source={{
        uri: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg",
      }}
      style={{ width: "100%", height: 180 }}
    />
    <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
      <MaterialCommunityIcons name="heart-outline" size={25} color="white" />
    </TouchableOpacity>
  </>
);

const RestarauntInfo = () => (
  <View
    style={{
      flexDirection: "row",
      justifyContent: "space-between",
      marginTop: 10,
    }}
  >
    <View>
      <Text style={{ fontSize: 15, fontWeight: "bold" }}>
        Formhouse Kitchen
      </Text>
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
      <Text>4.5</Text>
    </View>
  </View>
);

export default RestaurantItem;
