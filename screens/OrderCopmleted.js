import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import MenuItem from "../components/restaurantDetails/MenuItem";
import Icons from "../components/home/BottomTabs/Icons";

const OrderCopmleted = ({ navigation, route }) => {
  const [userId, setUserId] = useState("");
  const [lastOrder, setLastOrder] = useState([]);
  const token = useSelector((state) => state.tokenReducer.token);

  //token
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded._id);
    }
  }, [token]);

  //cart
  useEffect(() => {
    const getCartHabdler = async () => {
      try {
        const response = await fetch(
          `https://restapi-mongo.onrender.com/api/user/cart/${userId}`
        );
        const responseData = await response.json();
        setLastOrder(responseData);
      } catch (error) {
        console.log(error);
      }
    };
    getCartHabdler();
  }, [userId]);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  let totalUSD = (Math.round(total * 100) / 100).toFixed(2);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0d47a1" }}>
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("../assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={false}
        />
        {lastOrder ? (
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
            Your order at {restaurantName} has been placed for ${totalUSD}
          </Text>
        ) : (
          <>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              No order has been placed
            </Text>
          </>
        )}
        <ScrollView>
          {lastOrder ? (
            <MenuItem
              foods={lastOrder.items}
              hideCheckbox={true}
              marginLeft={10}
            />
          ) : (
            <></>
          )}
          <LottieView
            style={{ height: 330, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
        <View onTouchStart={() => navigation.navigate("Home")}>
          <Icons name="home" title="" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default OrderCopmleted;
