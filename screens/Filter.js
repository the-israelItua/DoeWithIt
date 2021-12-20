import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import Colors from "../constants/colors";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

const FilterSwitch = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text>{item.title}</Text>
      <Switch
        trackColor={{ true: Colors.primary }}
        value={item.value}
        onValueChange={(newValue) => item.onChange(newValue)}
      />
    </View>
  );
};

const Filter = ({ navigation }) => {
  const [isGluttenFree, setIsGluttenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [text, setText] = useState(false);

  const data = [
    {
      title: "Glutten-Free",
      value: isGluttenFree,
      onChange: setIsGluttenFree,
    },
    {
      title: "Lactose-Free",
      value: isLactoseFree,
      onChange: setIsLactoseFree,
    },
    {
      title: "Vegan",
      value: isVegan,
      onChange: setIsVegan,
    },
    {
      title: "Vegetarian",
      value: isVegetarian,
      onChange: setIsVegetarian,
    },
  ];

  const saveFilter = useCallback(() => {
    const filters = {
      glutenFree: isGluttenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };
    console.log(filters);
  }, [isGluttenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilter });
  }, [navigation, saveFilter]);

  return (
    <View style={styles.screen}>
      <Text style={styles.header}>Available Filters/Restrictions</Text>
      {data.map((item) => (
        <FilterSwitch item={item} key={item.title} />
      ))}
      {text && <Text>E don go oooooo</Text>}
    </View>
  );
};

Filter.navigationOptions = (navData) => {
  console.log(navData.navigation);
  return {
    headerTitle: "Filter Meals",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => navData.navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-save"
          onPress={navData.navigation.getParam("save")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
  },
  header: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    marginTop: 30,
    marginHorizontal: 20,
  },
});

export default Filter;
