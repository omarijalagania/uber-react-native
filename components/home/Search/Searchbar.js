import { View, Text } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import IonIcons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { GOOGLE_KEY } from "@env";
const Searchbar = ({ setCity }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: GOOGLE_KEY }}
        onPress={(data, details = null) => {
          let city = data.description.split(",")[0];
          setCity(city);
        }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#0277bd",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#0277bd",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
        renderLeftButton={() => (
          <View style={{ marginLeft: 10 }}>
            <IonIcons color="#ff8f00" name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginRight: 8,
              backgroundColor: "#0d47a1",
              padding: 9,
              borderRadius: 30,
            }}
          >
            <AntDesign
              name="clockcircle"
              color="#ff8f00"
              size={11}
              style={{ marginRight: 6 }}
            />
            <Text style={{ color: "white" }}>Search</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Searchbar;
