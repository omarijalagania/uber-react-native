import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React from "react";
import { TextInput } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import LoggedIn from "./LoggedIn";
import Loader from "../components/home/Loader/Loader";
import jwtDecode from "jwt-decode";
const Register = ({ navigation }) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.tokenReducer.token);
  //const [token, setToken] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [password2, setPassword2] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);

  if (token) {
    const decoded = jwtDecode(token);
    console.log(decoded._id);
  }

  const logInHandler = async () => {
    setIsLoading(name && email && password && password2 ? true : false);
    try {
      if (password !== password2) {
        alert("Passwords do not match");
        setIsLoading(false);
      }

      if (name && password && email) {
        const response = await fetch(
          "https://restapi-mongo.onrender.com/api/user/register",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              password: password,
            }),
          }
        );
        const responseData = await response.json();
        dispatch({ type: "SET_TOKEN", payload: responseData.token });
        setIsLoading(false);
        navigation.navigate("Account");
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={{ backgroundColor: "#0d47a1", flex: 1 }}>
      {!isLoading ? (
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
            Registration
          </Text>

          <>
            <TextInput
              onChangeText={(text) => setName(text)}
              placeholder="Name"
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
              onChangeText={(text) => setEmail(text)}
              placeholder="Email"
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
              onChangeText={(text) => setPassword(text)}
              placeholder="Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              style={{
                width: "70%",
                padding: 10,
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: "#0277bd",
              }}
            />
            <TextInput
              onChangeText={(text) => setPassword2(text)}
              placeholder="Repeat Password"
              placeholderTextColor="white"
              secureTextEntry={true}
              style={{
                width: "70%",
                padding: 10,
                borderRadius: 10,
                backgroundColor: "#0277bd",
              }}
            />
            <TouchableOpacity
              onPress={logInHandler}
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
            </TouchableOpacity>
          </>
        </SafeAreaView>
      ) : (
        <Loader />
      )}
    </View>
  );
};

export default Register;
