import React from "react";
import { FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = ({ displayMeals, navigation }) => {
  return (
    <FlatList
      numColumns={2}
      data={displayMeals}
      renderItem={(item) => (
        <MealItem
          itemData={item}
          onSelect={() => {
            navigation.navigate({
              routeName: "MealDetails",
              params: { mealId: item.item.id, mealTitle: item.item.title },
            });
          }}
        />
      )}
    />
  );
};

export default MealList;
