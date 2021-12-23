import React from "react";
import { View, Text } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/RestaurantDetails/About";
import MenuItem from "../components/RestaurantDetails/MenuItem";

export default function RestaurantDetails() {
  return (
    <View>
      <About />
      <Divider width={1} style={{ marginVertical: 20 }} />
      <MenuItem />
    </View>
  );
}
