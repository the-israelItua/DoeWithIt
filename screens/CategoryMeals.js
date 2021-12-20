import React from "react";
import { MEALS } from "../data/dummy";
import MealList from "../components/MealList";

const CategoryMeal = ({ navigation }) => {
  const catId = navigation.getParam("categoryId");
  const displayMeals = MEALS.filter(
    (item) => item.categoryId.indexOf(catId) >= 0
  );

  return <MealList displayMeals={displayMeals} navigation={navigation} />;
};

CategoryMeal.navigationOptions = (navigationData) => {
  const title = navigationData.navigation.getParam("categoryTitle");
  return {
    headerTitle: title,
  };
};

export default CategoryMeal;
