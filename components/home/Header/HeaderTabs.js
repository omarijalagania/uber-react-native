import { View, Text } from "react-native";
import React, { useState } from "react";
import HeaderButton from "./HeaderButton";
import { Divider } from "react-native-elements";

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <Divider width={1} />
    </View>
  );
};

export default HeaderTabs;
