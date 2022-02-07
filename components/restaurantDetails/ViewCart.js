import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import React, { useState } from "react";
import OrderItem from "./OrderItem";
import { useSelector } from "react-redux";
const ViewCart = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

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
            <Text>{totalUSD}</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => {
                setModalVisible(false);
              }}
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

  let totalUSD = total.toLocaleString("en", {
    style: "currency",
    currency: "USD",
  });

  return (
    <>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        {modalContent()}
      </Modal>
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
              onPress={() => setModalVisible(true)}
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

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 600,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
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
  },
});
