import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    image: require("../../assets/images/shopping-bag.png"),
    text: "Farmhouse Chicken Biryani",
    description: "Great tasty chicken biryani",
    price: "13.50$",
  },
  {
    image: require("../../assets/images/soft-drink.png"),
    text: "Farmhouse Mutton Biryani",
    description: "Great tasty chicken biryani",
    price: "22.80$",
  },
  {
    image: require("../../assets/images/bread.png"),
    text: "Glm Biryani",
    description: "Great tasty chicken biryani",
    price: "73.30$",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "700",
  },
});

export default function MenuItem() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food, index) => (
        <>
          <View style={styles.menuItemStyle}>
            <FoodInfo
              food={food}
              title={food.text}
              description={food.description}
            />

            <FoodImage food={food} image={food.image} />
          </View>
          <Divider width={0.5} orientation="horizontal" />
        </>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{props.food.text}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = (props) => (
  <View>
    <Image
      source={props.food.image}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8,
        marginLeft: 20,
      }}
    />
  </View>
);
