import React from "react";
import { MEALS } from "../data/dummy";
import MealList from "../components/MealList";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const Favourite = ({ navigation }) => {
  const displayMeals = MEALS.filter((item) => item.id === "m1");

  return <MealList displayMeals={displayMeals} navigation={navigation} />;
};

Favourite.navigationOptions = (navData) => {
  return {
    headerTitle: "Favourites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};
export default Favourite;
