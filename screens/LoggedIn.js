import { View, Text, SafeAreaView } from "react-native";
import React from "react";

import { useDispatch, useSelector } from "react-redux";

const LoggedIn = ({ token }) => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0d47a1",
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 20,
          fontWeight: "bold",
          marginBottom: 20,
        }}
      >
        Login Token :
      </Text>
      <Text style={{ paddingHorizontal: 20, color: "white" }}>{token}</Text>
      <View
        style={{
          marginTop: 20,
          backgroundColor: "orange",
          padding: 10,
          paddingHorizontal: 25,
          borderRadius: 10,
        }}
        onTouchStart={() => dispatch({ type: "SET_TOKEN", payload: "" })}
      >
        <Text>Log Out</Text>
      </View>
    </SafeAreaView>
  );
};

export default LoggedIn;
