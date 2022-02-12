import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import MenuItem from "../components/restaurantDetails/MenuItem";
import Icons from "../components/home/BottomTabs/Icons";

import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

const Favorites = () => {
  const [favoritesRes, setFavoritesRes] = useState([]);
  const [userId, setUserId] = useState("");
  const token = useSelector((state) => state.tokenReducer.token);

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded._id);
    }
  }, [token]);

  useEffect(() => {
    const getFavorites = async () => {
      try {
        const response = await fetch(
          `https://restapi-mongo.onrender.com/api/user/favorites/${userId}`
        );
        const responseJson = await response.json();
        setFavoritesRes(responseJson);
      } catch (error) {
        console.log(error);
      }
    };
    getFavorites();
  }, [userId]);

  return (
    <View style={{ backgroundColor: "#0d47a1", flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            marginBottom: 20,
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Favorites
        </Text>

        <ScrollView style={{ marginHorizontal: 16 }}>
          <MenuItem foods={favoritesRes.items} hideCheckbox removeBtn={true} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Favorites;
