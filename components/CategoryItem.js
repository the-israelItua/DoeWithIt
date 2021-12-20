import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const CategoryItem = ({ navigation, itemData }) => {
  return (
    <TouchableOpacity
      style={{ ...styles.gridItem, backgroundColor: itemData.item.color }}
      onPress={() => {
        navigation.navigate({
          routeName: "CategoryMeals",
          params: {
            categoryId: itemData.item.id,
            categoryTitle: itemData.item.title,
          },
        });
      }}
    >
      <View>
        <Text style={styles.text}>{itemData.item.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 3,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontFamily: "open-sans-bold",
  },
});

export default CategoryItem;
