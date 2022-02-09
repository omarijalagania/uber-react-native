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
import MenuItem from "../components/restaurantDetails/MenuItem";
import Icons from "../components/home/BottomTabs/Icons";
const OrderCopmleted = ({ navigation, route }) => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Salad with Chiken",
        description: "pleasent salad with chiken",
        price: "$14.30",
        _id: "620229a2aaaa729d188ab4ce",
      },
    ],
  });

  const clearCart = async () => {
    try {
      const request = await fetch(
        "https://restapi-mongo.onrender.com/api/uber/cart/delete/items",
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetch(
          "https://restapi-mongo.onrender.com/api/uber/cart/items"
        );
        const data = await response.json();
        let convData = Object.assign({}, data);
        let ob = { items: convData[0].items };
        setLastOrder(ob);
        clearCart();
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

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
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          Your order at {restaurantName} has been placed for ${totalUSD}
        </Text>
        <ScrollView>
          <MenuItem
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
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
