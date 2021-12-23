import * as React from "react";
import { View, Text } from "react-native";
import SearchBar from "./components/Home/SearchBar";
import Home from "./screens/Home";
import RestaurantDetails from "./screens/RestaurantDetails";
import Test from "./screens/test";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      {/* <Home /> */}
      {/* <Test /> */}
      <RestaurantDetails />
    </View>
  );
}
