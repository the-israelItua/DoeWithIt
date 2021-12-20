import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { MEALS } from "../data/dummy";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const MealDetails = ({ navigation }) => {
  const selectedId = navigation.getParam("mealId");
  const selected = MEALS.find((meal) => meal.id === selectedId);

  return (
    <ScrollView>
      <Image source={{ uri: selected?.imageUrl }} style={styles.image} />
      <View style={styles.mealDetail}>
        <Text style={styles.text}>{selected?.duration} m</Text>
        <Text style={styles.text}>{selected?.complexity.toUpperCase()}</Text>
        <Text style={styles.text}>{selected?.affordability.toUpperCase()}</Text>
      </View>
      <Text style={styles.subtitle}>Ingredients</Text>
      {selected.ingredients.map((item) => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {selected.steps.map((item) => (
        <Text style={styles.text} key={item}>
          {item}
        </Text>
      ))}
    </ScrollView>
  );
};

MealDetails.navigationOptions = (navigationData) => {
  return {
    headerTitle: navigationData.navigation.getParam("mealTitle"),
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favourite"
          iconName="ios-star"
          onPress={() => console.log("press")}
        />
      </HeaderButtons>
    ),
  };
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
  },
  text: {
    margin: 10,
  },
  mealDetail: {
    flexDirection: "row",
    backgroundColor: "white",
  },
});

export default MealDetails;
