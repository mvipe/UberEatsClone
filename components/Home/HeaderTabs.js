import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View
      style={{
        flexDirection: "row",

        justifyContent: "center",
      }}
    >
      <HeaderButton
        title="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        title="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
}

const HeaderButton = (props) => (
  <TouchableOpacity
    style={{
      backgroundColor: props.activeTab === props.title ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      height: 35,
      borderRadius: 30,
    }}
    onPress={() => {
      props.setActiveTab(props.title);
    }}
  >
    <Text
      style={{
        color: props.activeTab === props.title ? "white" : "black",
        fontSize: 15,
        fontWeight: "bold",
      }}
    >
      {props.title}
    </Text>
  </TouchableOpacity>
);
