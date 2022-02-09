import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { YALP_KEY } from "@env";
import Categories from "../components/home/Categories/Categories";
import HeaderTabs from "../components/home/Header/HeaderTabs";
import RestaurantItem from "../components/home/Restaurant/RestaurantItem";
import Searchbar from "../components/home/Search/Searchbar";
import BottomTabs from "../components/home/BottomTabs/BottomTabs";
import Loader from "../components/home/Loader/Loader";
const Home = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [city, setCity] = useState("georgia");
  const [activeTab, setActiveTab] = useState("Delivery");
  const [isLoading, setIsLoading] = useState(false);
  //Get restaurantsData from API
  useEffect(() => {
    const getRestaurants = async () => {
      setIsLoading(true);
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
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
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
      {isLoading ? (
        <Loader />
      ) : (
        <ScrollView
          navigation={navigation}
          showsVerticalScrollIndicator={false}
        >
          <Categories />
          <RestaurantItem
            navigation={navigation}
            restaurantsData={restaurants}
          />
        </ScrollView>
      )}

      {!isLoading ? <BottomTabs navigation={navigation} /> : <></>}
    </SafeAreaView>
  );
};

export default Home;
