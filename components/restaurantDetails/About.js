import { View, Text, Image } from "react-native";
import React from "react";

const About = () => {
  const image =
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";
  const title = "Georginan Food";
  const description = "Good and healthy food * $$ * 4 * (+3212)";
  return (
    <View
      style={{
        borderBottomWidth: 1,
        borderBottomColor: "#e5e5e5",
        paddingBottom: 10,
      }}
    >
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }) => (
  <Image
    source={{
      uri: image,
    }}
    style={{ width: "100%", height: 180 }}
  />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {title}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontSize: 15,
      fontWeight: "400",
    }}
  >
    {description}
  </Text>
);

export default About;
