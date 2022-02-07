import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { YALP_KEY } from "@env";
import Categories from "../components/home/Categories/Categories";
import HeaderTabs from "../components/home/Header/HeaderTabs";
import RestaurantItem from "../components/home/Restaurant/RestaurantItem";
import Searchbar from "../components/home/Search/Searchbar";
import BottomTabs from "../components/home/BottomTabs/BottomTabs";
const Home = ({ navigation }) => {
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

  //0d47a1   - -dark blue

  //#ff8f00  -- orange

  //0277bd = light blue

  return (
    <SafeAreaView style={{ backgroundColor: "#0d47a1", flex: 1 }}>
      <View style={{ backgroundColor: "#0d47a1", padding: 10 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <Searchbar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItem restaurantsData={restaurants} navigation={navigation} />
      </ScrollView>

      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
