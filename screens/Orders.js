import { View, Text, ScrollView, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import MenuItem from "../components/restaurantDetails/MenuItem";
import BottomTabs from "../components/home/BottomTabs/BottomTabs";
import Loader from "../components/home/Loader/Loader";
const Orders = ({ navigation }) => {
  const [orders, setOrders] = useState([]);
  const [userId, setUserId] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const token = useSelector((state) => state.tokenReducer.token);
  //token
  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserId(decoded._id);
    }
  }, [token]);

  useEffect(() => {
    setIsLoading(true);
    const fetchOrders = async () => {
      try {
        const response = await fetch(
          `https://restapi-mongo.onrender.com/api/user/orders/${userId}`
        );
        const responseJson = await response.json();
        setOrders(responseJson);
        console.log(orders);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchOrders();
  }, [userId]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0d47a1" }}>
      <Text
        style={{
          marginTop: 30,
          fontSize: 22,
          fontWeight: "bold",
          alignSelf: "center",
          color: "white",
        }}
      >
        Orders History
      </Text>

      {!isLoading ? (
        <>
          <ScrollView style={{ marginHorizontal: 16 }}>
            <MenuItem hideCheckbox={true} foods={orders.items} />
          </ScrollView>
          <BottomTabs navigation={navigation} />
        </>
      ) : (
        <Loader />
      )}
    </SafeAreaView>
  );
};

export default Orders;
