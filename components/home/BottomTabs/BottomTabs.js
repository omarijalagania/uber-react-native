import { View, Text } from "react-native";
import React from "react";
import Icons from "./Icons";
const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 10,
        marginHorizontal: 30,
        justifyContent: "space-between",
        borderTopWidth: 1,
        borderTopColor: "#e5e5e5",
        paddingTop: 3,
      }}
    >
      <Icons name="home" text="Home" />
      <Icons name="search" text="Search" />
      <Icons name="shopping-bag" text="Grocery" />
      <Icons name="receipt" text="Orders" />
      <Icons name="user" text="Account" />
    </View>
  );
};

export default BottomTabs;
