import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { YALP_KEY } from "@env";
import Categories from "../components/Categories/Categories";
import HeaderTabs from "../components/Header/HeaderTabs";
import RestaurantItem from "../components/Restaurant/RestaurantItem";
import Searchbar from "../components/Search/Searchbar";

const Home = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("georgia");
  const [activeTab, setActiveTab] = useState("Delivery");
  //Get restaurantsData from API
  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch(
          `https://api.yelp.com/v3/businesses/search?term=food&location=${city}&limit=10`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${YALP_KEY}`,
            },
          }
        );
        const json = await response.json();
        setRestaurants(
          json.businesses.filter((businesses) =>
            businesses.transactions.includes(activeTab.toLowerCase())
          )
        );
      } catch (error) {
        console.log(error);
      }
    };
    getRestaurants();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
      <View style={{ backgroundColor: "white", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantsData={restaurants} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
