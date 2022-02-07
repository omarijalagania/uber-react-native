import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { useSelector } from "react-redux";
const ViewCart = ({ navigation, restaurauntName }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const item = useSelector((state) => state.cartReducer.selectedItems.items);

  //remove dollar sign from price
  let total = item
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((a, b) => a + b, 0);

  let totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      {total ? (
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
    </>
  );
};

export default ViewCart;
