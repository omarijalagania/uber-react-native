import { View, Text } from "react-native";
import React from "react";
import Icons from "./Icons";
import { Divider } from "react-native-elements/dist/divider/Divider";

const BottomTabs = ({ navigation }) => {
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
        <Icons name="home" text="Home" />
        <Icons name="search" text="Search" />
        <Icons name="shopping-bag" text="Grocery" />
        <View onTouchStart={() => navigation.navigate("Orders")}>
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
