import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

const MealItem = ({ itemData, onSelect }) => {
  return (
    <TouchableOpacity onPress={onSelect} style={styles.mealItem}>
      <View>
        <View style={(styles.mealRow, styles.mealHeader)}>
          <ImageBackground
            source={{ uri: itemData.item.imageUrl }}
            style={styles.img}
          >
            <Text style={styles.bgText}>{itemData.item.title}</Text>
          </ImageBackground>
        </View>
        <View style={(styles.mealRow, styles.mealDetail)}>
          <Text>{itemData.item.duration} m</Text>
          <Text>{itemData.item.complexity.toUpperCase()}</Text>
          <Text>{itemData.item.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    padding: 10,
    marginBottom: 10,
  },
  mealHeader: {
    height: "85%",
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    borderRadius: 8,
    overflow: "hidden",
  },
  bgText: {
    color: "white",
    fontFamily: "open-sans-bold",
    fontSize: 18,
    backgroundColor: "rgba(0,0,0,0.8)",
    padding: 10,
    width: "100%",
    textAlign: "center",
  },
  mealDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    height: "15%",
  },
});

export default MealItem;
