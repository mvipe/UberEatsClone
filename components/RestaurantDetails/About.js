import React from "react";
import { View, Text, Image } from "react-native";


const image =
  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg";
const title = "Farmhouse Chicken Biryani ";
const description = "Thai • Comfort Food • $$ • 4 ⭐  (2913+)";


const getRestaurantInfo={
     image =
  "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
 title = "Farmhouse Chicken Biryani ",
 description = "Thai • Comfort Food • $$ • 4 ⭐  (2913+)",

}
export default function About() {
  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName title={title} />
      <RestaurantDescription desc={description} />
    </View>
  );
}

const RestaurantImage = (props) => (
  <Image
    source={require("../../assets/images/bg1.jpg")}
    style={{ width: "100%", height: 180 }}
  />
);

const RestaurantName = (props) => (
  <Text
    style={{
      fontSize: 26,
      fontWeight: "700",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.title}
  </Text>
);

const RestaurantDescription = (props) => (
  <Text
    style={{
      marginTop: 10,
      marginHorizontal: 15,
      fontWeight: "500",
      fontSize: 15.5,
    }}
  >
    {props.desc}
  </Text>
);
