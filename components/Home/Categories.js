import React, { Component } from "react";
import { Image, ScrollView, Text, View } from "react-native";

const items = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Pick-up",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Soft Drinks",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Bakery Items",
  },
  {
    image: require("../../assets/images/fast-food.png"),
    text: "Fast Foods",
  },
  {
    image: require("../../assets/images/deals.png"),
    text: "Deals",
  },
  {
    image: require("../../assets/images/coffee.png"),
    text: "Coffee & Tea",
  },
  {
    image: require("../../assets/images/desserts.png"),
    text: "Desserts",
  },
];

export default class Categories extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 5,
          backgroundColor: "#ffffff",
          paddingVertical: 10,
          paddingLeft: 20,
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            {items.map((item, index) => {
              return (
                <View
                  key={index}
                  style={{ marginRight: 30, alignItems: "center" }}
                >
                  <Image
                    source={item.image}
                    style={{ width: 50, height: 40, resizeMode: "contain" }}
                  />
                  <Text style={{ fontSize: 13, fontWeight: "700" }}>
                    {item.text}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
    );
  }
}
