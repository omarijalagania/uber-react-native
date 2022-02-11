import { View, Text } from "react-native";
import React from "react";
import Icons from "./Icons";
import { useSelector } from "react-redux";
import { Divider } from "react-native-elements/dist/divider/Divider";

const BottomTabs = ({ navigation }) => {
  const token = useSelector((state) => state.tokenReducer.token);
  return (
    <>
      <Divider width={1} />
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          marginHorizontal: 30,
          justifyContent: "space-between",
        }}
      >
        <View onTouchStart={() => navigation.navigate("Home")}>
          <Icons name="home" text="Home" />
        </View>
        <Icons name="search" text="Search" />
        <View onTouchStart={() => navigation.navigate("Favorites")}>
          <Icons name="star" text="Favorites" />
        </View>
        <View
          onTouchStart={() => navigation.navigate(token ? "Orders" : "Account")}
        >
          <Icons name="receipt" text="Orders" />
        </View>
        <View onTouchStart={() => navigation.navigate("Account")}>
          <Icons name="user" text="Account" />
        </View>
      </View>
    </>
  );
};

export default BottomTabs;
