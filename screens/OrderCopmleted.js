import { View, Text, SafeAreaView, ScrollView } from "react-native";
import LottieView from "lottie-react-native";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import MenuItem from "../components/restaurantDetails/MenuItem";
const OrderCopmleted = () => {
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

  useEffect(() => {
    const getCart = async () => {
      try {
        const response = await fetch(
          "https://restapi-mongo.onrender.com/api/uber/cart/items"
        );
        const data = await response.json();
        let convData = Object.assign({}, data);
        let ob = { items: convData[0].items };
        console.log(convData);

        setLastOrder(ob);
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);

  console.log(lastOrder);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}
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
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItem
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={{ height: 200, alignSelf: "center" }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default OrderCopmleted;
