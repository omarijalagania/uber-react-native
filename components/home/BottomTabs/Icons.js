import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Icons = ({ name, text }) => (
  <TouchableOpacity>
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FontAwesome5
        name={name}
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Icons;
