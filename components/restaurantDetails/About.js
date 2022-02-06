import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";

const About = () => {
  const image =
    "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg";
  const title = "Georginan Food";
  const description = "Good and healthy food * $$ * 4 * (+3212)";
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle title={title} />
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
