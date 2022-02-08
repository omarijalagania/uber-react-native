import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const About = ({ route }) => {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formatedCategories = categories
    .map((category) => category.title)
    .join(" . ");

  const description = `${formatedCategories} ${price ? " .  " + price : ""} ${
    reviews ? " .  " + reviews : ""
  } ${rating ? " .  " + rating : ""}`;

  return (
    <View style={{ backgroundColor: "#0277bd" }}>
      <RestaurantImage image={image} />
      <RestaurantTitle title={name} />
      <RestaurantDescription description={description} />
      <Divider width={1} style={{ paddingBottom: 10 }} />
    </View>
  );
};

const RestaurantImage = ({ image }) => (
  <Image
    source={{
      uri: image,
    }}
    style={{ width: "100%", height: 230 }}
  />
);

const RestaurantTitle = ({ title }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "bold",
      marginTop: 10,
      color: "white",
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
      color: "white",
    }}
  >
    {description}
  </Text>
);

export default About;
