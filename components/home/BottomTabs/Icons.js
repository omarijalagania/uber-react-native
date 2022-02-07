import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
const Icons = ({ name, text }) => (
  <TouchableOpacity>
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <FontAwesome5
        name={name}
        color="#ff8f00"
        size={25}
        style={{ marginBottom: 3, alignSelf: "center" }}
      />
      <Text style={{ color: "white" }}>{text}</Text>
    </View>
  </TouchableOpacity>
);

export default Icons;
