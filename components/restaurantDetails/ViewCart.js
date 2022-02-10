import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../home/Loader/Loader";

const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const token = useSelector((state) => state.tokenReducer.token);
  //clear cart after checkout soon
  const dispatch = useDispatch();

  const clearSelectedItems = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        items: [],
        restaurauntName: "",
        checkboxValue: false,
      },
    });
  };

  const sentToMongoDB = async () => {
    setIsLoading(true);
    clearSelectedItems();
    try {
      setModalVisible(false);
      const request = await fetch(
        "https://restapi-mongo.onrender.com/api/uber/cart",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: items.map((item) => {
              const obj = {
                title: item.title,
                description: item.description,
                price: item.price,
                image: item.image,
              };

              return obj;
            }),
            restaurantName: restaurantName,
          }),
        }
      );

      setTimeout(() => {
        setIsLoading(false);
        navigation.navigate("OrderCompleted");
      }, 2500);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const modalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>
          {items.map((item, index) => (
            <OrderItem key={index} item={item} />
          ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text style={{ color: "white" }}>${totalUSD}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "#ff8f00",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => sentToMongoDB()}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top: 17,
                }}
              >
                {total ? totalUSD : ""}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  //remove dollar sign from price
  let total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  let totalUSD = (Math.round(total * 100) / 100).toFixed(2);

  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {modalContent(navigation)}
      </Modal>
      {total && !isLoading ? (
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            position: "absolute",
            bottom: total.length > 4 ? 30 : "30%",
            zIndex: 999,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                token ? setModalVisible(true) : navigation.navigate("Account")
              }
              style={{
                marginTop: 20,
                flexDirection: "row",
                justifyContent: "flex-end",
                padding: 15,
                backgroundColor: "#ff8f00",
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
            >
              <Text style={{ color: "black", fontSize: 20, marginRight: 40 }}>
                View Cart
              </Text>
              <Text style={{ color: "black", fontSize: 20 }}>${totalUSD}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <></>
      )}
      {isLoading ? <Loader /> : <></>}
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalCheckoutContainer: {
    backgroundColor: "#0d47a1",
    padding: 16,
    height: 600,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
    color: "white",
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
    color: "white",
  },
});
