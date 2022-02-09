import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";

const LogIn = () => {
  return (
    <View style={{ backgroundColor: "#0d47a1", flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          alignItems: "center",
          marginTop: 100,
          borderRadius: 10,
        }}
      >
        <Text
          style={{
            marginBottom: 20,
            alignSelf: "center",
            fontSize: 25,
            fontWeight: "bold",
            color: "white",
          }}
        >
          Login
        </Text>
        <TextInput
          placeholder="Login"
          placeholderTextColor="white"
          style={{
            width: "70%",
            padding: 10,
            borderRadius: 10,
            marginBottom: 20,
            backgroundColor: "#0277bd",
          }}
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="white"
          secureTextEntry={true}
          style={{
            width: "70%",
            padding: 10,
            borderRadius: 10,
            backgroundColor: "#0277bd",
          }}
        />
        <View
          style={{
            marginTop: 15,
            backgroundColor: "orange",
            width: 180,
            height: 40,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontSize: 16 }}>Submit</Text>
        </View>
        <View style={{ position: "absolute", bottom: 30 }}>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 18,

              color: "white",
            }}
          >
            Not Registered?
          </Text>

          <Text
            style={{
              marginTop: 10,
              alignSelf: "center",
              fontSize: 14,

              color: "white",
            }}
          >
            Registration
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default LogIn;
