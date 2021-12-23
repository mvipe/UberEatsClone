import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function BottomTabs() {
  return (
    <View
      style={{
        flexDirection: "row",
        margin: 5,
        marginHorizontal: 30,
        justifyContent: "space-between",
      }}
    >
      <Icon icon="home" text="Home" />
      <Icon icon="search" text="Search" />
      <Icon icon="shopping-bag" text="Grocery" />
      <Icon icon="first-order" text="Orders" />
      <Icon icon="user" text="Account" />
    </View>
  );
}

const Icon = (props) => (
  <TouchableOpacity>
    <View style={{ alignItems: "center" }}>
      <FontAwesome
        name={props.icon}
        size={25}
        style={{ marginBottom: 3, alignItems: "center" }}
      />
      <Text>{props.text}</Text>
    </View>
  </TouchableOpacity>
);
