import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";

const LoggedIn = ({ token }) => {
  const [userName, setUserName] = React.useState("");

  useEffect(() => {
    if (token) {
      const decoded = jwtDecode(token);
      setUserName(decoded.name);
    }
  }, [token]);

  const dispatch = useDispatch();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: "#0d47a1",
        paddingTop: 100,
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
        Welcome!
      </Text>
      <Text style={{ paddingHorizontal: 20, color: "white" }}>{userName}</Text>
      <TouchableOpacity
        style={{
          marginTop: 20,
          backgroundColor: "orange",
          padding: 10,
          paddingHorizontal: 25,
          borderRadius: 10,
        }}
        onPress={() => dispatch({ type: "SET_TOKEN", payload: "" })}
      >
        <Text>Log Out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default LoggedIn;
